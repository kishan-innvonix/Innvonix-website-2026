"use client";

import { Fragment, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import FloatingSkills from "@/components/floating-skills";

// Default cell size for desktop
const DEFAULT_CELL = 91;

function injectGridKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById("__grid-blink-kf")) return;
  const s = document.createElement("style");
  s.id = "__grid-blink-kf";
  s.textContent = `
    @keyframes gridBlink {
      0%,100% { opacity: 0.07; background-color: transparent; }
      50%      { opacity: 0.60; background-color: rgba(241,73,60,0.18); }
    }
  `;
  document.head.appendChild(s);
}

function buildGrid(
  el: HTMLDivElement,
  containerW: number,
  containerH: number,
  cellSize: number
) {
  el.innerHTML = "";

  // Expand to fully cover: ceil ensures no gaps at edges
  const cols = Math.ceil(containerW / cellSize);
  const rows = Math.ceil(containerH / cellSize);
  const total = cols * rows;
  const activeCount = Math.floor(total * 0.1);

  // Size the grid element to exactly cols×rows cells
  el.style.width = `${cols * cellSize}px`;
  el.style.height = `${rows * cellSize}px`;
  el.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
  el.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

  const frag = document.createDocumentFragment();
  const squares: HTMLDivElement[] = [];

  for (let i = 0; i < total; i++) {
    const sq = document.createElement("div");
    sq.style.cssText =
      `width:${cellSize}px;height:${cellSize}px;` +
      `border:1px solid rgba(241,73,60,0.8);` +
      `box-sizing:border-box;opacity:0.07;`;
    frag.appendChild(sq);
    squares.push(sq);
  }

  el.appendChild(frag);

  squares
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, activeCount)
    .forEach((sq) => {
      const dur = (1 + Math.random() * 10).toFixed(2) + "s";
      const delay = (Math.random() * 10).toFixed(2) + "s";
      sq.style.willChange = "opacity, background-color";
      sq.style.animation = `gridBlink ${dur} ease-in-out ${delay} infinite`;
    });
}

function GridBackground({ className = "" }: { className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectGridKeyframes();
    const wrapper = wrapperRef.current;
    const grid = gridRef.current;
    if (!wrapper || !grid) return;

    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;

      // Determine cell size based on width
      let cellSize = DEFAULT_CELL;
      if (width < 640) {
        cellSize = 45; // Mobile
      } else if (width < 1024) {
        cellSize = 65; // Tablet
      }

      buildGrid(grid, width, height, cellSize);
    });

    ro.observe(wrapper);
    return () => ro.disconnect();
  }, []);

  return (
    // wrapper matches the section perfectly
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={className}
      style={{ overflow: "hidden" }}
    >
      {/* inner grid is sized to exact cell multiples */}
      <div
        ref={gridRef}
        style={{ display: "grid", position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}

export default function HeroSection() {
  const stats = [
    { value: "300+", label: "PROJECTS" },
    { value: "800+", label: "CLIENTS" },
    { value: "100+", label: "EXPERTS" },
    { value: "250+", label: "HOURS" },
  ];

  return (
    <div className="mxl:h-[calc(100vh-80px)] mt-[80px] h-auto w-full">
      <section className="relative w-full h-[calc(100vh-80px)] mxl:h-[82%] overflow-hidden bg-background">
        <GridBackground className="absolute inset-0 z-0" />
        <FloatingSkills />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center md:max-w-6xl mx-auto space-y-2 ">
          <h1 className="font-poppins text-4xl z-10 md:text-6xl 2xl:text-7xl font-medium leading-tight text-primary">
            WEB AND MOBILE
            <br className="hidden sm:block" /> APP DEVELOPMENT
          </h1>

          <p className="text-lg md:text-xl 2xl:text-2xl z-10 text-foreground font-medium font-manrope max-w-xl leading-relaxed mb-6 2xl:mb-10">
            Your Go-To-Partner for Website And Mobile App Development Projects!
          </p>
          <p className="text-sm md:text-base 2xl:text-lg z-10 text-foreground font-medium font-manrope max-w-xl leading-relaxed">
            We are bringing ideas to life. Our expert web and mobile team can
            develop impeccable solutions. We build e-commerce portals, custom
            web and mobile applications with robust user-experience matching
            your deadlines.
          </p>
          <div className="flex z-10 flex-col sm:flex-row items-center gap-5 pt-6 2xl:pt-10 font-poppins">
            <Button
              size="lg"
              className="h-14 px-8 text-sm md:text-base  font-semibold"
            >
              GET A QUOTE
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-14 px-8 text-sm md:text-base font-semibold bg-foreground text-background"
            >
              OUR SOLUTION
            </Button>
          </div>
        </div>
      </section>

      <div className="flex items-center text-xl md:text-4xl justify-evenly w-full font-poppins h-35 mxl:h-[18%] font-semibold border-y border-primary">
        {stats.map((stat, index) => (
          <Fragment key={index}>
            <div className="text-primary text-center leading-none">
              {stat.value} <br />
              <span className="text-foreground text-sm md:text-lg font-medium">
                {stat.label}
              </span>
            </div>
            {index < stats.length - 1 && (
              <div className="h-14 w-px bg-divider" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
