import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { ATLAS_SYSTEM_PROMPTS, SAMPLE_SOURCES, type UserRole, type AtlasResponse } from '@/lib/atlas-config'

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, role, conversationHistory = [] } = body

    // Validate role
    if (!role || !['clinic_admin', 'provider', 'patient'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role provided' },
        { status: 400 }
      )
    }

    // Validate message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Get role-specific system prompt
    const systemPrompt = ATLAS_SYSTEM_PROMPTS[role as UserRole]

    // Build conversation messages
    const messages = [
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user' as const,
        content: message
      }
    ]

    // Call Anthropic API with Claude Sonnet 4.5
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages
    })

    // Extract response text
    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, but I encountered an error processing your request.'

    // Determine relevant sources based on message content
    // This is a simplified version - in production, you'd use more sophisticated matching
    const sources = determineRelevantSources(message, assistantMessage, role as UserRole)

    // Prepare Atlas response
    const atlasResponse: AtlasResponse = {
      message: assistantMessage,
      sources: sources
    }

    return NextResponse.json(atlasResponse)

  } catch (error: any) {
    console.error('Atlas API Error:', error)

    // Handle specific Anthropic API errors
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your Anthropic API configuration.' },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    )
  }
}

/**
 * Determine relevant sources based on message content
 * This is a simple keyword-based approach - can be enhanced with embeddings/semantic search
 */
function determineRelevantSources(userMessage: string, assistantResponse: string, role: UserRole) {
  const sources = []
  const combinedText = (userMessage + ' ' + assistantResponse).toLowerCase()

  // BPC-157 related
  if (combinedText.includes('bpc') || combinedText.includes('bpc-157') || combinedText.includes('tissue repair')) {
    sources.push(SAMPLE_SOURCES.bpc157_dosing)
  }

  // General peptide therapy
  if (combinedText.includes('peptide') || combinedText.includes('dosing') || combinedText.includes('protocol')) {
    sources.push(SAMPLE_SOURCES.peptide_guidelines)
  }

  // Analytics/Revenue (clinic admin only)
  if (role === 'clinic_admin' && (combinedText.includes('revenue') || combinedText.includes('analytics') || combinedText.includes('prescription'))) {
    sources.push(SAMPLE_SOURCES.clinic_analytics)
  }

  // HIPAA/Compliance
  if (combinedText.includes('hipaa') || combinedText.includes('compliance') || combinedText.includes('privacy')) {
    sources.push(SAMPLE_SOURCES.hipaa_compliance)
  }

  // Remove duplicates
  return Array.from(new Map(sources.map(s => [s.id, s])).values())
}
