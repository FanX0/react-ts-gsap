import Hero from "@/features/hero/Hero";
import FeaturesGrid from "@/features/features-grid/FeaturesGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <section style={{ backgroundColor: 'rgba(99, 102, 241, 0.05)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontStyle: 'italic' }}>
            "Animations should be felt, not just seen."
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>Built with the ultimate professional workflow.</p>
        </div>
      </section>
    </>
  );
}
