import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { TIPS } from "@/content/tips";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

type Params = { slug: string };

export function generateStaticParams() {
  return TIPS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tip = TIPS.find((t) => t.slug === slug);
  if (!tip) return {};
  return { title: tip.title, description: tip.excerpt };
}

export default async function TipPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const tip = TIPS.find((t) => t.slug === slug);
  if (!tip) notFound();

  return (
    <>
      <article className="py-16 lg:py-24">
        <div className="container-prose max-w-3xl">
          <Link
            href="/tips"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" /> All tips
          </Link>
          <div className="mt-6 flex items-center gap-2 text-xs text-foreground-faint">
            <span className="font-medium text-brand-orange-600 dark:text-brand-orange uppercase tracking-wider">
              {tip.category}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" /> {tip.readTime}
            </span>
          </div>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {tip.title}
          </h1>
          <p className="mt-4 text-foreground-muted text-lg leading-relaxed">
            {tip.excerpt}
          </p>
          <ScrollReveal
            as="div"
            className="mt-10 prose-paradigm space-y-5"
            selector="[data-p]"
            staggerChildren={120}
          >
            {tip.body.map((p, i) => (
              <p
                key={i}
                data-p
                className="text-foreground leading-relaxed text-lg"
              >
                {p}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </article>
      <CtaStrip />
    </>
  );
}
