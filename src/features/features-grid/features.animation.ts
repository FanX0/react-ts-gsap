import { gsap } from "@/shared/lib/gsap";
import { fadeUp } from "@/shared/animations/presets";

export function featuresGridReveal(container: HTMLElement) {
  const cards = container.querySelectorAll(".feature-card");
  
  gsap.from(cards, {
    ...fadeUp,
    stagger: 0.15,
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
}
