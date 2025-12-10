"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"
import {
  Truck,
  CheckCircle,
  Clock,
  ShoppingCart,
  Package,
  Home,
  Calculator,
  Calendar,
  BookOpen,
  Phone,
} from "lucide-react"

const orders = [
  {
    id: "ORD-001234",
    date: "2024-01-20",
    status: "delivered",
    items: [
      { name: "BPC-157 (5mg)", quantity: 2, price: 89.99 },
      { name: "Bacteriostatic Water", quantity: 1, price: 19.99 },
    ],
    total: 199.97,
    trackingNumber: "1Z999AA10123456784",
    deliveredDate: "2024-01-23",
  },
  {
    id: "ORD-001235",
    date: "2024-01-25",
    status: "shipped",
    items: [
      { name: "TB-500 (5mg)", quantity: 1, price: 119.99 },
      { name: "Insulin Syringes (100 pack)", quantity: 1, price: 24.99 },
    ],
    total: 144.98,
    trackingNumber: "1Z999AA10123456785",
    estimatedDelivery: "2024-01-28",
  },
  {
    id: "ORD-001236",
    date: "2024-01-26",
    status: "processing",
    items: [{ name: "BPC-157 (5mg)", quantity: 3, price: 89.99 }],
    total: 269.97,
    estimatedShip: "2024-01-27",
  },
]

const statusConfig = {
  processing: {
    icon: Clock,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    label: "Processing",
  },
  shipped: {
    icon: Truck,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    label: "Shipped",
  },
  delivered: {
    icon: CheckCircle,
    color: "text-green-500",
    bg: "bg-green-500/10",
    label: "Delivered",
  },
}

const navigation = [
  { name: "Dashboard", href: "/patient/dashboard", icon: Home },
  { name: "My Peptides", href: "/patient/shop", icon: ShoppingCart },
  { name: "Orders", href: "/patient/orders", icon: Package },
  { name: "Shop", href: "/patient/peptides", icon: Activity },
  { name: "Calculator", href: "/patient/calculator", icon: Calculator },
  { name: "Schedule", href: "/patient/schedule", icon: Calendar },
  { name: "Resources", href: "/patient/resources", icon: BookOpen },
  { name: "Emergency", href: "/patient/emergency", icon: Phone },
]

export default function PatientOrdersPage() {
  return (
    <ProtectedRoute allowedRoles={["patient"]}>
      <DashboardLayout navigation={navigation}>
        <div className="space-y-6">
          {orders.map((order) => {
            const config = statusConfig[order.status as keyof typeof statusConfig]
            const StatusIcon = config.icon

            return (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">Order {order.id}</CardTitle>
                      <CardDescription>Placed on {order.date}</CardDescription>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${config.bg}`}>
                      <StatusIcon className={`w-4 h-4 ${config.color}`} />
                      <span className={`text-sm font-medium ${config.color}`}>{config.label}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span>
                          {item.name} x{item.quantity}
                        </span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>

                  {/* Tracking Info */}
                  {order.status === "shipped" && (
                    <div className="p-3 bg-muted rounded-lg space-y-1">
                      <p className="text-sm font-medium">Tracking Number: {order.trackingNumber}</p>
                      <p className="text-xs text-muted-foreground">Estimated Delivery: {order.estimatedDelivery}</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        Track Package
                      </Button>
                    </div>
                  )}

                  {order.status === "delivered" && (
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <p className="text-sm font-medium text-green-700 dark:text-green-400">
                        Delivered on {order.deliveredDate}
                      </p>
                    </div>
                  )}

                  {order.status === "processing" && (
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Your order is being prepared. Estimated ship date: {order.estimatedShip}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
