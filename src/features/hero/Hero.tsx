import { useRef } from "react";
import { useGSAP } from "@/shared/lib/gsap";
import { heroReveal } from "./hero.anim";
import { Button } from "@/components/Button";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    heroReveal(container.current);
  }, { scope: container });

  return (
    <section ref={container} className="hero">
      <div className="container">
        <h1 className="hero-title">
          Create <span className="gradient-text">Magic</span> With <br /> Animation
        </h1>
        <p className="hero-subtitle">
          A lean, industry-standard GSAP template for React.
        </p>
        <div className="hero-cta">
          <Button>Get Started</Button>
          <Button variant="glass">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
