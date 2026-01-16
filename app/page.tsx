"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Lock,
  Key,
  Users,
  CreditCard,
  UserPlus,
  CheckSquare,
  Calendar,
  FileText,
  DollarSign,
  Check,
  Bot,
  ShieldCheck,
} from "lucide-react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Dot Grid Background */}
      <div className="dot-grid" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          isScrolled ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#262626]" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/homebase-logo.png"
              alt="Homebase"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("platform")}
                className="text-[#A3A3A3] hover:text-white font-medium text-sm transition-colors"
              >
                Platform
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="text-[#A3A3A3] hover:text-white font-medium text-sm transition-colors"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-[#A3A3A3] hover:text-white font-medium text-sm transition-colors"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("security")}
                className="text-[#A3A3A3] hover:text-white font-medium text-sm transition-colors"
              >
                Security
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/clinic-login"
              className="px-4 py-2 text-[#D4D4D4] hover:text-white border border-[#404040] hover:border-[#525252] hover:bg-[#1A1A1A] rounded-xl font-medium text-sm transition-all"
            >
              Login
            </Link>
            <Link
              href="#demo"
              className="px-5 py-2 bg-gradient-to-r from-[#00B4D8] to-[#8B5CF6] text-white rounded-xl font-semibold text-sm shadow-[0_0_20px_rgba(0,180,216,0.25)] hover:shadow-[0_0_40px_rgba(0,180,216,0.25)] hover:-translate-y-0.5 transition-all"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-[120px] pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute -top-1/2 -left-[20%] w-[80%] h-full bg-[radial-gradient(circle,rgba(0,180,216,0.25)_0%,transparent_60%)] opacity-40 pointer-events-none" />
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[80%] bg-[radial-gradient(circle,rgba(139,92,246,0.25)_0%,transparent_60%)] opacity-30 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-[800px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgba(0,180,216,0.1)] to-[rgba(139,92,246,0.1)] border border-[rgba(0,180,216,0.2)] rounded-full text-sm text-[#00B4D8] mb-6">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full pulse" />
              The Operating System for Dental Practices
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-[1.1] mb-6">
              One platform.
              <br />
              <span className="gradient-text">Infinite possibilities.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#A3A3A3] max-w-[600px] mb-10 leading-relaxed">
              Credentials, AI automation, patient onboarding, and payments — all in one place. Stop
              juggling 15 tools. Run your entire practice from Homebase.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#demo"
                className="btn btn-primary btn-large"
              >
                Schedule a Demo
                <span className="ml-1">&rarr;</span>
              </Link>
              <button
                onClick={() => scrollToSection("platform")}
                className="btn btn-secondary btn-large"
              >
                See the Platform
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-3xl font-bold text-white">
                  <span className="text-[#00B4D8]">$40K</span>+
                </div>
                <div className="text-sm text-[#737373]">Saved per year in denied claims</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <span className="text-[#00B4D8]">70%</span>
                </div>
                <div className="text-sm text-[#737373]">Reduction in manual work</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <span className="text-[#00B4D8]">30</span> min
                </div>
                <div className="text-sm text-[#737373]">Setup time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-[60px] border-t border-b border-[#262626] bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-[#737373] text-xs uppercase tracking-[2px] mb-8">
            Trusted by practices using
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            <span className="text-2xl font-bold text-[#A3A3A3]">Dentrix</span>
            <span className="text-2xl font-bold text-[#A3A3A3]">Eaglesoft</span>
            <span className="text-2xl font-bold text-[#A3A3A3]">OpenDental</span>
            <span className="text-2xl font-bold text-[#A3A3A3]">Curve Dental</span>
            <span className="text-2xl font-bold text-[#A3A3A3]">Carestack</span>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform" className="py-[120px] relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="section-eyebrow">The Platform</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4">
              Everything your practice needs. Nothing it doesn&apos;t.
            </h2>
            <p className="text-lg text-[#A3A3A3] max-w-[600px] mx-auto">
              Four powerful modules that work together seamlessly — or use just what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Credentials Card */}
            <div className="card-dark p-10 relative overflow-hidden platform-card-blue">
              <div className="w-14 h-14 rounded-xl bg-[rgba(0,180,216,0.1)] flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-[#00B4D8]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Credentials & 2FA</h3>
              <p className="text-[#A3A3A3] mb-6 leading-relaxed">
                End password chaos forever. One vault for all your logins, with centralized 2FA codes
                your entire team can access.
              </p>
              <ul className="space-y-3">
                {[
                  "350+ insurance portal integrations",
                  "SMS/Email 2FA capture & routing",
                  "One-click employee offboarding",
                  "Complete audit trail",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[#D4D4D4] text-[0.95rem]">
                    <Check className="w-[18px] h-[18px] text-[#00B4D8] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Automation Card */}
            <div className="card-dark p-10 relative overflow-hidden platform-card-purple">
              <div className="w-14 h-14 rounded-xl bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-[#8B5CF6]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">AI Automation</h3>
              <p className="text-[#A3A3A3] mb-6 leading-relaxed">
                Let AI handle the busy work. Auto-generate invoices, submit insurance claims, and
                follow up on unpaid balances.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated patient invoicing",
                  "Insurance claim submission",
                  "Payment reconciliation",
                  "Denial management",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[#D4D4D4] text-[0.95rem]">
                    <Check className="w-[18px] h-[18px] text-[#8B5CF6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Patient Onboarding Card */}
            <div className="card-dark p-10 relative overflow-hidden platform-card-green">
              <div className="w-14 h-14 rounded-xl bg-[rgba(34,197,94,0.1)] flex items-center justify-center mb-6">
                <UserPlus className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Patient Onboarding</h3>
              <p className="text-[#A3A3A3] mb-6 leading-relaxed">
                Ditch the clipboard. Gamified intake forms patients actually complete — via SMS or
                email, before they arrive.
              </p>
              <ul className="space-y-3">
                {[
                  "Mobile-first, SMS-triggered forms",
                  "Gamified progress & rewards",
                  "Auto-verify insurance eligibility",
                  "Data accuracy verification",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[#D4D4D4] text-[0.95rem]">
                    <Check className="w-[18px] h-[18px] text-[#22C55E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payments Card */}
            <div className="card-dark p-10 relative overflow-hidden platform-card-red">
              <div className="w-14 h-14 rounded-xl bg-[rgba(239,68,68,0.1)] flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-[#EF4444]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Payments</h3>
              <p className="text-[#A3A3A3] mb-6 leading-relaxed">
                Collect payments faster with integrated processing. Patient payments, insurance
                reimbursements — all in one place.
              </p>
              <ul className="space-y-3">
                {[
                  "One-click patient payments",
                  "Insurance ERA processing",
                  "Payment plans & financing",
                  "Real-time reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[#D4D4D4] text-[0.95rem]">
                    <Check className="w-[18px] h-[18px] text-[#EF4444] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-[120px] bg-[#111111] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="section-eyebrow">The Complete Lifecycle</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4">
              From sign-up to payment. We&apos;ve got it all.
            </h2>
            <p className="text-lg text-[#A3A3A3] max-w-[600px] mx-auto">
              Homebase manages every step of the patient revenue cycle.
            </p>
          </div>

          <div className="relative mt-[60px]">
            {/* Flow Line */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#00B4D8] via-[#8B5CF6] to-[#EF4444]" />

            {/* Flow Steps */}
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 relative z-10">
              {[
                {
                  icon: UserPlus,
                  title: "Patient Signs Up",
                  desc: "Gamified intake via SMS/email",
                  color: "#00B4D8",
                },
                {
                  icon: CheckSquare,
                  title: "Data Verified",
                  desc: "Auto-check insurance & info",
                  color: "#22C55E",
                },
                {
                  icon: Calendar,
                  title: "Appointment",
                  desc: "Seamless check-in & access",
                  color: "#8B5CF6",
                },
                {
                  icon: FileText,
                  title: "Claim Filed",
                  desc: "AI submits to insurance",
                  color: "#FBBF24",
                },
                {
                  icon: DollarSign,
                  title: "Payment",
                  desc: "Collected via PayPro",
                  color: "#EF4444",
                },
              ].map((step, i) => (
                <div key={i} className="flex-1 text-center min-w-[150px]">
                  <div
                    className="w-20 h-20 bg-[#0A0A0A] border-2 border-[#404040] rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 hover:scale-110 hover:border-current"
                    style={{ color: step.color }}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                  <p className="text-[#737373] text-sm max-w-[150px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      <section id="features" className="py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Gamified Onboarding Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-[120px]">
            <div>
              <span className="section-eyebrow">Patient Onboarding</span>
              <h3 className="text-[2rem] font-bold text-white mb-4">
                Patients actually complete their forms. Really.
              </h3>
              <p className="text-[#A3A3A3] text-lg leading-relaxed mb-8">
                No more clipboards. No more illegible handwriting. No more &quot;we didn&apos;t get your
                insurance card.&quot; Homebase sends a text, patients tap through a beautiful mobile
                experience, and arrive ready to be seen.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "94%", label: "Completion rate" },
                  { value: "3 min", label: "Avg. time to complete" },
                  { value: "0", label: "Paper forms needed" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-5 text-center"
                  >
                    <div className="text-2xl font-bold text-[#00B4D8] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#737373]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="#demo" className="btn btn-primary">
                See It In Action
              </Link>
            </div>

            {/* Phone Mockup */}
            <div className="bg-[#111111] border border-[#262626] rounded-3xl p-8">
              <div className="max-w-[320px] mx-auto">
                <div className="bg-[#0A0A0A] border-[3px] border-[#404040] rounded-[32px] p-3 relative">
                  <div className="w-[120px] h-7 bg-[#0A0A0A] rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-10" />
                  <div className="bg-[#1A1A1A] rounded-3xl pt-12 pb-5 px-5 min-h-[500px]">
                    {/* Progress Dots */}
                    <div className="flex gap-2 mb-8">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 h-1 rounded-sm ${
                            i < 2 ? "bg-[#00B4D8]" : i === 2 ? "bg-[#22C55E]" : "bg-[#404040]"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="text-6xl text-center mb-6">&#129463;</div>
                    <div className="text-white text-xl font-semibold text-center mb-2">
                      Almost there!
                    </div>
                    <div className="text-[#A3A3A3] text-sm text-center mb-8">
                      Just a few more details...
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-3">
                      {[
                        { completed: true, text: "John Smith" },
                        { completed: true, text: "Delta Dental PPO" },
                        { completed: false, text: "Medical history..." },
                      ].map((field, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border ${
                            field.completed
                              ? "border-[#22C55E] bg-[rgba(34,197,94,0.05)]"
                              : "border-[#404040] bg-[#111111]"
                          }`}
                        >
                          {field.completed ? (
                            <Check className="w-5 h-5 text-[#22C55E]" />
                          ) : (
                            <div className="w-5 h-5 border border-[#737373] rounded" />
                          )}
                          <span
                            className={field.completed ? "text-white" : "text-[#A3A3A3]"}
                          >
                            {field.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 py-4 bg-gradient-to-r from-[#00B4D8] to-[#8B5CF6] text-white font-semibold rounded-xl">
                      Continue &rarr;
                    </button>

                    <div className="text-center mt-5 text-[#FBBF24] font-semibold text-sm">
                      &#127918; +50 XP for completing!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Automation Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-[120px]">
            <div className="order-2 lg:order-1 bg-[#111111] border border-[#262626] rounded-3xl p-8">
              <div className="space-y-4">
                {/* AI Card 1 */}
                <div className="bg-[#1A1A1A] border border-[#404040] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold text-[0.95rem]">
                      AI Claim Processing
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(0,180,216,0.1)] text-[#00B4D8]">
                      Processing
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex justify-between py-2.5 border-b border-[#262626]">
                      <span className="text-[#A3A3A3] text-sm">Claims Submitted Today</span>
                      <span className="text-white font-medium">47</span>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-[#262626]">
                      <span className="text-[#A3A3A3] text-sm">Auto-Verified</span>
                      <span className="text-[#22C55E] font-medium">43 (91%)</span>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <span className="text-[#A3A3A3] text-sm">Flagged for Review</span>
                      <span className="text-[#FBBF24] font-medium">4</span>
                    </div>
                  </div>
                </div>

                {/* AI Card 2 */}
                <div className="bg-[#1A1A1A] border border-[#404040] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold text-[0.95rem]">
                      Invoice Generation
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(34,197,94,0.1)] text-[#22C55E]">
                      Complete
                    </span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#A3A3A3] text-sm">Patient: Sarah Johnson</span>
                    <span className="text-white font-medium">$1,247.00</span>
                  </div>
                  <div className="h-2 bg-[#111111] rounded mt-3 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-[#00B4D8] to-[#22C55E] rounded" />
                  </div>
                </div>

                {/* AI Card 3 */}
                <div className="bg-[#1A1A1A] border border-[#404040] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold text-[0.95rem]">
                      Data Verification
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(34,197,94,0.1)] text-[#22C55E]">
                      Verified
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex justify-between py-2.5 border-b border-[#262626]">
                      <span className="text-[#A3A3A3] text-sm">Insurance Eligibility</span>
                      <span className="text-[#22C55E] font-medium">&#10003; Active</span>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <span className="text-[#A3A3A3] text-sm">Address Match</span>
                      <span className="text-[#22C55E] font-medium">&#10003; Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="section-eyebrow">AI Automation</span>
              <h3 className="text-[2rem] font-bold text-white mb-4">
                Your billing team — now 10x more productive.
              </h3>
              <p className="text-[#A3A3A3] text-lg leading-relaxed mb-8">
                Homebase AI handles the tedious work: generating invoices, submitting claims,
                reconciling payments, and following up on denials. Your team focuses on what humans
                do best.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "$40K+", label: "Saved in denied claims" },
                  { value: "70%", label: "Less manual entry" },
                  { value: "48hr", label: "Faster reimbursement" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-5 text-center"
                  >
                    <div className="text-2xl font-bold text-[#00B4D8] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#737373]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="#demo" className="btn btn-primary">
                See AI in Action
              </Link>
            </div>
          </div>

          {/* Payments Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-eyebrow">Payments</span>
              <h3 className="text-[2rem] font-bold text-white mb-4">
                Get paid faster. Way faster.
              </h3>
              <p className="text-[#A3A3A3] text-lg leading-relaxed mb-8">
                Integrated payment processing means patients can pay with one tap. Insurance
                reimbursements flow directly into your account. No more chasing checks or manual
                reconciliation.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "2 days", label: "Avg. deposit time" },
                  { value: "0.3%", label: "Processing rate" },
                  { value: "$0", label: "Hidden fees" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-5 text-center"
                  >
                    <div className="text-2xl font-bold text-[#00B4D8] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#737373]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="#demo" className="btn btn-primary">
                Learn More
              </Link>
            </div>

            <div className="bg-[#111111] border border-[#262626] rounded-3xl p-8">
              {/* Payment Stats Card */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[#404040] rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-white mb-1">$127,432</div>
                <div className="text-sm text-[#737373] mb-5">Collected This Month</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0A0A0A] rounded-lg p-3">
                    <div className="text-white font-semibold text-lg">$89,210</div>
                    <div className="text-[#737373] text-xs">Insurance Payments</div>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-lg p-3">
                    <div className="text-white font-semibold text-lg">$38,222</div>
                    <div className="text-[#737373] text-xs">Patient Payments</div>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-lg p-3">
                    <div className="text-[#22C55E] font-semibold text-lg">+12.4%</div>
                    <div className="text-[#737373] text-xs">vs. Last Month</div>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-lg p-3">
                    <div className="text-white font-semibold text-lg">$4,820</div>
                    <div className="text-[#737373] text-xs">Pending</div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-[#1A1A1A] border border-[#404040] rounded-xl p-5">
                <div className="text-white font-semibold text-[0.95rem] mb-4">
                  Recent Transactions
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between py-2.5 border-b border-[#262626]">
                    <span className="text-[#A3A3A3] text-sm">Delta Dental - ERA #4821</span>
                    <span className="text-[#22C55E] font-medium">+$2,847.00</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-[#262626]">
                    <span className="text-[#A3A3A3] text-sm">Patient: Mike Thompson</span>
                    <span className="text-[#22C55E] font-medium">+$347.00</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#A3A3A3] text-sm">MetLife - ERA #3912</span>
                    <span className="text-[#22C55E] font-medium">+$1,223.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-[120px] bg-gradient-to-b from-transparent via-[#111111] to-transparent"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4">
              Simple pricing. Massive value.
            </h2>
            <p className="text-lg text-[#A3A3A3] max-w-[600px] mx-auto">
              Start with what you need. Add modules as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {/* Essentials */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-3xl p-10 hover:-translate-y-2 transition-all">
              <div className="text-[#A3A3A3] text-sm mb-2">Essentials</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-white">$149</span>
                <span className="text-[#737373]">/mo per location</span>
              </div>
              <p className="text-[#A3A3A3] text-[0.95rem] mb-6 pb-6 border-b border-[#262626]">
                Credentials, 2FA, and basic team management.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Credential vault",
                  "2FA centralization",
                  "350+ portal integrations",
                  "Unlimited users",
                  "Audit logs",
                  "Email support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#D4D4D4] text-[0.95rem]"
                  >
                    <Check className="w-[18px] h-[18px] text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#demo"
                className="btn btn-secondary w-full justify-center"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Professional - Featured */}
            <div className="bg-[#1A1A1A] border border-[#00B4D8] rounded-3xl p-10 relative shadow-[0_0_60px_rgba(0,180,216,0.25)] hover:-translate-y-2 transition-all">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#00B4D8] to-[#8B5CF6] text-white text-xs font-semibold rounded-full">
                Most Popular
              </span>
              <div className="text-[#A3A3A3] text-sm mb-2">Professional</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-white">$349</span>
                <span className="text-[#737373]">/mo per location</span>
              </div>
              <p className="text-[#A3A3A3] text-[0.95rem] mb-6 pb-6 border-b border-[#262626]">
                Full platform with AI automation and onboarding.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Essentials",
                  "AI invoice automation",
                  "Gamified patient onboarding",
                  "Data verification",
                  "Insurance eligibility checks",
                  "Priority support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#D4D4D4] text-[0.95rem]"
                  >
                    <Check className="w-[18px] h-[18px] text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#demo" className="btn btn-primary w-full justify-center">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-3xl p-10 hover:-translate-y-2 transition-all">
              <div className="text-[#A3A3A3] text-sm mb-2">Enterprise</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <p className="text-[#A3A3A3] text-[0.95rem] mb-6 pb-6 border-b border-[#262626]">
                For DSOs with 10+ locations. Everything customized.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Professional",
                  "Integrated payment processing",
                  "SSO & SCIM",
                  "Custom integrations",
                  "Dedicated success manager",
                  "Volume discounts",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#D4D4D4] text-[0.95rem]"
                  >
                    <Check className="w-[18px] h-[18px] text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#demo"
                className="btn btn-secondary w-full justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4">
              Practices love Homebase
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: '"We went from losing $30K/year in denied claims to nearly zero. The AI catches errors we never would have found. It paid for itself in the first month."',
                name: "Dr. Michael R.",
                role: "Owner, 5-location DSO",
                initials: "DM",
                gradient: "from-[#00B4D8] to-[#8B5CF6]",
              },
              {
                text: '"The patient onboarding is incredible. 95% of patients complete forms before arriving. Our front desk staff actually has time to breathe now."',
                name: "Lisa T.",
                role: "Office Manager, Austin TX",
                initials: "LT",
                gradient: "from-[#22C55E] to-[#00B4D8]",
              },
              {
                text: '"Finally, ONE platform that does everything. No more juggling 15 different logins and tools. Homebase is the command center we always needed."',
                name: "Jennifer K.",
                role: "RCM Director, Smile Partners",
                initials: "JK",
                gradient: "from-[#8B5CF6] to-[#EF4444]",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#262626] rounded-2xl p-8 hover:border-[#00B4D8] hover:-translate-y-1 transition-all"
              >
                <div className="text-[#FBBF24] mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-[#D4D4D4] leading-relaxed mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-[#737373] text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-[120px] bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Security</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4">
              Your data is safe with us
            </h2>
            <p className="text-lg text-[#A3A3A3] max-w-[600px] mx-auto">
              Enterprise-grade security, built for healthcare compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "HIPAA Compliant",
                desc: "BAA included with every plan",
              },
              {
                icon: Lock,
                title: "Zero-Knowledge",
                desc: "We can't see your passwords",
              },
              {
                icon: Key,
                title: "256-bit Encryption",
                desc: "Bank-level security",
              },
              {
                icon: Users,
                title: "Role-Based Access",
                desc: "Complete audit trails",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] border border-[#262626] rounded-2xl p-6 text-center hover:border-[#00B4D8] transition-all"
              >
                <div className="w-14 h-14 bg-[rgba(0,180,216,0.1)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#00B4D8]" />
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-[#737373] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="py-[160px] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,180,216,0.25)_0%,transparent_60%)] opacity-50 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mb-4">
            Ready to transform your practice?
          </h2>
          <p className="text-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-10">
            Join the practices saving $40K+ per year and reclaiming hours every week.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Schedule Your Demo &rarr;
            </a>
            <button onClick={() => scrollToSection("pricing")} className="btn btn-secondary btn-large">
              View Pricing
            </button>
          </div>

          <p className="text-sm text-[#737373]">
            Free 30-day trial &bull; No credit card required &bull; Setup in 30 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#262626] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/homebase-logo.png"
                  alt="Homebase"
                  width={140}
                  height={35}
                  className="h-7 w-auto opacity-80"
                />
              </Link>
              <p className="text-[#737373] text-[0.95rem] max-w-[280px]">
                The operating system for modern dental practices. Credentials, AI, onboarding, and
                payments — all in one platform.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5">Platform</h4>
              <ul className="space-y-3">
                {["Credentials", "AI Automation", "Patient Onboarding", "Payments"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#737373] hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5">Company</h4>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#737373] hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5">Resources</h4>
              <ul className="space-y-3">
                {["Help Center", "API Docs", "Trust Center", "Status"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#737373] hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5">Legal</h4>
              <ul className="space-y-3">
                {["Privacy", "Terms", "BAA", "Security"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#737373] hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-[#262626]">
            <p className="text-[#525252] text-sm">
              &copy; {new Date().getFullYear()} Homebase. All rights reserved. Powered by PayPro.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
