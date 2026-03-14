import { Link } from "react-router-dom";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <section style={{ paddingTop: '8rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About This Template</h1>
        <div className="card" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            This template was designed to bridge the gap between complex GSAP animations and structured React development. 
            By externalizing animation logic and using scoped hooks, we ensure performance and maintainability.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {[
              "Centralized GSAP lifecycle management",
              "Reusable animation presets",
              "Feature-Sliced Design principles"
            ].map((text, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
