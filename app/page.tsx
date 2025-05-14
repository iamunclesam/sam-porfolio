"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion"
import { ArrowDown, Code, Github, Twitter, Linkedin, Mail, Sparkles } from "lucide-react"
import sam from "../public/sam.jpeg"
import Link from "next/link"

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  })
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  })
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed"
  })

  return (
    <div ref={targetRef} className="bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale, position }}
        className="flex flex-col items-center justify-center w-full h-screen px-4 top-0 left-0 right-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">Sam Adeyemi</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-300 mb-4">Software Developer</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-xl md:text-2xl text-zinc-400 mb-8 text-center max-w-2xl font-bold"
        >
          I offer Sam as a Service (SaaS).
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 animate-bounce"
        >
          <ArrowDown className="h-8 w-8 text-purple-400" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pt-[100vh]">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-zinc-400 mb-4">
                I'm a full-stack developer who loves working with JavaScript and its ecosystem. Whether it's crafting smooth user interfaces or building robust backend systems, I enjoy creating web applications that scale well and feel intuitive to use.
              </p>
              <p className="text-zinc-400">
                I care about writing clean, maintainable code, and I've had the chance to work on a variety of projects—from healthcare platforms to fintech tools and e-commerce systems.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-zinc-700">
                <img
                  src={sam.src}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "JavaScript Ecosystem", icon: Code },
              { name: "GitHub & Git", icon: Github },
              { name: "Firebase & Supabase", icon: Sparkles },
              { name: "Node.js", icon: Code },
              { name: "Express", icon: Code },
              { name: "MongoDB", icon: Code },
              { name: "Scripts & Automation", icon: Code },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-purple-500 transition-all"
              >
                <skill.icon className="h-8 w-8 text-purple-400 mb-3" />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Projects</h2>

          <div className="space-y-24">
            {/* Rendezvouscare */}
            <ProjectCard
              title="Rendezvouscare"
              description="A comprehensive wellness service platform including therapists, life coaches, vendors, and matchmaking services."
              details="Built under JayCo Links, this platform connects users with wellness professionals and services, featuring a sophisticated matchmaking system."
              index={0}
              isPrivate={true}
            />

            {/* Payrendr */}
            <ProjectCard
              title="Payrendr"
              description="A staff management application with salary disbursement and comprehensive employee management features."
              details="Developed under JayCo Links, this system streamlines HR operations with automated payroll processing and detailed staff records management."
              index={1}
              isPrivate={true}
            />

            {/* Multitenancy Application */}
            <ProjectCard
              title="Multitenancy E-commerce Platform"
              description="An application that onboards small business owners and deploys a live store with domain and hosting under 5 minutes."
              details="Built both the frontend and backend, including inventory management. Created an auto-deployment and domain linking script with Node.js, Express, and Vercel, along with payment disbursement integration using Paystack."
              index={2}
              githubUrl="https://github.com/iamunclesam/SelApp"
              isPrivate={false}
            />

            {/* SplitPay */}
            <ProjectCard
              title="SplitPay"
              description="A budgeting fintech application that won a Hackathon, with versions on traditional infrastructure and Cardano blockchain."
              details="Developed the backend for this innovative financial tool that helps users manage shared expenses and budgets efficiently."
              index={3}
              githubUrl="https://github.com/iamunclesam/team-sav"
              isPrivate={false}
            />

            {/* Hospital Management System */}
            <ProjectCard
              title="Hospital Management System"
              description="A comprehensive backend solution for healthcare facility management."
              details="Engineered the server-side architecture to handle patient records, appointments, billing, and medical staff coordination."
              index={4}
                       githubUrl="https://github.com/iamunclesam/Aura-clinic"
              isPrivate={false}
            />

            {/* LMS Consultant Dashboard */}
            <ProjectCard
              title="LMS Consultant Dashboard"
              description="A frontend interface for a Learning Management System focused on consultant needs."
              details="Designed and implemented an intuitive dashboard that enables consultants to manage courses, track student progress, and analyze learning outcomes."
              index={5}
              isPrivate={true}
            />
          </div>
        </motion.section>

        {/* Contact Section */}
        <div
          className="py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Get In Touch</h2>
          <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-zinc-400 mb-6">
                  Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                </p>
                <Link
                  href="mailto:contact@example.com"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>dev.samadeyemi@gmail.com</span>
                </Link>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <a href="https://github.com/iamunclesam" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a> */}
                  <a href="https://x.com/heis_unclesam" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700 hover:border-purple-500 transition-all text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Let's build something amazing together</h3>
                  <a
                    href="https://wa.me/09046425011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center justify-center"
                  >
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-10 border-t border-zinc-800 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 mb-4 md:mb-0">© {new Date().getFullYear()} | All Rights Reserved</p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-purple-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  details: string
  index: number
  githubUrl?: string
  isPrivate?: boolean
}

function ProjectCard({ title, description, details, index, githubUrl, isPrivate }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
    >
      <div className="md:w-2/5">
        <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 flex items-center justify-center">
          <Sparkles className="h-16 w-16 text-purple-400" />
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {isPrivate && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
              Private Repository
            </span>
          )}
        </div>
        <p className="text-purple-400 mb-4">{description}</p>
        <p className="text-zinc-400 mb-4">{details}</p>
        {githubUrl && !isPrivate && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors border border-zinc-700"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}
