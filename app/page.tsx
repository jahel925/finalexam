import Menu from "../components/Menu";


export default function Home() {
  return (
    <>
      <Menu
        exam1Url="https://exam1-axba.vercel.app/"
        git1Url="https://github.com/jahel925/Exam1"
      />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Final Exam Project</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Built with Next.js, Tailwind CSS, shadcn/ui, and lucide-react.
        </p>
      </main>
    </>
  );
}
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CalendarDays,
  Sparkles,
  MapPin,
  Clock,
  CreditCard,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Menu
        exam1Url="https://exam1-axba.vercel.app"
        git1Url="https://github.com/jahel925/Exam1"
      />

      {/* Soft hero background */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(330,85%,85%,0.55),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(340,90%,92%,0.55),transparent_60%)]" />
        </div>

        <main className="mx-auto max-w-5xl px-4 pb-16 pt-10">
          {/* Top mini brand line */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
              G&amp;G
            </span>
            <div className="leading-tight">
              <div className="font-medium text-foreground">Gloss &amp; Grace</div>
              <div className="flex items-center gap-2">
                <span>Nail Studio</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Queens, NY
                </span>
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Gloss &amp; Grace
              </h1>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Elevated nails, effortless confidence.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                A modern nail studio in the heart of Queens delivering gel
                perfection, custom art, and spa-level care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-full">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Book an Appointment
                </Button>

                <Button variant="secondary" className="rounded-full">
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Open Tue–Sun
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Walk-ins welcome
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Cash &amp; card accepted
                </span>
              </div>
            </div>

            {/* Hero image card */}
            <div className="lg:justify-self-end">
              <Card className="overflow-hidden rounded-3xl border bg-background/60 shadow-sm backdrop-blur">
                <div className="relative aspect-[4/3] w-full min-w-[280px] max-w-[520px]">
                  {/* Replace this with a real photo later */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,hsla(330,85%,92%,0.9),hsla(0,0%,100%,0.65))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsla(330,90%,80%,0.35),transparent_55%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="rounded-2xl bg-background/80 p-4 backdrop-blur">
                      <div className="text-sm font-medium text-foreground">
                        Modern studio vibe
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Soft glam • clean lines • custom sets
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Simple sections (so your nav items can exist later if you add them) */}
          <section className="mt-16 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl p-5">
              <div className="text-sm font-medium">About</div>
              <p className="mt-2 text-sm text-muted-foreground">
                A calm, detail-first nail studio focused on quality, hygiene, and
                personalized design.
              </p>
            </Card>

            <Card className="rounded-2xl p-5">
              <div className="text-sm font-medium">Services</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Gel manicures, structured sets, custom art, and simple classics.
              </p>
            </Card>

            <Card className="rounded-2xl p-5">
              <div className="text-sm font-medium">Gallery</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Showcase your best sets here with a clean grid and soft borders.
              </p>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
}
