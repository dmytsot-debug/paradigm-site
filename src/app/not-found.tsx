import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-prose max-w-xl text-center">
        <p className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl lg:text-7xl font-bold tracking-tight">
          That page sprung a leak.
        </h1>
        <p className="mt-5 text-foreground-muted text-lg">
          We can&apos;t find what you&apos;re looking for. Try the home page,
          or give us a call.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            All services
          </Button>
        </div>
        <div className="mt-10 text-sm text-foreground-faint">
          Or browse:{" "}
          <Link href="/about" className="underline-offset-4 hover:underline">
            About
          </Link>
          {" · "}
          <Link href="/contact" className="underline-offset-4 hover:underline">
            Contact
          </Link>
          {" · "}
          <Link href="/tips" className="underline-offset-4 hover:underline">
            Tips
          </Link>
        </div>
      </div>
    </section>
  );
}
