import Menu from "@/components/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  CalendarCheck,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Scissors,
  Instagram,
  BadgeCheck,
} from "lucide-react";


export default function Home() {
  // REQUIRED LINKS FOR GRADING
  const EXAM1_URL = "https://exam1-axba.vercel.app/";
  const GIT1_URL = "https://github.com/jahel925/exam1";

  return (
<main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Menu exam1Url={EXAM1_URL} git1Url={GIT1_URL} />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Gloss &amp; Grace • Nail Studio • Queens, NY</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Gloss &amp; Grace
            </h1>

            <p className="text-muted-foreground md:text-lg">
              Elevated nails, effortless confidence. A modern nail studio in the
              heart of Queens delivering gel perfection, custom art, and spa-level
              care.
            </p>

            <div className="flex flex-wrap gap-3">
<Button className="gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90">
                <CalendarCheck className="h-4 w-4" />
                Book an Appointment
              </Button>

              <Button variant="secondary" className="gap-2" asChild>
                <a href="#services">
                  <Scissors className="h-4 w-4" />
                  View Services
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Open Tue–Sun • Walk-ins welcome • Cash &amp; card accepted
            </p>
          </div>

          {/* FEATURE CARD */}
          <Card className="overflow-hidden">
<div className="relative h-72 w-full md:h-80">
  <Image
    src="/images/image.jpg"
    alt="Gloss & Grace studio"
    fill
    className="object-cover"
    priority
  />
</div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-primary" />
                Studio Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Clean, modern, spa-level experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Long-lasting gel + custom nail art</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Designed as a Next.js remake of Exam 1</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="mb-6 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="text-muted-foreground">
            Signature treatments crafted for longevity and comfort. Prices are starting rates.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Gel Manicure</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Gentle prep, structured base, glossy finish. 2–3 weeks of wear.
              </p>
              <div className="text-right">
                <p className="text-lg font-semibold">$45</p>
                <p className="text-xs text-muted-foreground">45–60 min</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acrylic Full Set</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Custom shape &amp; length with balanced apex for strength and style.
              </p>
              <div className="text-right">
                <p className="text-lg font-semibold">$85</p>
                <p className="text-xs text-muted-foreground">90–120 min</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nail Art</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                French, chrome, cat-eye, hand-painted designs. Priced by level.
              </p>
              <div className="text-right">
                <p className="text-lg font-semibold">+$10–$40</p>
                <p className="text-xs text-muted-foreground">Add-on</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spa Pedicure</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Exfoliation, mask, massage, and precise polish application.
              </p>
              <div className="text-right">
                <p className="text-lg font-semibold">$60</p>
                <p className="text-xs text-muted-foreground">60 min</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
<section id="gallery" className="mx-auto max-w-6xl px-4 pb-12">
  <div className="mb-6 space-y-2">
    <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
    <p className="text-muted-foreground">
      A few recent sets from our artists. Ask us to recreate or customize for you.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
        alt: "Milky chrome gel manicure",
      },
      {
        src: "https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        alt: "Minimal nude nails",
      },
      {
        src: "https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        alt: "Pastel nail art",
      },
      {
        src: "https://images.unsplash.com/photo-1644203541701-c67c866fd42a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG5haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        alt: "Nail display",
      },
      {
        src: "https://images.unsplash.com/photo-1660241657459-554031137e4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZCUyMG5haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        alt: "Bold red gel",
      },
      {
        src: "https://images.unsplash.com/photo-1641814250010-9887d86eedfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG5haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        alt: "Glitter accent nails",
      },
    ].map((img) => (
      <div
        key={img.src}
        className="overflow-hidden rounded-2xl border bg-card shadow-sm"
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="h-72 w-full object-cover"
        />
      </div>
    ))}
  </div>
</section>

      {/* INFO BAR */}
      <section className="border-t bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-sm font-semibold">Hours</p>
            <p className="text-sm text-muted-foreground">
              Tue–Fri 10–7 • Sat 10–6 • Sun 11–5 (Mon closed)
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">Contact</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@glossandgraceny.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (718) 555-1234
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Queens, NY
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">Social</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                <Instagram className="h-4 w-4 text-primary" /> Instagram
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                <Sparkles className="h-4 w-4 text-primary" /> TikTok
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                <Sparkles className="h-4 w-4 text-primary" /> Pinterest
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Gloss &amp; Grace • Queens, NY</p>
          <p>Final Exam remake of Exam 1 using Next.js + Tailwind + shadcn/ui</p>
        </div>
      </footer>
    </main>
  );
}
