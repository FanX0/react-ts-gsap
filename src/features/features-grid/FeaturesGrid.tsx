import { useRef } from "react";
import { useGSAP } from "@/shared/lib/gsap";
import { featuresGridReveal } from "./features.animation";
import { Card } from "@/components/Card";
import { Layout, Cpu, Gauge, Shield } from "lucide-react";

const FEATURES = [
  { icon: <Layout />, title: "Modular", description: "Clean feature-based structure." },
  { icon: <Cpu />, title: "GSAP", description: "Professional animation platform." },
  { icon: <Gauge />, title: "Fast", description: "Optimized for performance." },
  { icon: <Shield />, title: "Safe", description: "Fully typed with TypeScript." }
];

export default function FeaturesGrid() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    featuresGridReveal(container.current);
  }, { scope: container });

  return (
    <section ref={container}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Core Features</h2>
        </div>
        
        <div className="features-grid">
          {FEATURES.map((feature, i) => (
            <Card 
              key={i}
              className="feature-card"
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
