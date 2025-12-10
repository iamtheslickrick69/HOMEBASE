import { DashboardLayout } from "@/components/dashboard-layout"
import { Users, Activity, Calendar, ShoppingCart, BookOpen, Calculator, FileText, BarChart } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/provider/dashboard", icon: Activity },
  { name: "My Patients", href: "/provider/patients", icon: Users },
  { name: "Schedule", href: "/provider/schedule", icon: Calendar },
  { name: "Peptide Library", href: "/provider/peptides", icon: ShoppingCart },
  { name: "Dosing Guide", href: "/provider/dosing-guide", icon: BookOpen },
  { name: "Calculator", href: "/provider/calculator", icon: Calculator },
  { name: "Resources", href: "/provider/resources", icon: FileText },
  { name: "Reports", href: "/provider/reports", icon: BarChart },
]

export default function Loading() {
  return (
    <DashboardLayout navigation={navigation}>
      <div className="space-y-6">
        <div className="h-8 w-48 bg-muted animate-pulse rounded" />
        <div className="h-4 w-96 bg-muted animate-pulse rounded" />
        <div className="h-64 bg-muted animate-pulse rounded" />
      </div>
    </DashboardLayout>
  )
}
