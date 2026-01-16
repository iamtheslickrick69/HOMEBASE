"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((j) => (
                    <Skeleton key={j} className="h-12" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-32 mx-auto" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
