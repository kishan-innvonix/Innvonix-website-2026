import { useEffect, useRef, useCallback } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  size: "sm" | "md" | "lg";
}

interface Bubble {
  skill: Skill;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  opacity: number;
  el: HTMLDivElement | null;
}
const SKILLS: Skill[] = [
  {
    name: "React",
    icon: "/images/react.svg",
    color: "#61dafb",
    bgColor: "rgba(97,218,251,0.10)",
    size: "lg",
  },
  {
    name: "Java",
    icon: "/images/java.svg",
    color: "#f89820",
    bgColor: "rgba(248,152,32,0.10)",
    size: "md",
  },
  {
    name: "Android",
    icon: "/images/android.svg",
    color: "#3ddc84",
    bgColor: "rgba(61,220,132,0.10)",
    size: "md",
  },
  {
    name: "Vue",
    icon: "/images/vue.svg",
    color: "#42b883",
    bgColor: "rgba(66,184,131,0.10)",
    size: "md",
  },
  {
    name: "Angular",
    icon: "/images/angular.svg",
    color: "#dd0031",
    bgColor: "rgba(221,0,49,0.10)",
    size: "lg",
  },
  {
    name: "HTML",
    icon: "/images/html.svg",
    color: "#e34c26",
    bgColor: "rgba(227,76,38,0.10)",
    size: "sm",
  },
];

const BUBBLE_DIMENSIONS: Record<Skill["size"], { w: number; h: number }> = {
  sm: { w: 90, h: 58 },
  md: { w: 110, h: 66 },
  lg: { w: 130, h: 72 },
};

const SPEED = 0.6;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function randomVelocity() {
  const angle = Math.random() * Math.PI * 2;
  const speed = randomBetween(SPEED * 0.5, SPEED * 1.5);
  return { vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed };
}

export default function FloatingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const rafRef = useRef<number>(0);
  const initDone = useRef(false);

  const initBubbles = useCallback(() => {
    const container = containerRef.current;
    if (!container || initDone.current) return;
    initDone.current = true;

    const W = container.offsetWidth;
    const H = container.offsetHeight;

    bubblesRef.current = SKILLS.map((skill) => {
      const { w, h } = BUBBLE_DIMENSIONS[skill.size];
      const { vx, vy } = randomVelocity();

      const el = document.createElement("div");
      el.style.cssText = `
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: ${w}px;
  height: ${h}px;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: default;
  user-select: none;
  will-change: transform;
  transition: opacity 0.5s ease;
  opacity: 0;
`;
      const iconEl = document.createElement("img");
      iconEl.style.cssText = `
  width: ${skill.size === "lg" ? "4rem" : skill.size === "sm" ? "2rem" : "3rem"};
  height: ${skill.size === "lg" ? "4rem" : skill.size === "sm" ? "2rem" : "3rem"};
`;
      iconEl.src = skill.icon;

      const nameEl = document.createElement("span");
      nameEl.style.cssText = `
        font-size: ${skill.size === "lg" ? "0.68rem" : "0.62rem"};
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        white-space: nowrap;
        color: ${skill.color};
      `;
      nameEl.textContent = skill.name;

      el.appendChild(iconEl);
      el.appendChild(nameEl);
      container.appendChild(el);

      const x = randomBetween(0, Math.max(0, W - w));
      const y = randomBetween(0, Math.max(0, H - h));

      setTimeout(() => {
        el.style.opacity = String(randomBetween(0.55, 0.85));
      }, Math.random() * 800);

      return { skill, x, y, vx, vy, width: w, height: h, opacity: 0, el };
    });
  }, []);

  const animate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.offsetWidth;
    const H = container.offsetHeight;

    for (const bubble of bubblesRef.current) {
      if (!bubble.el) continue;

      bubble.x += bubble.vx;
      bubble.y += bubble.vy;

      if (bubble.x <= 0) {
        bubble.x = 0;
        bubble.vx = Math.abs(bubble.vx);
      } else if (bubble.x + bubble.width >= W) {
        bubble.x = W - bubble.width;
        bubble.vx = -Math.abs(bubble.vx);
      }

      if (bubble.y <= 0) {
        bubble.y = 0;
        bubble.vy = Math.abs(bubble.vy);
      } else if (bubble.y + bubble.height >= H) {
        bubble.y = H - bubble.height;
        bubble.vy = -Math.abs(bubble.vy);
      }

      bubble.el.style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    initBubbles();
    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;
      const W = container.offsetWidth;
      const H = container.offsetHeight;
      for (const b of bubblesRef.current) {
        b.x = Math.min(b.x, Math.max(0, W - b.width));
        b.y = Math.min(b.y, Math.max(0, H - b.height));
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [initBubbles, animate]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0" />
  );
}
