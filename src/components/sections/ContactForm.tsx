"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { Input, Textarea, Select, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Pick a service"),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
  emergency: z.boolean().optional(),
});

type Values = z.infer<typeof schema>;

const SERVICE_OPTIONS = [
  "Water Heater Service & Installation",
  "General Plumbing",
  "Gas Fitting",
  "Drain Cleaning",
  "Emergency Plumbing",
  "Electrical",
  "Other / Not sure",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { emergency: false },
  });

  const onSubmit = async (values: Values) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="bg-surface border border-border rounded-xl p-8 text-center">
        <div className="mx-auto size-14 rounded-full bg-brand-orange/15 inline-flex items-center justify-center text-brand-orange">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">
          Thanks — we got it.
        </h3>
        <p className="mt-2 text-foreground-muted">
          We&apos;ll be in touch shortly. For anything urgent, please call
          us directly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-surface border border-border rounded-xl p-6 lg:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-brand-orange-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-brand-orange-600">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-brand-orange-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="service">Service needed</Label>
        <Select id="service" aria-invalid={!!errors.service} {...register("service")}>
          <option value="">Select a service…</option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        {errors.service && (
          <p className="mt-1 text-sm text-brand-orange-600">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Briefly describe the issue, location, and timing"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-brand-orange-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 size-4 rounded border-border-strong text-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          {...register("emergency")}
        />
        <span className="text-sm text-foreground-muted">
          <span className="font-medium text-foreground">
            This is an emergency.
          </span>{" "}
          For active leaks, gas smell, or no-heat in winter, please also call{" "}
          <a
            href="tel:7789385311"
            className="text-brand-blue-700 dark:text-brand-blue-300 underline-offset-4 underline"
          >
            778-938-5311
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg border border-brand-orange/40 bg-brand-orange/5 text-sm">
          <AlertTriangle className="size-5 text-brand-orange shrink-0 mt-0.5" />
          <div>
            Something went wrong submitting the form. Please try again or call
            us directly.
          </div>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send request"
        )}
      </Button>
      <p className="text-xs text-foreground-faint">
        By submitting, you agree to be contacted about your request. We
        don&apos;t share your info.
      </p>
    </form>
  );
}
