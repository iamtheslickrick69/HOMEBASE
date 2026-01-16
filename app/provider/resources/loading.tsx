"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, Activity, Calendar, ShoppingCart, BookOpen, Calculator, FileText } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/provider/dashboard", icon: Activity },
  { name: "My Patients", href: "/provider/patients", icon: Users },
  { name: "Schedule", href: "/provider/schedule", icon: Calendar },
  { name: "Peptide Library", href: "/provider/peptides", icon: ShoppingCart },
  { name: "Dosing Guide", href: "/provider/dosing-guide", icon: BookOpen },
  { name: "Calculator", href: "/provider/calculator", icon: Calculator },
  { name: "Resources", href: "/provider/resources", icon: FileText },
]

export default function Loading() {
  return (
    <DashboardLayout navigation={navigation}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-10 w-full max-w-md" />

          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
