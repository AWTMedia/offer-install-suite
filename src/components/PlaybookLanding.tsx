import * as React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  {
    label: "Demand",
    desc: "Generate qualified attention with positioning that pulls, not pushes.",
  },
  {
    label: "Funnels",
    desc: "Route attention into booked calls with profile funnels + one-page landers.",
  },
  {
    label: "Offers",
    desc: "Design outcomes people pay for now. Scope, price, and risk-reducers.",
  },
  {
    label: "Sales",
    desc: "1-call close, objection maps, and follow-up that respects attention.",
  },
  {
    label: "Delivery & Proof",
    desc: "Onboarding cadence, weekly reporting, proof capture loops.",
  },
  {
    label: "Ops",
    desc: "Simple systems to keep the machine running without burnout.",
  },
];

const featured = [
  { title: "Offer Lab: Promise → Price → Proof", slug: "offer-lab" },
  { title: "Profile Funnel: IG / LinkedIn Intake", slug: "profile-funnel" },
  { title: "Hook Bank: 30-Day Messaging Spine", slug: "hook-bank" },
  { title: "One-Call Close Script + Objections", slug: "one-call-close" },
  { title: "Proof Capture Loop (Screenshots → Wins)", slug: "proof-loop" },
  { title: "Booking Stack: Page + Form + Reminders", slug: "booking-stack" },
];

export default function PlaybookLanding() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="border-primary bg-accent-glow text-primary px-3 py-1 text-[10px] font-medium tracking-widest uppercase"
          >
            Open Library
          </Badge>

          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.1] tracking-[-0.03em]">
            Evidence-led playbooks to install your client acquisition machine.
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-dimmed max-w-2xl mx-auto">
            Each playbook compresses research into concrete steps, assets, and KPIs. Pick the
            bottleneck, run the play, capture proof, repeat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="uppercase tracking-wide font-semibold">
              <Link to="/repo">Browse Playbooks</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="uppercase tracking-wide font-semibold">
              <Link to="/book-a-call">Book a Call</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium tracking-widest uppercase text-text-subtle">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Strategy, not “content agency”
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Installable assets
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Proof &gt; Hype
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
            What you’ll find
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em]">
            Six tracks. One machine.
          </h2>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Card key={c.label} className="rounded-2xl border p-6 bg-card-glass h-full">
                <div className="text-[10px] font-bold tracking-widest uppercase text-primary">
                  {c.label}
                </div>
                <div className="mt-2 font-semibold">{c.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
            How to use the library
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em]">
            Pick the bottleneck → choose the lowest-lift play → ship in 7 days.
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl border p-6 bg-card-glass">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Step 1</div>
              <div className="mt-2 font-semibold">Identify the dominant constraint</div>
              <p className="mt-3 text-sm leading-relaxed text-text-dimmed">
                Traffic, conversion, offer, or proof. Start where the math is most broken.
              </p>
            </Card>
            <Card className="rounded-2xl border p-6 bg-card-glass">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Step 2</div>
              <div className="mt-2 font-semibold">Choose the smallest viable play</div>
              <p className="mt-3 text-sm leading-relaxed text-text-dimmed">
                Run plays that create signal fast. Minimum asset, maximum learning.
              </p>
            </Card>
            <Card className="rounded-2xl border p-6 bg-card-glass">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Step 3</div>
              <div className="mt-2 font-semibold">Capture proof & loop it back</div>
              <p className="mt-3 text-sm leading-relaxed text-text-dimmed">
                Wins → screenshots → narrative → more demand. Proof compounds.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
            Featured playbooks
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em]">
            Start with these high-leverage installs.
          </h2>

          <ul className="mt-8 grid md:grid-cols-2 gap-4">
            {featured.map((f) => (
              <li key={f.slug}>
                <Card className="rounded-xl border p-4 bg-card-glass flex items-center justify-between">
                  <div className="font-semibold">{f.title}</div>
                  <Button asChild variant="outline" className="shrink-0">
                    <Link to={`/p/${f.slug}`}>Open</Link>
                  </Button>
                </Card>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Button asChild size="lg" className="uppercase tracking-wide font-semibold">
              <Link to="/repo">Browse the full library</Link>
            </Button>
            <div className="mt-4 text-[11px] tracking-widest uppercase text-text-subtle">
              No theory. No filler. Only installable leverage.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 text-center text-[11px] tracking-widest uppercase text-text-subtle">
        <div>The Business Idea Studio</div>
        <div className="mt-2 text-text-subtle">Founder Psychology → Acquisition Machine → Proof Loop</div>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link className="hover:text-foreground transition-colors" to="/book-a-call">
            Book a Call
          </Link>
          <Link className="hover:text-foreground transition-colors" to="/repo">
            Library
          </Link>
          <Link className="hover:text-foreground transition-colors" to="/governance">
            Standards
          </Link>
        </div>
        <div className="mt-6 text-text-subtle">© {new Date().getFullYear()} The Business Idea Studio.</div>
      </footer>
    </main>
  );
}
