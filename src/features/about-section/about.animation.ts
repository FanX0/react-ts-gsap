import { gsap } from "@/shared/lib/gsap";

export const aboutSectionReveal = (container: HTMLElement) => {
  const title = container.querySelector('h2');
  const items = container.querySelectorAll('.about-item');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
    }
  });

  tl.from(title, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })
  .from(items, {
    x: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  }, "-=0.4");
};
