import { DashboardLayout } from "@/components/dashboard-layout"
import { Building2, Users, UserCog, Activity, DollarSign, BarChart, TrendingUp } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/clinic/dashboard", icon: Activity },
  { name: "Providers", href: "/clinic/providers", icon: UserCog },
  { name: "Patients", href: "/clinic/patients", icon: Users },
  { name: "Analytics", href: "/clinic/analytics", icon: TrendingUp },
  { name: "Billing", href: "/clinic/billing", icon: DollarSign },
  { name: "Reports", href: "/clinic/reports", icon: BarChart },
  { name: "Settings", href: "/clinic/settings", icon: Building2 },
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
