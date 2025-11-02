import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="border-primary bg-accent-glow text-primary px-3 py-1 text-[10px] font-medium tracking-widest uppercase"
          >
            Acquisition & Delivery Install
          </Badge>

          {/* Headline */}
          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.1] tracking-[-0.03em] text-foreground">
            We install a working client acquisition and delivery system
            in your business — in 30–45 days.
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-dimmed max-w-2xl mx-auto">
            A full revenue machine: avatar, offer, positioning, proof,
            profile funnel, booking pipeline, one-call close script,
            onboarding rhythm, and proof capture loop.
            <br className="hidden sm:block" />
            You keep it. You run it. We make sure it works.
          </p>

          {/* Hero CTA block */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className="uppercase tracking-wide font-semibold"
            >
              <a href="#/book-a-call">Book Strategy Call →</a>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="uppercase tracking-wide font-semibold"
            >
              <a href="#/repo">Browse Playbooks</a>
            </Button>
          </div>

          {/* Social proof row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium tracking-widest uppercase text-text-subtle">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Strategy, not "content agency"
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              30–45 Day Sprint
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Proof &gt; Hype
            </span>
          </div>

          {/* Video frame */}
          <Card className="mt-12 relative max-w-3xl mx-auto rounded-2xl overflow-hidden border shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
            {/* Replace src with your explainer video embed */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/XwzU4RikbGs?rel=0&modestbranding=1&playsinline=1"
                title="How the Install Works"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-4 sm:p-5 border-t border-border text-left">
              <div className="text-xs font-semibold text-text-dimmed">
                Watch: How we build your acquisition machine
              </div>
              <div className="mt-1 text-[11px] leading-relaxed text-text-muted">
                Exactly what gets installed in the sprint, how the pipeline
                works, and what you'll be running after handover.
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION: Pain / Who we serve */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10">
          {/* Left text */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
              1. Who we serve
            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground">
              We work with business owners who can already deliver real results
              — but don't yet have a reliable way to scale acquisition online.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-text-dimmed">
              You're already generating meaningful revenue (often $20k+/month),
              OR you're an established offline service with obvious demand.
              Getting clients isn't the problem. Getting a predictable,
              channel-driven pipeline without referrals is.
            </p>

            <ul className="mt-6 space-y-2 text-base leading-relaxed text-text-dimmed">
              <li className="flex gap-2">
                <span className="text-[10px] font-bold text-primary">●</span>
                You know you can help clients. That part is proven.
              </li>
              <li className="flex gap-2">
                <span className="text-[10px] font-bold text-primary">●</span>
                The constraint is consistent, qualified demand — without you
                being the full-time salesperson.
              </li>
              <li className="flex gap-2">
                <span className="text-[10px] font-bold text-primary">●</span>
                You're willing to show up, record content, be the face. You're
                not willing to guess the strategy.
              </li>
            </ul>

            <p className="mt-6 text-base leading-relaxed text-text-dimmed font-semibold">
              You're not asking for "make me look good on social." You're asking
              for an installed pipeline that repeatedly attracts, books, and
              closes the right buyers.
            </p>

            <p className="mt-4 text-base leading-relaxed text-foreground font-semibold">
              That's who we build for.
            </p>
          </div>

          {/* Right callout card */}
          <div className="lg:col-span-5 lg:self-start">
            <Card className="rounded-2xl border p-6 shadow-[0_30px_120px_rgba(0,0,0,0.8)] bg-card-glass">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                Core pain
              </div>
              <div className="mt-3 text-lg font-semibold leading-snug text-foreground">
                "We get clients — but it's random, founder-led, and not scalable
                online."
              </div>
              <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
                That specific problem is what we solve. We build you an
                acquisition + delivery machine you can run every week.
              </div>

              <Button
                asChild
                className="mt-6 w-full uppercase tracking-wide font-semibold"
              >
                <a href="#/book-a-call">Speak With Us →</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 text-center text-[11px] tracking-widest uppercase text-text-subtle">
        <div>The Business Idea Studio</div>
        <div className="mt-2 text-text-subtle">
          Founder Psychology → Acquisition Machine → Proof Loop
        </div>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            className="hover:text-foreground transition-colors"
            href="#/book-a-call"
          >
            Book a Call
          </a>
          <a className="hover:text-foreground transition-colors" href="#/repo">
            Library
          </a>
          <a
            className="hover:text-foreground transition-colors"
            href="#/governance"
          >
            Standards
          </a>
        </div>
        <div className="mt-6 text-text-subtle">
          © {new Date().getFullYear()} The Business Idea Studio.
        </div>
      </footer>
    </main>
  );
};

export default Index;
