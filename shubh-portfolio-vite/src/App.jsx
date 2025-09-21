import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Sun,
  Moon,
  ChevronRight,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

/**
 * =============================
 *  SHUBH BHIKADIYA — PORTFOLIO
 * =============================
 */

const DATA = {
  site: {
    title: "Shubh Bhikadiya – Analytics, BI & Data Engineering",
    description:
      "Portfolio of Shubh Bhikadiya — Analytics/BI/Data Engineering/ML. 50M+ records, $5M+ impact, ML/BI/AWS. Projects, experience, and contact.",
    author: "Shubh Bhikadiya",
    url: "https://your-domain.com",
    ogImage: "/assets/og-card.png",
    favicon: "/favicon.ico",
  },
  person: {
    name: "Shubh Bhikadiya",
    tagline: "Analytical Engineer · Business Intelligence Analyst · Data Engineer / ML",
    location: "Tempe, AZ",
    email: "sbhikad1@asu.edu",
    phone: "+1-945-900-1585",
    linkedin: "https://linkedin.com/in/shubhbhikadiya",
    github: "https://github.com/shubhbhikadiya",
    openTo: "BI / Data Analytics / Data Engineering / ML",
    workAuth: "(edit in code)",
    resumeHref: "/assets/shubh_bhikadiya_resume.pdf",
    headshot: "/assets/headshot.jpg",
  },
  about: {
    bio:
      "I build enterprise-scale data platforms and decision systems that turn messy data into measurable impact. Over 2+ years, I've shipped fault‑tolerant ETL/ELT, built statistical and A/B testing frameworks, and put ML models into production — driving $5M+ in budget outcomes across higher‑ed and tech.",
    quickFacts: [
      { label: "Location", value: "Tempe, AZ", icon: MapPin },
      { label: "Open to", value: "BI/DA/DE/ML roles" },
      { label: "Work auth", value: "(edit)" },
    ],
    education: [
      {
        school: "Arizona State University",
        degree: "M.S., Information Technology (2024–2026)",
        meta: "GPA 3.96/4.00",
      },
      {
        school: "Pandit Deendayal Energy University (PDEU)",
        degree: "B.S., Information & Communication Technology (2020–2024)",
        meta: "GPA 3.60/4.00",
      },
    ],
  },
  skills: {
    groups: [
      {
        title: "Programming & Analytics",
        items: [
          "Python (pandas, numpy, scikit-learn, TensorFlow)",
          "SQL (PostgreSQL, Redshift, MySQL)",
          "R, Java, HTML/CSS/JS",
        ],
        badges: ["Python", "SQL", "pandas", "NumPy", "scikit-learn", "TensorFlow"],
      },
      {
        title: "ML & Stats",
        items: [
          "Hypothesis testing, A/B testing, causal inference",
          "PyTorch, XGBoost",
          "Computer Vision (OpenCV, YOLO)",
        ],
        badges: ["PyTorch", "XGBoost", "OpenCV", "YOLO"],
      },
      {
        title: "Data Eng & Cloud",
        items: [
          "AWS (S3, Glue, Redshift, SageMaker, EC2)",
          "Airflow, Kafka, Spark Streaming, Snowflake",
          "ETL/ELT, Great Expectations",
        ],
        badges: ["AWS", "Airflow", "Kafka", "Spark", "Snowflake", "Great Expectations"],
      },
      {
        title: "Viz & BI",
        items: [
          "Tableau (LOD, parameters)",
          "Power BI, SSRS, DBeaver",
          "Executive dashboards, data storytelling",
        ],
        badges: ["Tableau", "Power BI", "SSRS", "DBeaver"],
      },
      {
        title: "DevOps & Collaboration",
        items: ["Git, CI/CD (Jenkins)", "Docker", "Agile"],
        badges: ["Git", "CI/CD", "Jenkins", "Docker", "Agile"],
      },
    ],
  },
  experience: [
    {
      company: "Arizona State University – Sandra Day O’Connor College of Law",
      role: "Business Intelligence Analyst",
      period: "Aug 2025 – Present",
      bullets: [
        "Built analytics infra ingesting 50M+ records from Banner ERP, Salesforce, Workday; 99.9% uptime.",
        "ETL in Python/SQL/Redshift → cut manual prep 35%; report SLA 72h → 24h.",
        "A/B testing framework → +23% dashboard engagement.",
        "Predictive enrollment models (RF/XGBoost) R² 0.89, 92% accuracy → $5M+ budget impact, -8% attrition.",
        "Real-time data quality monitoring → 99.95% accuracy.",
      ],
    },
    {
      company: "ASU – Youth Justice Lab",
      role: "Applied Data Scientist Intern",
      period: "Jun 2025 – Aug 2025",
      bullets: [
        "Qualtrics Java/HTML enhancements → data collection time -30%; secure API pipeline for PII.",
        "Workflow automation (Qualtrics ↔ Monday.com) + SMS triggers → -60% manual coordination.",
        "Policy dashboards for juvenile justice insights.",
      ],
    },
    {
      company: "Tracious Technologies Pvt. Ltd.",
      role: "Data Engineer",
      period: "Jul 2022 – Aug 2024",
      bullets: [
        "Python/SQL/Airflow ETL; reporting latency -70%.",
        "AWS migration (S3/Glue/Redshift) → -35% cost, 99.9% reliability.",
        "Data quality with Great Expectations + CI/CD → -80% downstream issues.",
        "Kafka + Spark Streaming; optimized Snowflake marts → +45% dashboard perf.",
      ],
    },
    {
      company: "BrainyBeam Technologies",
      role: "Software Dev Intern",
      period: "May 2022 – Jul 2022",
      bullets: [
        "Django e-commerce platform; +security; +25% customer satisfaction metrics.",
      ],
    },
  ],
  projects: [
    {
      title: "Intelligent Vehicle Safety System (Capstone)",
      period: "Dec 2023 – May 2024",
      summary:
        "GPS geofencing, IMU turn detection; Arduino/C/C++; achieved 95% turn‑detection accuracy.",
      stack: ["Arduino", "C/C++", "IMU", "GPS"],
      links: [],
    },
    {
      title: "Real-Time License Plate Recognition (ANPR)",
      period: "Aug 2023 – Nov 2023",
      summary:
        "Team lead. Python/OpenCV/TensorFlow/YOLO on specialized hardware; 95% recognition at low latency.",
      stack: ["Python", "OpenCV", "TensorFlow", "YOLO"],
      links: [],
    },
  ],
  publications: {
    items: [],
    certs: [
      { name: "AWS (e.g., SAA, MLE)", href: "#" },
      { name: "dbt Fundamentals", href: "#" },
    ],
  },
};

function useTheme() {
  const [theme, setTheme] = useState("system");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const root = document.documentElement;
    const apply = (t) => {
      if (t === "dark" || (t === "system" && mql.matches)) root.classList.add("dark");
      else root.classList.remove("dark");
    };
    if (stored) {
      setTheme(stored);
      apply(stored);
    } else {
      setTheme("system");
      apply("system");
    }
    const listener = () => theme === "system" && apply("system");
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);
  const toggle = () => {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", next);
    setTheme(next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  return { theme, toggle };
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-50% 0px -45% 0px", threshold: 0.01 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

const Section = ({ id, children }) => (
  <section id={id} className="scroll-mt-24 py-12 sm:py-16 lg:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const Heading = ({ kicker, title, subtitle }) => (
  <div className="mb-8">
    {kicker && (
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
        {kicker}
      </p>
    )}
    <h2 className="font-inter text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>
    )}
  </div>
);

const Chip = ({ children }) => (
  <Badge className="rounded-full px-3 py-1 text-xs">{children}</Badge>
);

function Copyable({ text, children }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      aria-label={`Copy ${text}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {children}
    </button>
  );
}

export default function App() {
  const sections = ["home", "about", "skills", "experience", "projects", "pubs", "contact"];
  const active = useScrollSpy(sections);
  const { toggle } = useTheme();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
        active === id ? "text-emerald-600 dark:text-emerald-400" : "text-slate-600 dark:text-slate-300"
      }`}
      aria-current={active === id ? "page" : undefined}
    >
      {label}
    </a>
  );

  return (
    <div className="font-sourcesans text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Helmet>
        <title>{DATA.site.title}</title>
        <meta name="description" content={DATA.site.description} />
        <meta name="author" content={DATA.site.author} />
        <meta property="og:title" content={DATA.site.title} />
        <meta property="og:description" content={DATA.site.description} />
        {DATA.site.ogImage && <meta property="og:image" content={DATA.site.ogImage} />}
        <meta property="og:type" content="website" />
        {DATA.site.url && <meta property="og:url" content={DATA.site.url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DATA.site.title} />
        <meta name="twitter:description" content={DATA.site.description} />
        {DATA.site.ogImage && <meta name="twitter:image" content={DATA.site.ogImage} />}
        <link rel="icon" href={DATA.site.favicon} />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500" />
            <span className="font-inter text-base font-bold tracking-tight">Shubh Bhikadiya</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About" />
            <NavLink id="skills" label="Skills" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="pubs" label="Publications/Certs" />
            <NavLink id="contact" label="Contact" />
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full" onClick={toggle} aria-label="Toggle dark mode">
              <Sun className="h-4 w-4 dark:hidden" />
              <Moon className="hidden h-4 w-4 dark:block" />
            </Button>
            <a href={DATA.person.resumeHref} target="_blank" rel="noreferrer">
              <Button className="rounded-full">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="home">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-inter text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              {DATA.person.name}
            </motion.h1>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              {DATA.person.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects">
                <Button size="lg" className="rounded-2xl">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={DATA.person.resumeHref} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="rounded-2xl">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
              <a href={DATA.person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Button variant="ghost" className="rounded-2xl">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href={DATA.person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" className="rounded-2xl">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-pulse rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-400/20 to-sky-400/20 blur-2xl" />
            <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-slate-50 to-white shadow-xl dark:from-slate-900 dark:to-slate-900/60">
              <CardContent className="p-0">
                <img
                  src={DATA.person.headshot}
                  alt="Headshot of Shubh Bhikadiya"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <Heading kicker="About" title="Data-driven, impact-focused" subtitle={DATA.about.bio} />
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-3">
              {DATA.about.quickFacts.map((q, i) => (
                <div key={i} className="flex items-center gap-2 rounded-2xl border p-3">
                  {q.icon ? <q.icon className="h-4 w-4 text-emerald-500" /> : <BadgeCheck className="h-4 w-4 text-emerald-500" />}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">{q.label}</p>
                    <p className="font-medium">{q.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5"/>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {DATA.about.education.map((ed, i) => (
                <div key={i}>
                  <p className="font-semibold">{ed.school}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{ed.degree}</p>
                  <p className="text-xs text-slate-500">{ed.meta}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <Heading kicker="Skills" title="What I work with" subtitle="Modern analytics, ML, and data engineering stack — production-ready and collaborative." />
        <div className="grid gap-6 md:grid-cols-2">
          {DATA.skills.groups.map((g, i) => (
            <Card key={i} className="rounded-3xl">
              <CardHeader>
                <CardTitle>{g.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                  {g.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
                {g.badges?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.badges.map((b, k) => (
                      <Chip key={k}>{b}</Chip>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <Heading kicker="Experience" title="Roles & impact" subtitle="Highlights with hard metrics and outcomes." />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 rounded-full bg-emerald-200 dark:bg-emerald-900/40 md:left-1/2" />
          <div className="space-y-10">
            {DATA.experience.map((exp, i) => (
              <div key={i} className={`grid items-stretch gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <Card className="rounded-3xl">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{exp.company}</span>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{exp.period}</span>
                      </CardTitle>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{exp.role}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <ChevronRight className="mt-1 h-4 w-4 text-emerald-500" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <Heading kicker="Projects" title="Selected work" subtitle="Hands-on builds with shipped results." />
        <div className="grid gap-6 sm:grid-cols-2">
          {DATA.projects.map((p, i) => (
            <Card key={i} className="group rounded-3xl transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3">
                  <span>{p.title}</span>
                  <span className="text-xs text-slate-500">{p.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s, j) => (
                    <Chip key={j}>{s}</Chip>
                  ))}
                </div>
                {p.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((l, k) => (
                      <a key={k} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:underline">
                        {l.label} <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Publications & Certs */}
      <Section id="pubs">
        <Heading kicker="Publications / Certifications" title="Proof of work" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5"/>Publications</CardTitle>
            </CardHeader>
            <CardContent>
              {DATA.publications.items.length === 0 ? (
                <p className="text-slate-600 dark:text-slate-300">Add your publications with links here.</p>
              ) : (
                <ul className="list-disc space-y-2 pl-5">
                  {DATA.publications.items.map((it, i) => (
                    <li key={i}>
                      <a href={it.href} className="text-emerald-600 hover:underline" target="_blank" rel="noreferrer">
                        {it.title}
                      </a>{" "}
                      <span className="text-slate-600 dark:text-slate-300">— {it.venue} ({it.year})</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {DATA.publications.certs.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer">
                  <Badge className="rounded-full">{c.name}</Badge>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Heading kicker="Contact" title="Let's connect" subtitle="Prefer email or LinkedIn — I respond quickly." />
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form name="contact" method="POST" data-netlify="true" className="grid gap-4" aria-label="Contact form">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="name" placeholder="Your name" required />
                  <Input type="email" name="email" placeholder="Your email" required />
                </div>
                <Textarea name="message" placeholder="Your message" required rows={5} />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">Protected with basic spam honeypot by Netlify.</p>
                  <Button type="submit" className="rounded-2xl">Send</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card>
              <CardContent className="space-y-3 p-4">
                <a href={`mailto:${DATA.person.email}`} className="flex items-center gap-2 hover:underline">
                  <Mail className="h-4 w-4" /> {DATA.person.email}
                </a>
                <Copyable text={DATA.person.email}>Click to copy email</Copyable>
                <div className="h-px bg-slate-200 dark:bg-slate-800" />
                <a href={`tel:${DATA.person.phone}`} className="flex items-center gap-2 hover:underline">
                  <Phone className="h-4 w-4" /> {DATA.person.phone}
                </a>
                <Copyable text={DATA.person.phone}>Click to copy phone</Copyable>
                <div className="h-px bg-slate-200 dark:bg-slate-800" />
                <a href={DATA.person.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={DATA.person.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Open to: <span className="font-medium">{DATA.person.openTo}</span>
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Location: <span className="font-medium">{DATA.person.location}</span>
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Work authorization: <span className="font-medium">{DATA.person.workAuth}</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-200/60 py-10 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2025 {DATA.person.name}</p>
          <div className="flex items-center gap-3">
            <a href={DATA.person.resumeHref} className="inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href={DATA.person.linkedin} className="inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={DATA.person.github} className="inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        :root { --radius: 1rem; }
        .font-inter { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"; }
        .font-sourcesans { font-family: "Source Sans 3", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.25rem; }
      `}</style>
    </div>
  );
}
