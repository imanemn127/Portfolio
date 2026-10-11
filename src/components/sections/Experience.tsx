"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline, type TimelineEntry } from "@/components/ui/Timeline";
import { Starfield } from "@/components/ui/Starfield";
import { useLang, t } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

function EntryCard({
  label,
  title,
  period,
  location,
  description,
  tags = [],
  coursework = [],
  courseworkLabel,
}: {
  label: string;
  title: string;
  period: string;
  location: string;
  description: string;
  tags?: readonly string[];
  coursework?: readonly string[];
  courseworkLabel?: string;
}) {
  return (
    <article
      style={{
        paddingLeft: "clamp(1.5rem,3vw,2.5rem)",
        paddingBottom: "clamp(2rem,4vw,3.5rem)",
        position: "relative",
      }}
    >
      {/* Type label */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(1rem,2.2vw,1.45rem)",
          color: "var(--text)",
          letterSpacing: "-0.01em",
          marginBottom: "0.4rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      {/* Period + location */}
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          color: "var(--text-3)",
          letterSpacing: "0.06em",
          marginBottom: "0.9rem",
        }}
      >
        {period} · {location}
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.82rem,1.2vw,0.92rem)",
          lineHeight: 1.8,
          color: "var(--text-2)",
          maxWidth: "55ch",
          marginBottom: "1rem",
        }}
      >
        {description}
      </p>

      {/* Coursework */}
      {coursework.length > 0 && (
        <div style={{ marginBottom: tags.length > 0 ? "1rem" : 0 }}>
          {courseworkLabel && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--text-3)",
                marginBottom: "0.5rem",
              }}
            >
              {courseworkLabel}
            </div>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", maxWidth: "60ch" }}>
            {coursework.map((course) => (
              <span
                key={course}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.03em",
                  padding: "0.25rem 0.6rem",
                  border: "1px solid var(--accent)",
                  borderRadius: "3px",
                  color: "var(--text-2)",
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.64rem",
                letterSpacing: "0.05em",
                padding: "0.2rem 0.55rem",
                border: "1px solid var(--border)",
                borderRadius: "3px",
                color: "var(--text-3)",
                background: "var(--surface)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

type EntryTr = { title: string; period: string; location: string; description: string };

type EducationTr = {
  heading1: string;
  heading2: string;
  labelEdu: string;
  courseworkLabel: string;
  entries: {
    prep: EntryTr & { coursework: readonly string[] };
    mines: EntryTr & { coursework: readonly string[] };
    mva: EntryTr & { coursework: readonly string[] };
  };
};

type ExperienceTr = {
  heading1: string;
  heading2: string;
  labelExp: string;
  entries: {
    pellenc: EntryTr;
    inria: EntryTr;
  };
};

/* Education timeline, oldest first */
function buildEducationData(tr: EducationTr): TimelineEntry[] {
  const e = tr.entries;
  const card = (entry: EntryTr & { coursework: readonly string[] }) => (
    <EntryCard
      label={tr.labelEdu}
      title={entry.title}
      period={entry.period}
      location={entry.location}
      description={entry.description}
      coursework={entry.coursework}
      courseworkLabel={tr.courseworkLabel}
    />
  );
  return [
    { title: "2022 – 24", content: card(e.prep) },
    { title: "2024 – 27", content: card(e.mines) },
    { title: "2026 – 27", content: card(e.mva) },
  ];
}

/* Experience timeline, oldest first (tags are hardcoded here) */
function buildExperienceData(tr: ExperienceTr): TimelineEntry[] {
  const e = tr.entries;
  return [
    {
      title: "2025",
      content: (
        <EntryCard
          label={tr.labelExp}
          title={e.pellenc.title}
          period={e.pellenc.period}
          location={e.pellenc.location}
          description={e.pellenc.description}
          tags={["YOLOv8", "Python", "OpenCV", "Roboflow", "Dataset Annotation"]}
        />
      ),
    },
    {
      title: "2026",
      content: (
        <EntryCard
          label={tr.labelExp}
          title={e.inria.title}
          period={e.inria.period}
          location={e.inria.location}
          description={e.inria.description}
          tags={["Vision Transformers", "Multi-task CNNs", "Sentinel-2", "Geospatial Pipelines"]}
        />
      ),
    },
  ];
}

function CareerSection({
  id,
  heading1,
  heading2,
  data,
  paddingBottom,
}: {
  id: string;
  heading1: string;
  heading2: string;
  data: TimelineEntry[];
  paddingBottom: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".car-heading .ci", {
        scrollTrigger: { trigger: ".car-heading", start: "top 85%", once: true },
        yPercent: 108, duration: 1, stagger: 0.1, ease: "power4.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const Clip = ({ children }: { children: React.ReactNode }) => (
    <div style={{ overflow: "hidden" }}>
      <span className="ci" style={{ display: "block" }}>{children}</span>
    </div>
  );

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-h`}
      style={{
        padding: `clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3.5rem) ${paddingBottom}`,
        position: "relative",
        zIndex: 1,
        marginTop: "-60px",
        borderRadius: "40px 40px 0 0",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.08), 0 -1px 0 rgba(0,0,0,0.04)",
        background: "var(--bg)",
        overflow: "clip",
      }}
    >
      <Starfield
        starColor="rgba(255,255,255,1)"
        bgColor="rgba(20,14,10,1)"
        speed={0.5}
        quantity={300}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div id={`${id}-h`} className="car-heading" style={{ marginBottom: "clamp(3rem, 7vw, 6rem)" }}>
          <h2 style={{ margin: 0 }}>
            {/* Massive outlined heading */}
            <Clip>
              <span style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(3rem, 11vw, 10rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                WebkitTextStroke: "1.5px var(--text)",
                color: "transparent",
              }}>
                {heading1}
              </span>
            </Clip>

            {/* Filled serif subheading, offset right */}
            <Clip>
              <span style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 8.5vw, 8rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--accent)",
                paddingLeft: "clamp(0.5rem, 6vw, 6rem)",
              }}>
                {heading2}
              </span>
            </Clip>
          </h2>
        </div>

        <Timeline data={data} />
      </div>
    </section>
  );
}

export function Education() {
  const { lang } = useLang();
  const tr = t[lang].education;
  return (
    <CareerSection
      id="education"
      heading1={tr.heading1}
      heading2={tr.heading2}
      data={buildEducationData(tr)}
      paddingBottom="clamp(3rem, 6vw, 5rem)"
    />
  );
}

export function Experience() {
  const { lang } = useLang();
  const tr = t[lang].experience;
  return (
    <CareerSection
      id="experience"
      heading1={tr.heading1}
      heading2={tr.heading2}
      data={buildExperienceData(tr)}
      paddingBottom="clamp(6rem, 14vw, 12rem)"
    />
  );
}
