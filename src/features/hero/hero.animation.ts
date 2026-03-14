import { gsap } from "@/shared/lib/gsap";
import { fadeUp } from "@/shared/animations/presets";

export function heroReveal(container: HTMLElement) {
  const tl = gsap.timeline();
  
  tl.from(container.querySelectorAll(".hero-title"), {
    ...fadeUp,
    stagger: 0.1,
    delay: 0.2
  })
  .from(container.querySelectorAll(".hero-subtitle"), {
    ...fadeUp,
    y: 20,
    duration: 1
  }, "-=0.4")
  .from(container.querySelectorAll(".hero-cta"), {
    opacity: 0,
    y: 10,
    duration: 0.8
  }, "-=0.6");
  
  return tl;
}
