import * as React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  calendlyUrl?: string;
  videoUrl?: string;
};

const DEFAULT_CALENDLY = "https://calendly.com/your-handle/diagnostic";
const DEFAULT_VIDEO = "https://youtu.be/XwzU4RikbGs";

// Turn a YouTube share/watch URL into an /embed URL
function toEmbed(url?: string | null) {
  if (!url) return null;
  try {
    const u = new URL(url);
    let id = "";
    if (u.hostname.includes("youtu.be")) id = u.pathname.replace("/", "");
    if (!id && u.searchParams.get("v")) id = u.searchParams.get("v") || "";
    if (!id && u.pathname.startsWith("/shorts/")) id = u.pathname.split("/")[2] || "";
    if (!id && u.pathname.startsWith("/embed/")) id = u.pathname.split("/")[2] || "";
    if (!id) return null;

    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      enablejsapi: "1",
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  } catch {
    return null;
  }
}

export default function BookACall({
  calendlyUrl = DEFAULT_CALENDLY,
  videoUrl = DEFAULT_VIDEO,
}: Props) {
  const embed = React.useMemo(() => toEmbed(videoUrl), [videoUrl]);

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="border-primary bg-accent-glow text-primary px-3 py-1 text-[10px] font-medium tracking-widest uppercase"
          >
            The System • Strategy Call
          </Badge>

          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.1] tracking-[-0.03em]">
            Book a Strategy Call
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-dimmed max-w-2xl mx-auto">
            We don’t “hop on calls.” We diagnose constraints and prescribe the next move.
            <br className="hidden sm:block" />
            <span className="font-semibold">Founder Psychology → Business Mechanics.</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="uppercase tracking-wide font-semibold">
              <a href={calendlyUrl} target="_blank" rel="noreferrer">
                Book Now →
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="uppercase tracking-wide font-semibold">
              <Link to="/repo">Browse Playbooks</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium tracking-widest uppercase text-text-subtle">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Evidence-led
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              No fluff — plays only
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Action in 48–72 hours
            </span>
          </div>
        </div>
      </section>

      {/* Video + What happens */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-border">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <Card className="rounded-2xl border p-6 bg-card-glass">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
                On the call
              </div>
              <h3 className="mt-2 text-lg font-semibold">We diagnose, not “discuss”.</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-dimmed">
                <li>• Identify the <strong>dominant constraint</strong> in your Market → Lead Gen → Nurture → Conversion chain.</li>
                <li>• Select the <strong>lowest-lift play</strong> with the highest probability of signal in 7–14 days.</li>
                <li>• Define KPIs, proof artifacts, and a 48–72 hour action plan.</li>
              </ul>
            </Card>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <Card className="rounded-2xl border p-6 bg-card-glass">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
                  Who it’s for
                </div>
                <h3 className="mt-2 text-lg font-semibold">Operators who want signal.</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-dimmed">
                  <li>• Solo founders or small teams shipping weekly.</li>
                  <li>• Willing to implement proven systems, not chase hacks.</li>
                  <li>• Aim: predictable lead flow and clean sales math.</li>
                </ul>
              </Card>

              <Card className="rounded-2xl border p-6 bg-card-glass">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
                  Expected outcomes
                </div>
                <h3 className="mt-2 text-lg font-semibold">Clarity and next steps.</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-dimmed">
                  <li>• A concrete play: offer, channel, or pipeline step to run.</li>
                  <li>• Metrics: CAC, ASP, close rate, and referral levers defined.</li>
                  <li>• A cadence you can stick to without burning out.</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="rounded-2xl border p-0 overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
              <div className="rounded-2xl overflow-hidden">
                {embed ? (
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={embed}
                      title="What happens on the Strategy Call"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-6 text-sm text-text-dimmed">Add a YouTube URL to show a short call explainer.</div>
                )}
              </div>
              <div className="p-4 border-t border-border">
                <div className="text-sm font-semibold">What happens on the call</div>
                <div className="mt-1 text-[12px] leading-relaxed text-text-muted">
                  15–25 minutes. We map your bottleneck to a proven play, then outline next steps and metrics.
                </div>
              </div>
            </Card>

            <Button asChild className="mt-6 w-full uppercase tracking-wide font-semibold">
              <a href={calendlyUrl} target="_blank" rel="noreferrer">
                Book Your Diagnostic →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Card className="rounded-2xl border overflow-hidden">
            <div className="p-6">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Schedule</div>
              <h3 className="mt-2 text-lg font-semibold">Pick a time that suits you</h3>
              <p className="mt-2 text-sm text-text-dimmed">
                Choose a 20–25 minute slot. You’ll receive a short pre-call form so we can prepare a tailored plan.
              </p>
            </div>
            <div className="border-t border-border">
              <iframe
                title="Schedule with us"
                className="w-full"
                style={{ height: 750, border: "0" }}
                src={calendlyUrl}
              />
            </div>
            <div className="p-6 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-text-dimmed">
                Prefer a direct link?{" "}
                <a href={calendlyUrl} target="_blank" rel="noreferrer" className="underline text-primary">
                  Open Calendly
                </a>
              </div>
              <Button asChild>
                <a href={calendlyUrl} target="_blank" rel="noreferrer">
                  Book now
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* De-risking + Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border p-6 bg-card-glass">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Why founders choose us</div>
            <h3 className="mt-2 text-lg font-semibold">We turn psychology into mechanics.</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-dimmed">
              <li>• 60+ mental models mapped to concrete plays.</li>
              <li>• Repeatable proof: referrals, reviews, and pipeline lift.</li>
              <li>• Editorial standards: evidence, not claims.</li>
            </ul>
          </Card>

          <Card className="rounded-2xl border p-6 bg-card-glass">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">No-pressure policy</div>
            <h3 className="mt-2 text-lg font-semibold">No pitch. Clear next steps.</h3>
            <p className="mt-4 text-sm leading-relaxed text-text-dimmed">
              If we’re a fit, we’ll show you the implementation path. If not, you’ll still leave with a workable plan.
            </p>
          </Card>

          <Card className="rounded-2xl border p-6 bg-card-glass">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Common objections</div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-dimmed">
              <li>
                <strong>“I’m too busy right now.”</strong> <br /> Then you need a lighter play. We prioritize <em>lowest lift → fastest signal</em>.
              </li>
              <li>
                <strong>“I’ve tried ‘systems’ before.”</strong> <br /> Most fail from poor sequencing. We fix order of operations first, then scale.
              </li>
              <li>
                <strong>“Will this work in my niche?”</strong> <br /> We choose a channel/offer combo proven in your market type, not a generic template.
              </li>
            </ul>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto mt-10 rounded-2xl p-5 border bg-card-glass">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm md:text-base">
              <span className="font-semibold">Own your pipeline.</span> Book the diagnostic and ship the next play this week.
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <a href={calendlyUrl} target="_blank" rel="noreferrer">Book now</a>
              </Button>
              <Button asChild>
                <Link to="/repo">Preview the playbooks</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] tracking-widest uppercase text-text-subtle">
          Privacy-first • Evidence-led • No spam • Cancel anytime
        </div>
      </section>
    </main>
  );
}
