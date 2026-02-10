import { ArrowLeft, UtensilsCrossed, Clock, BarChart3, Smartphone } from "lucide-react";
import Link from "next/link";

export default function RestaurantManagementPage() {
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
            Restaurant Management
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Complete POS and ordering system for a growing restaurant chain in Lahore.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">15+</div>
            <div className="text-xs text-muted-foreground">Branches</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">2,500+</div>
            <div className="text-xs text-muted-foreground">Daily Orders</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">40%</div>
            <div className="text-xs text-muted-foreground">Faster Service</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">Rs. 8M+</div>
            <div className="text-xs text-muted-foreground">Monthly GMV</div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Challenge
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A popular restaurant chain in Lahore was struggling with order management 
              across multiple branches. Their manual system led to delays, order errors, 
              and difficulty tracking inventory and sales across locations.
            </p>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Unified POS System</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Built a centralized point-of-sale system connecting all branches in real-time, 
                    with offline capability for uninterrupted operations during power outages.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Mobile Ordering App</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Developed a customer-facing mobile app for online ordering with real-time 
                    order tracking and JazzCash/EasyPaisa integration for seamless payments.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Analytics Dashboard</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Owner dashboard showing real-time sales, inventory levels, and staff 
                    performance metrics across all branches from a single interface.
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
              The restaurant now processes over 2,500 orders daily with 40% faster service 
              times. Online orders grew to represent 35% of total revenue within 3 months 
              of app launch.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Order errors reduced by 85%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Inventory waste decreased by 30%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Expanded from 8 to 15 branches using same system</span>
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
