import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, UserCog, User } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/design-mode/brandmark-design.png"
              alt="Bridge MDX Logo"
              width={485}
              height={97}
              priority
              className="w-auto h-19 md:h-27 -ml-12 md:-ml-16"
            />
          </div>
          {/* </CHANGE> */}

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Peptide EMR System</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electronic molecule records management system designed specifically for peptide therapy
              clinics
            </p>
          </div>

          {/* Login Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Clinic Admin</CardTitle>
                <CardDescription>Manage your clinic, providers, and billing</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/auth/clinic-login">
                  <Button className="w-full">Clinic Login</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <UserCog className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Provider</CardTitle>
                <CardDescription>Access patient records and manage treatments</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/auth/provider-login">
                  <Button className="w-full">Provider Login</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Patient</CardTitle>
                <CardDescription>View your records and manage treatments</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/auth/patient-login">
                  <Button className="w-full">Patient Portal</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* New Clinic Registration */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">New clinic? Get started today</p>
            <Link href="/auth/clinic-register">
              <Button variant="outline" size="lg">
                Register Your Clinic
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
