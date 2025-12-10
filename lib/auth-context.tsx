"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

export type UserRole = "clinic_admin" | "provider" | "patient"

export interface User {
  id: string
  email: string
  role: UserRole
  clinicId?: string
  name: string
  providerType?: string // For providers: NP, PA, Chiropractor, etc.
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("peptide_ehr_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, role: UserRole) => {
    console.log("[v0] Login started", { email, role })
    // Mock authentication - replace with real API call
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: "1",
      email,
      role,
      name: "Demo User",
      clinicId: role !== "patient" ? "clinic-1" : undefined,
      providerType: role === "provider" ? "Nurse Practitioner" : undefined,
    }

    console.log("[v0] Mock user created", mockUser)
    setUser(mockUser)
    localStorage.setItem("peptide_ehr_user", JSON.stringify(mockUser))
    setIsLoading(false)

    // Redirect based on role
    let redirectPath = "/"
    if (role === "clinic_admin") {
      redirectPath = "/clinic/dashboard"
    } else if (role === "provider") {
      redirectPath = "/provider/dashboard"
    } else {
      redirectPath = "/patient/dashboard"
    }

    console.log("[v0] Redirecting to", redirectPath)
    router.push(redirectPath)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("peptide_ehr_user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
