"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, Calendar, ShoppingCart, ArrowLeft, AlertTriangle, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const navigation = [
  { name: "Dashboard", href: "/provider/dashboard", icon: Activity },
  { name: "My Patients", href: "/provider/patients", icon: Users },
  { name: "Schedule", href: "/provider/schedule", icon: Calendar },
  { name: "Peptide Library", href: "/provider/peptides", icon: ShoppingCart },
  { name: "Dosing Guide", href: "/provider/dosing-guide", icon: BookOpen },
]

export default function PeptideDetailPage() {
  return (
    <ProtectedRoute allowedRoles={["provider", "clinic_admin"]}>
      <DashboardLayout navigation={navigation}>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/provider/peptides">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold tracking-tight">BPC-157</h2>
                  <Badge>Healing & Recovery</Badge>
                </div>
                <p className="text-muted-foreground">Body Protection Compound-157</p>
              </div>
            </div>
            <Button>Prescribe to Patient</Button>
          </div>

          {/* RUO Warning */}
          <Card className="border-amber-500/50 bg-amber-500/5">
            <CardContent className="flex items-start gap-3 pt-6">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-amber-900 dark:text-amber-100">Research Use Only (RUO)</p>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  This peptide is for research purposes only and is not FDA-approved for human consumption. Patients
                  must sign appropriate consent forms acknowledging this disclosure.
                </p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="dosing">Dosing Guidelines</TabsTrigger>
              <TabsTrigger value="reconstitution">Reconstitution</TabsTrigger>
              <TabsTrigger value="safety">Safety & Side Effects</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    BPC-157 is a synthetic peptide derived from a protective protein found in the stomach. It has shown
                    remarkable healing properties in research studies, particularly for musculoskeletal injuries, gut
                    health, and tissue repair.
                  </p>
                  <p>
                    The peptide works by promoting angiogenesis (formation of new blood vessels), modulating growth
                    factor expression, and reducing inflammation. It has been studied extensively for its potential to
                    accelerate healing of tendons, ligaments, muscles, and the gastrointestinal tract.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Indications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tendon and ligament injuries (tennis elbow, Achilles tendinitis)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Muscle tears and strains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Joint pain and arthritis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Inflammatory bowel disease (IBD) and gut health</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Post-surgical recovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Chronic pain conditions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Promotes angiogenesis and vascular endothelial growth factor (VEGF) expression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Modulates nitric oxide (NO) production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Reduces inflammation through multiple pathways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Protects and heals the gastrointestinal tract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Accelerates collagen formation and tissue regeneration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Dosing */}
            <TabsContent value="dosing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Dosing Protocol</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Typical Dose Range</p>
                      <p className="text-lg font-semibold">250-500 mcg</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Frequency</p>
                      <p className="text-lg font-semibold">1-2 times daily</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Route of Administration</p>
                      <p className="text-lg font-semibold">Subcutaneous injection</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Treatment Duration</p>
                      <p className="text-lg font-semibold">4-8 weeks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dosing by Indication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Acute Injury (Tendon/Ligament)</p>
                      <p className="text-sm text-muted-foreground">
                        500 mcg twice daily for 4-6 weeks, then reduce to 250 mcg once daily for maintenance
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Chronic Joint Pain</p>
                      <p className="text-sm text-muted-foreground">250-350 mcg once or twice daily for 6-8 weeks</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Gut Health / IBD</p>
                      <p className="text-sm text-muted-foreground">
                        250 mcg twice daily, taken on empty stomach for optimal absorption
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Post-Surgical Recovery</p>
                      <p className="text-sm text-muted-foreground">
                        500 mcg twice daily starting 1-2 days post-surgery for 4-6 weeks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Can be injected subcutaneously anywhere, but near injury site may be beneficial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>For gut health, inject on empty stomach (morning before breakfast)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Rotate injection sites to prevent irritation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Can be combined with TB-500 for enhanced healing effects</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reconstitution */}
            <TabsContent value="reconstitution" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reconstitution Instructions</CardTitle>
                  <CardDescription>How to properly prepare BPC-157 for injection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Gather Supplies</p>
                        <p className="text-sm text-muted-foreground">
                          BPC-157 vial (typically 5mg), bacteriostatic water, alcohol swabs, insulin syringes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Clean the Vial</p>
                        <p className="text-sm text-muted-foreground">
                          Wipe the rubber stopper of both vials with alcohol swabs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Draw Bacteriostatic Water</p>
                        <p className="text-sm text-muted-foreground">Draw 2ml of bacteriostatic water into syringe</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Add Water to Peptide</p>
                        <p className="text-sm text-muted-foreground">
                          Slowly inject water down the side of the vial, NOT directly onto the powder
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">5</span>
                      </div>
                      <div>
                        <p className="font-medium">Gently Mix</p>
                        <p className="text-sm text-muted-foreground">
                          Swirl gently (do NOT shake) until powder is fully dissolved. May take 1-2 minutes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">6</span>
                      </div>
                      <div>
                        <p className="font-medium">Store Properly</p>
                        <p className="text-sm text-muted-foreground">
                          Store in refrigerator (2-8°C). Use within 30 days of reconstitution
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dosing Calculations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-semibold mb-2">Standard Reconstitution (5mg vial + 2ml water)</p>
                    <p className="text-sm">Concentration: 2.5mg/ml or 2,500 mcg/ml</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Common Doses:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• 250 mcg = 0.1ml (10 units on insulin syringe)</li>
                      <li>• 350 mcg = 0.14ml (14 units on insulin syringe)</li>
                      <li>• 500 mcg = 0.2ml (20 units on insulin syringe)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety */}
            <TabsContent value="safety" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Side Effects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Common (Generally Mild)</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Injection site reactions (redness, mild pain)</li>
                        <li>• Temporary fatigue or drowsiness</li>
                        <li>• Mild headache</li>
                        <li>• Nausea (rare)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Rare</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Dizziness</li>
                        <li>• Hot flashes</li>
                        <li>• Changes in blood pressure</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contraindications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Pregnancy or breastfeeding (insufficient safety data)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Active cancer (theoretical concern about angiogenesis)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Known hypersensitivity to peptides</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Drug Interactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    BPC-157 has minimal known drug interactions. However, patients should inform their provider of all
                    medications, particularly:
                  </p>
                  <ul className="space-y-1 text-sm mt-3">
                    <li>• Anticoagulants (may enhance healing but monitor closely)</li>
                    <li>• NSAIDs (BPC-157 may reduce need for pain medication)</li>
                    <li>• Other peptides (generally safe to combine)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitoring Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Baseline assessment of injury/condition before starting</li>
                    <li>• Follow-up at 2-4 weeks to assess response</li>
                    <li>• Monitor for any adverse reactions</li>
                    <li>• Reassess need for continued therapy at 6-8 weeks</li>
                    <li>• No routine lab monitoring typically required</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research */}
            <TabsContent value="research" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Research Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    BPC-157 has been extensively studied in animal models and has shown promising results across
                    multiple areas of healing and tissue repair. While human clinical trials are limited, the existing
                    research demonstrates significant potential.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Note: Most research has been conducted in animal models. Human clinical data is limited, which is
                    why this peptide is classified as Research Use Only (RUO).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Research Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Tendon Healing</p>
                      <p className="text-sm text-muted-foreground">
                        Studies show accelerated healing of Achilles tendon injuries with improved biomechanical
                        properties of healed tissue.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Gastrointestinal Protection</p>
                      <p className="text-sm text-muted-foreground">
                        Demonstrated protective effects against NSAID-induced ulcers and inflammatory bowel disease in
                        animal models.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Muscle Healing</p>
                      <p className="text-sm text-muted-foreground">
                        Enhanced recovery from muscle tears and improved muscle regeneration in research studies.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold mb-1">Neuroprotection</p>
                      <p className="text-sm text-muted-foreground">
                        Some studies suggest potential neuroprotective effects and benefits for nerve healing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selected References</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Sikiric P, et al. (2018)</p>
                      <p className="text-muted-foreground">
                        "Stable gastric pentadecapeptide BPC 157: Novel therapy in gastrointestinal tract"
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Current Pharmaceutical Design</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Chang CH, et al. (2011)</p>
                      <p className="text-muted-foreground">
                        "The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth"
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Journal of Applied Physiology</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Krivic A, et al. (2008)</p>
                      <p className="text-muted-foreground">
                        "Achilles detachment in rat and stable gastric pentadecapeptide BPC 157"
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Journal of Physiology and Pharmacology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
