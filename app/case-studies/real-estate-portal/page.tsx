import { ArrowLeft, Home, MapPin, Search, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function RealEstatePortalPage() {
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
            Real Estate Portal
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Property listing and dealer management platform for Karachi real estate market.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">5,800+</div>
            <div className="text-xs text-muted-foreground">Listings</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">320+</div>
            <div className="text-xs text-muted-foreground">Dealers</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">45K+</div>
            <div className="text-xs text-muted-foreground">Monthly Visitors</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">Rs. 180M+</div>
            <div className="text-xs text-muted-foreground">Deals Closed</div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Challenge
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A real estate agency in Karachi wanted to digitize their operations and 
              create a platform where multiple dealers could list properties. They needed 
              a system that could handle property verification, lead management, and 
              featured listings with a revenue model.
            </p>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Multi-Dealer Platform</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Built a marketplace where verified dealers can list properties with 
                    subscription tiers. Includes dealer verification, performance analytics, 
                    and commission tracking for referral deals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Smart Search & Filters</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Advanced search with area-wise filtering (DHA, Clifton, Gulshan), 
                    price range, property type, and verified listing badges. Map integration 
                    showing properties by location.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Lead Management</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Built-in inquiry system with WhatsApp integration, automatic lead 
                    assignment to dealers, and follow-up tracking. Buyers can schedule 
                    visits directly through the platform.
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
              The platform now hosts 5,800+ active listings from 320+ verified dealers. 
              Monthly revenue from dealer subscriptions and featured listings exceeds 
              Rs. 1.5M with consistent growth.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Lead response time reduced from 24 hours to under 2 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>25% of inquiries convert to site visits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Platform facilitated Rs. 180M+ in property transactions</span>
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
