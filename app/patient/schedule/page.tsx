"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Calendar, Calculator, BookOpen, Phone, Clock, Syringe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const navigation = [
  { name: "Dashboard", href: "/patient/dashboard", icon: Home },
  { name: "Shop Peptides", href: "/patient/shop", icon: ShoppingBag },
  { name: "My Schedule", href: "/patient/schedule", icon: Calendar },
  { name: "Calculator", href: "/patient/calculator", icon: Calculator },
  { name: "Resources", href: "/patient/resources", icon: BookOpen },
  { name: "Emergency", href: "/patient/emergency", icon: Phone },
]

const schedule = [
  {
    day: "Monday",
    doses: [
      { time: "8:00 AM", peptide: "BPC-157", dose: "250mcg", status: "completed" },
      { time: "8:00 PM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
    ],
  },
  {
    day: "Tuesday",
    doses: [
      { time: "8:00 AM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
      { time: "8:00 PM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
    ],
  },
  {
    day: "Wednesday",
    doses: [
      { time: "8:00 AM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
      { time: "10:00 AM", peptide: "Semaglutide", dose: "0.25mg", status: "upcoming" },
      { time: "8:00 PM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
    ],
  },
  {
    day: "Thursday",
    doses: [
      { time: "8:00 AM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
      { time: "8:00 PM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
    ],
  },
  {
    day: "Friday",
    doses: [
      { time: "8:00 AM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
      { time: "8:00 PM", peptide: "BPC-157", dose: "250mcg", status: "upcoming" },
    ],
  },
]

export default function SchedulePage() {
  return (
    <ProtectedRoute allowedRoles={["patient"]}>
      <DashboardLayout navigation={navigation}>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Treatment Schedule</h2>
            <p className="text-muted-foreground">Your personalized peptide dosing calendar</p>
          </div>

          <div className="grid gap-4">
            {schedule.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <CardTitle className="text-lg">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.doses.map((dose, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Syringe className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{dose.peptide}</p>
                            <p className="text-sm text-muted-foreground">{dose.dose}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {dose.time}
                          </div>
                          <Badge variant={dose.status === "completed" ? "default" : "secondary"}>
                            {dose.status === "completed" ? "Completed" : "Upcoming"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
