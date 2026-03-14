import { useRef } from "react";
import { useGSAP } from "@/shared/lib/gsap";
import { aboutSectionReveal } from "./about.animation";

export default function AboutSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    aboutSectionReveal(container.current);
  }, { scope: container });

  return (
    <section ref={container} className="about-section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Why GSAP + React?</h2>
            <div className="about-item" style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Full Control</h4>
              <p style={{ color: 'var(--text-muted)' }}>Precise control over every frame and property.</p>
            </div>
            <div className="about-item" style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Performance</h4>
              <p style={{ color: 'var(--text-muted)' }}>Silky smooth 60fps animations even on mobile.</p>
            </div>
            <div className="about-item">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Workflow</h4>
              <p style={{ color: 'var(--text-muted)' }}>Clean architecture with useGSAP and scoped selectors.</p>
            </div>
          </div>
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }} className="gradient-text">Ready to animate?</h3>
            <p style={{ marginBottom: '2rem' }}>Get started with our premium starter kit.</p>
            <button className="btn btn-primary">Download Template</button>
          </div>
        </div>
      </div>
    </section>
  );
}
