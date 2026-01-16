# CLAUDE.md - HOMEBASE Development Guide

## Project Overview

**HOMEBASE** is a secure credential management and 2FA centralization platform built specifically for dental practices and DSOs (Dental Support Organizations).

**Tagline:** "One login. Every portal."

**The Problem We Solve:**
- Dental offices juggle 10+ software systems and 50+ insurance portals daily
- Teams share passwords via spreadsheets (HIPAA nightmare)
- 2FA codes get texted/forwarded constantly ("who has the code?")
- Onboarding takes days, offboarding leaves security gaps

**Target Market:**
- $2.71B dental practice management software market
- 92,000+ dental clinics in North America
- 32% of US practices are DSO-affiliated (growing at 17.67% CAGR)
- 1 direct competitor (Unify.dental) with ~1,000 customers = 91,000 practices waiting

---

## Quick Start

```bash
cd HOMEBASE
npm install --legacy-peer-deps
npm run dev
# Open http://localhost:3000
```

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.x | App Router framework |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| shadcn/ui | Latest | UI components |
| Framer Motion | Latest | Animations |

### Backend (To Be Built)
| Technology | Purpose |
|------------|---------|
| Supabase / AWS | Database + Auth + Real-time |
| Twilio | SMS 2FA capture |
| Gmail/Outlook API | Email OTP parsing |
| Stripe | Payments |
| Anthropic Claude | AI features |

---

## Core Features

### 1. Credential Vault
```
- AES-256 zero-knowledge encryption (client-side)
- Organization by category (Insurance, Software, Vendor, HR)
- Role-based access (Admin, Manager, Billing, Clinical, Front Desk)
- Share credentials WITHOUT revealing passwords
- Credential health monitoring (weak, duplicate, compromised)
- Import from CSV, LastPass, 1Password
```

### 2. 2FA Centralization (THE KILLER FEATURE)
```
- SMS code capture (Twilio-powered dedicated numbers)
- Email OTP parsing (Gmail, Outlook, custom IMAP)
- TOTP generator (shared authenticator codes)
- Real-time code display with countdown timer
- Full audit trail (who used which code, when)
- Routing rules (RCM gets payer codes, front desk gets scheduling)
```

### 3. Browser Extension
```
- Chrome + Edge (Manifest V3)
- Auto-detect login pages
- One-click autofill
- Save new credentials on signup
- In-page 2FA code display
- Quick-launch portal directory
```

### 4. Portal Library
```
- 350+ insurance payer portals pre-configured
- Delta Dental (all state variants), MetLife, Cigna, Aetna, Guardian
- One-click portal add
- Portal health monitoring
```

### 5. Admin Dashboard
```
- User management (invite, roles, deactivate)
- Location hierarchy (Region > Office > Department)
- Compliance reporting + audit logs
- Instant offboarding (one-click revoke all)
```

### 6. AI-Powered Features (Differentiation)
```
- Smart Credential Import (scan email for welcome emails)
- Smart Portal Detection (identify unknown login pages)
- Credential Health AI (context-aware recommendations)
```

---

## User Roles

| Role | Access Level | Color Theme |
|------|-------------|-------------|
| Owner | Full access, billing, settings | - |
| Admin | Manage users, all credentials | - |
| Manager | Location-level management | - |
| User | Access assigned credentials | - |
| Readonly | View only | - |

---

## Design System

### Brand Colors (Suggested)
```
Primary: Warm sage green (#4A6B5D) - trustworthy, healthcare-appropriate
Accent: Soft coral (#E8785A) - warm CTAs
Background: Cream (#FBF8F3) - softer than pure white
Text: Charcoal (#2D3436) - easier to read than pure black
```

### Typography (Suggested)
```
Headlines: Fraunces (warm serif with character)
Body: DM Sans (clean, friendly, readable)
```

### Visual Language
- Clean dashboard screenshots/mockups
- Abstract shapes over stock photos
- Subtle animations on scroll
- Insurance company logos in grayscale until hover

---

## Pricing

| Tier | Price | Best For |
|------|-------|----------|
| **Solo** | $99/mo ($79 annual) | Single-location practices |
| **Group** | $69/mo per location ($55 annual) | 2-20 locations |
| **Enterprise** | Custom | DSOs with 20+ locations |

**All Plans Include:**
- HIPAA-compliant architecture
- Business Associate Agreement (BAA)
- Zero-knowledge encryption
- 30-day free trial

---

## Directory Structure (Target)

```
HOMEBASE/
├── app/
│   ├── (marketing)/          # Landing page, pricing, etc.
│   │   ├── page.tsx          # Landing page
│   │   ├── pricing/
│   │   ├── security/
│   │   └── about/
│   ├── (auth)/               # Authentication
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/          # Main app
│   │   ├── vault/            # Credential vault
│   │   ├── 2fa/              # 2FA code dashboard
│   │   ├── portals/          # Portal library
│   │   ├── team/             # User management
│   │   ├── locations/        # Location management
│   │   ├── audit/            # Audit logs
│   │   └── settings/         # Org settings
│   ├── api/
│   │   ├── webhooks/
│   │   │   └── twilio/       # SMS webhook
│   │   └── ...
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # shadcn components
│   ├── vault/                # Vault-specific components
│   ├── 2fa/                  # 2FA components
│   └── ...
├── lib/
│   ├── encryption.ts         # Client-side encryption
│   ├── auth.ts               # Auth utilities
│   └── utils.ts
├── hooks/
├── public/
└── extension/                # Chrome extension (separate build)
```

---

## Database Schema (Core Tables)

```sql
-- Organizations
organizations (id, name, slug, plan, stripe_customer_id, org_salt, settings)

-- Locations (multi-location support)
locations (id, org_id, parent_id, name, address, timezone)

-- Users
users (id, org_id, email, name, role, status, location_ids, permissions)

-- Credentials (the vault - encrypted)
credentials (id, org_id, location_id, category_id, name, url,
             username_encrypted, password_encrypted, notes_encrypted,
             has_2fa, two_fa_method, allowed_roles, allowed_user_ids)

-- 2FA Configuration
two_fa_configs (id, credential_id, method, twilio_phone_number,
                email_address, totp_secret_encrypted)

-- OTP Codes (captured codes)
otp_codes (id, credential_id, code, source, expires_at, viewed_by, copied_by)

-- Portal Library (pre-built integrations)
portal_library (id, name, payer_name, url, login_config, has_2fa, states)

-- Audit Log (immutable)
audit_log (id, org_id, user_id, action, resource_type, resource_id, metadata)
```

---

## Security Architecture

### Zero-Knowledge Encryption
```
1. User enters password: "MyP@ssw0rd123"
2. Client derives encryption key from org_salt + master password
3. Client encrypts: AES-256-GCM(password, derivedKey)
4. Only ciphertext sent to server
5. WE CANNOT DECRYPT - even if breached, data is useless
```

### HIPAA Compliance
```
- BAA with all vendors (AWS, Twilio, Auth0/Cognito)
- Complete audit logs (immutable, who/what/when)
- Encryption at rest and in transit (TLS 1.3)
- Role-based access control
- Automatic session timeout
```

---

## Key Integrations

### Insurance Portals (Priority Order)
**Tier 1 - Build First:**
- Delta Dental (all state variants)
- MetLife, Cigna, Aetna, Guardian
- United Healthcare, BCBS, Humana

**Tier 2 - High Usage:**
- Ameritas, GEHA, Dentaquest
- Liberty Dental, United Concordia

**Tier 3 - Regional:**
- State Medicaid portals (50 states)
- TRICARE Dental, FEDVIP

### Other Software Categories
- PMS: Dentrix, Eaglesoft, Open Dental, Curve, CareStack
- Imaging: Dexis, Carestream, Planmeca
- Communication: Weave, Solutionreach
- HR/Payroll: ADP, Gusto
- Supplies: Henry Schein, Patterson, Benco

---

## Competitor: Unify.dental

| Aspect | Unify | HOMEBASE Advantage |
|--------|-------|-------------------|
| Single Price | $149/mo | $99/mo (33% cheaper) |
| Multi-location | $99/mo | $69/mo (30% cheaper) |
| Mobile App | None | Native iOS/Android (V2) |
| AI Features | None | Smart import, detection |
| G2 Reviews | Zero | Aggressive from day 1 |

---

## Landing Page Structure

1. **Hero** - "Stop hunting for passwords. Start running your practice."
2. **Problem** - Pain point cards (spreadsheet, 2FA nightmare, offboarding)
3. **Solution** - Feature blocks (Vault, 2FA, Portals, Onboarding)
4. **Social Proof** - Testimonials + stats
5. **Security** - HIPAA, zero-knowledge, BAA included
6. **Pricing** - 3 tiers
7. **FAQ** - Common questions
8. **Final CTA** - "Ready to end the password chaos?"

---

## Common Commands

```bash
npm install --legacy-peer-deps  # Install dependencies
npm run dev                      # Dev server (localhost:3000)
npm run build                    # Production build
npm run lint                     # ESLint
```

---

## What Needs to Be Built

### Phase 1: Foundation (Days 1-30)
- [ ] Infrastructure setup (Supabase/AWS + BAAs)
- [ ] Database schema
- [ ] Auth system
- [ ] Basic credential vault (add/edit/delete)
- [ ] Client-side encryption

### Phase 2: Core Features (Days 31-60)
- [ ] Browser extension (Chrome)
- [ ] 2FA SMS capture (Twilio)
- [ ] 2FA email capture (Gmail/Outlook)
- [ ] Real-time code display

### Phase 3: Polish (Days 61-90)
- [ ] Portal library (top 50 portals)
- [ ] Admin dashboard
- [ ] Multi-location support
- [ ] Audit logs + compliance reports

### Phase 4: Launch (Days 91-120)
- [ ] Marketing site
- [ ] Stripe billing
- [ ] Beta launch (10 customers)
- [ ] Public launch

---

## Success Metrics

**North Star:** Weekly Active Credentials Accessed

**Revenue Targets:**
- Month 3: $5K MRR (10 customers)
- Month 6: $25K MRR (50 customers)
- Month 12: $100K MRR (150 customers)

**Product Metrics:**
- Time to first credential saved: < 5 min
- OTP latency (received → visible): < 3 seconds
- Extension install rate: > 70% of users

---

## The Homebase Promise

> We built Homebase because dental practices deserve enterprise-grade security without enterprise complexity. Every credential is encrypted before it ever touches our servers. Every access is logged. Every code is captured and delivered instantly.
>
> Your patients trust you with their health. You can trust us with your access.
>
> Welcome home.

---

*Last updated: January 2026*
