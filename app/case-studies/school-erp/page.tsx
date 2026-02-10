import { ArrowLeft, GraduationCap, Users, CreditCard, Bell } from "lucide-react";
import Link from "next/link";

export default function SchoolERPPage() {
  return (
    <div className="relative min-h-screen">
      <div className="mesh-gradient pointer-events-none absolute inset-0" />
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
        <Link
          href="/#work"
          data-hover="true"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-teal/80 ring-1 ring-teal/25 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_12px_rgba(0,245,255,0.8)]" />
          <span>Applied Systems</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-teal" />
            <span className="text-xs font-medium uppercase tracking-widest text-teal">
              Case Study
            </span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            School ERP System
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Complete school management platform for a private school network in Islamabad.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">3,200+</div>
            <div className="text-xs text-muted-foreground">Students</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">180+</div>
            <div className="text-xs text-muted-foreground">Staff Members</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">95%</div>
            <div className="text-xs text-muted-foreground">Fee Collection</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">4</div>
            <div className="text-xs text-muted-foreground">Campuses</div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Challenge
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A growing private school network with 4 campuses in Islamabad needed a 
              unified system to manage admissions, attendance, fee collection, and 
              parent communication. Their spreadsheet-based approach was causing delays 
              and data inconsistencies.
            </p>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Academic Management</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Complete student lifecycle management from admission to graduation, 
                    including class scheduling, exam management, and result generation 
                    with board exam pattern support.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Fee Management</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Automated fee generation with sibling discounts, scholarship tracking, 
                    and multiple payment options including bank challan, JazzCash, and 
                    EasyPaisa with instant SMS receipts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Parent Portal & App</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Mobile app for parents showing attendance, grades, fee status, and 
                    school announcements. Real-time notifications for absences and 
                    important updates via SMS and push notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Results
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The school now manages 3,200+ students across 4 campuses from a single 
              dashboard. Fee collection improved from 78% to 95%, and administrative 
              workload reduced by 60%.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Admission processing time reduced from 3 days to 2 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Parent satisfaction increased with real-time updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Rs. 2.4M recovered in overdue fees within first month</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              data-hover="true"
              className="inline-flex items-center justify-center gap-2 rounded-[24px] bg-teal px-8 py-4 text-sm font-semibold text-background transition-all hover:shadow-[0_0_40px_rgba(0,245,255,0.3)]"
            >
              Start Your Project
            </Link>
            <Link
              href="/#work"
              data-hover="true"
              className="inline-flex items-center justify-center rounded-[24px] border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-teal/30 hover:bg-card"
            >
              View More Cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
