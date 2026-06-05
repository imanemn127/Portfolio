"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { projects } from "@/lib/data"

const SUB = "From deep learning research to generative AI pipelines and edge deployment — six projects that matter."

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section ref={sectionRef} id="projects" className="section-padding px-6" aria-label="Projects">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="chip">03 — Work</span>
          <div className="section-label-line" />
        </motion.div>

        {/* Heading */}
        <div className="mb-16">
          <div style={{ overflow: "hidden" }}>
            <motion.div
              className="font-serif italic text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.3] text-[#717285]"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              selected
            </motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              className="font-impact leading-[0.88] text-[#F0EDE6]"
              style={{ fontSize: "clamp(5rem,14vw,13rem)", letterSpacing: "-0.02em" }}
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            >
              WORK<span style={{ color: "#7FCFE0" }}>.</span>
            </motion.div>
          </div>
          <motion.p
            className="text-[#717285] text-lg max-w-xl mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            {SUB}
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

type Project = typeof projects[number]

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      className="group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "rgba(10,10,20,0.65)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, borderColor: `${project.color}35` }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${project.color}90, ${project.color}20, transparent)` }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Period + GitHub icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] text-[#3D3F52] uppercase tracking-wider">{project.period}</span>
          {/* GitHub arrow icon */}
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ borderColor: `${project.color}40`, color: project.color }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-[#F0EDE6] mb-1 leading-tight">
          {project.title}
        </h3>
        <p className="font-mono text-[11px] mb-4" style={{ color: project.color }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-[#6B6B80] text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Impact */}
        <p
          className="font-mono text-[11px] mb-5 pl-4 pr-3 py-2 rounded-lg ml-1"
          style={{
            color: project.color,
            background: `${project.color}10`,
            borderLeft: `2px solid ${project.color}60`,
          }}
        >
          {project.impact}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded"
              style={{
                color: project.color,
                background: `${project.color}10`,
                border: `1px solid ${project.color}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
