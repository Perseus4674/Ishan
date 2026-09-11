"use client";

import { useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { nowTabs } from "@/content/now";

export function Now() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(index: number) {
    const nextIndex = (index + nowTabs.length) % nowTabs.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        focusTab(activeIndex + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        focusTab(activeIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(nowTabs.length - 1);
        break;
    }
  }

  const active = nowTabs[activeIndex];

  return (
    <section id="now" aria-labelledby="now-heading" className="content-width px-4 py-20 sm:px-6">
      <SectionHeading id="now-heading">Now</SectionHeading>

      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="what i'm doing now"
          onKeyDown={onKeyDown}
          className="flex gap-2 overflow-x-auto pb-2 md:w-48 md:flex-shrink-0 md:flex-col md:gap-1 md:overflow-visible md:pb-0"
        >
          {nowTabs.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`tab-${tab.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 whitespace-nowrap border-b-2 px-3 py-2 text-left font-mono text-sm transition-colors md:border-b-0 md:border-l-2 md:px-4 md:py-2.5 ${
                  isActive
                    ? "border-amber text-amber"
                    : "border-line text-muted hover:text-text"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
          className="max-w-prose"
        >
          {active.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 leading-relaxed text-text last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
