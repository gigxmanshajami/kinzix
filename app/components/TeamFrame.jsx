'use client'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials.jsx';
import { urlFor } from "@/lib/imageUrl";
import { useEffect, useState } from "react";

export function TeamsShow({ data }) {
  const [testimonialssec, setTestimonialsec] = useState([]);

  useEffect(() => {
    const testimonials = data?.[0]?.testimonials;

    if (Array.isArray(testimonials) && testimonials.length > 0) {
      const formatted = testimonials.map((item) => ({
        quote: item.quote || "",
        name: item.name || "Anonymous",
        designation: item.designation || "",
        src: item.image?.asset?._ref ? urlFor(item.image).url() : "",
      }));

      setTestimonialsec(formatted);
    } else {
      console.error("No valid testimonials data");
    }
  }, [data]);

  return (
    testimonialssec.length > 0 && (
      // <AnimatedTestimonials testimonials={testimonialssec} />
      <AnimatedTestimonials />
    )
  );
}
