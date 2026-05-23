import { Hero } from "@/components/sections/Hero";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CtaStrip } from "@/components/sections/CtaStrip";
import {
  JsonLd,
  localBusinessSchema,
  websiteSchema,
} from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
      <Hero />
      <AboutSnippet />
      <ServicesGrid />
      <WhoWeServe />
      <ServiceAreaMap />
      <WhyChoose />
      <TestimonialsCarousel />
      <CtaStrip />
    </>
  );
}
