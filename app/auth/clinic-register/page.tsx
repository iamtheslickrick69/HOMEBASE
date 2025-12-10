"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ClinicRegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Clinic Information
  const [clinicName, setClinicName] = useState("")
  const [clinicAddress, setClinicAddress] = useState("")
  const [clinicCity, setClinicCity] = useState("")
  const [clinicState, setClinicState] = useState("")
  const [clinicZip, setClinicZip] = useState("")
  const [clinicPhone, setClinicPhone] = useState("")
  const [clinicEmail, setClinicEmail] = useState("")
  const [clinicWebsite, setClinicWebsite] = useState("")
  const [taxId, setTaxId] = useState("")

  // Owner Information
  const [ownerName, setOwnerName] = useState("")
  const [ownerEmail, setOwnerEmail] = useState("")
  const [ownerPhone, setOwnerPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Billing Information
  const [bankName, setBankName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [routingNumber, setRoutingNumber] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock registration success
    alert("Clinic registered successfully! Please log in.")
    router.push("/auth/clinic-login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Register Your Clinic</CardTitle>
            <CardDescription>Complete the onboarding process to get started</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Step {step} of 3</span>
                <span className="text-sm text-muted-foreground">
                  {step === 1 ? "Clinic Info" : step === 2 ? "Owner Info" : "Billing"}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Clinic Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="clinicName">Clinic Name *</Label>
                    <Input
                      id="clinicName"
                      value={clinicName}
                      onChange={(e) => setClinicName(e.target.value)}
                      placeholder="Advanced Peptide Therapy Clinic"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clinicAddress">Street Address *</Label>
                    <Input
                      id="clinicAddress"
                      value={clinicAddress}
                      onChange={(e) => setClinicAddress(e.target.value)}
                      placeholder="123 Medical Plaza"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clinicCity">City *</Label>
                      <Input
                        id="clinicCity"
                        value={clinicCity}
                        onChange={(e) => setClinicCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinicState">State *</Label>
                      <Input
                        id="clinicState"
                        value={clinicState}
                        onChange={(e) => setClinicState(e.target.value)}
                        placeholder="CA"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clinicZip">ZIP Code *</Label>
                    <Input
                      id="clinicZip"
                      value={clinicZip}
                      onChange={(e) => setClinicZip(e.target.value)}
                      placeholder="90210"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clinicPhone">Phone *</Label>
                      <Input
                        id="clinicPhone"
                        type="tel"
                        value={clinicPhone}
                        onChange={(e) => setClinicPhone(e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinicEmail">Email *</Label>
                      <Input
                        id="clinicEmail"
                        type="email"
                        value={clinicEmail}
                        onChange={(e) => setClinicEmail(e.target.value)}
                        placeholder="info@clinic.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clinicWebsite">Website</Label>
                    <Input
                      id="clinicWebsite"
                      type="url"
                      value={clinicWebsite}
                      onChange={(e) => setClinicWebsite(e.target.value)}
                      placeholder="https://www.clinic.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="taxId">Tax ID / EIN *</Label>
                    <Input
                      id="taxId"
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)}
                      placeholder="12-3456789"
                      required
                    />
                  </div>

                  <Button type="button" className="w-full" onClick={() => setStep(2)}>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Step 2: Owner Information */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner / Admin Name *</Label>
                    <Input
                      id="ownerName"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Dr. John Smith"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerEmail">Owner Email *</Label>
                    <Input
                      id="ownerEmail"
                      type="email"
                      value={ownerEmail}
                      onChange={(e) => setOwnerEmail(e.target.value)}
                      placeholder="admin@clinic.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerPhone">Owner Phone *</Label>
                    <Input
                      id="ownerPhone"
                      type="tel"
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button type="button" className="flex-1" onClick={() => setStep(3)}>
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Billing Information */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <p className="text-sm text-muted-foreground">
                      This information is used for receiving payments from the integrated shopping portal. All data is
                      encrypted and secure.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name *</Label>
                    <Input
                      id="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      placeholder="First National Bank"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number *</Label>
                    <Input
                      id="accountNumber"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="1234567890"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="routingNumber">Routing Number *</Label>
                    <Input
                      id="routingNumber"
                      value={routingNumber}
                      onChange={(e) => setRoutingNumber(e.target.value)}
                      placeholder="123456789"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => setStep(2)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button type="submit" className="flex-1" disabled={isLoading}>
                      {isLoading ? "Registering..." : "Complete Registration"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
