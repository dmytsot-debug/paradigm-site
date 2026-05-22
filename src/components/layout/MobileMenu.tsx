"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { SITE, cn } from "@/lib/utils";
import { Logo } from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/tips", label: "Tips" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center size-10 rounded-md border border-border-strong bg-surface"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 right-0 w-[88%] max-w-sm bg-background border-l border-border flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="size-10 inline-flex items-center justify-center rounded-md border border-border-strong"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cn(
                    "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                    pathname === n.href
                      ? "bg-brand-blue-100 text-brand-blue-900 dark:bg-brand-blue-700 dark:text-white"
                      : "text-foreground hover:bg-background-subtle",
                  )}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-border space-y-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 bg-brand-orange-button text-white rounded-md py-3 font-medium"
              >
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-brand-blue-900 text-white rounded-md py-3 font-medium dark:bg-brand-blue-600"
              >
                Request Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
