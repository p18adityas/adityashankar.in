'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    role: 'Principal Product Manager',
    company: 'Moveworks (ServiceNow)',
    period: 'Nov 2023 — Present',
    highlights: [
      'Leading 3 product charters with a team of 5 product members',
      'Built & launched Self-Service platform (0→1) — 40% admin adoption in 1 year, 30% reduction in support tickets',
      'Led integrations spec & development of 25+ enterprise systems',
      'Launching 300+ enterprise-ready AI agents across HR, IT, and Finance',
      'Driving $100M+ ARR upsell opportunity through Agent Marketplace',
    ],
  },
  {
    role: 'Director, Product Management',
    company: 'Sprinklr (NYSE: CXM)',
    period: 'May 2020 — Oct 2023',
    highlights: [
      'Owned Product Development, Roadmap, GTM strategy for Social Listening ($180M+ ARR)',
      'Managed team of 12 product members & 11 support engineers',
      'Drove 10+ releases and 300+ feature improvements over 3 years',
      'Launched "Product Insights" SKU contributing $15M new ARR in 2 years',
      'Launched self-serve Lite version onboarding 4200+ users across 50+ countries',
    ],
  },
  {
    role: 'Associate Product Manager',
    company: 'Ola Cabs',
    period: 'Jul 2016 — Apr 2018',
    highlights: [
      'Led West Zone Demand & Supply Analytics, P&L, and Ola Share Category',
      'Managed supply & demand analytics team of 6 BAs and 5 MIS Executives',
      'Designed incentive schemes for 60k+ cab fleet (INR 180+ Cr annual budget)',
      'Grew Ola Share by 100% and Ola Micro category by 60% in 1 year',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            // Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient-subtle">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-accent shadow-[0_0_12px_rgba(0,212,170,0.5)]" />

                <div className="glass rounded-2xl p-8 glass-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-gray-400 text-sm leading-relaxed flex gap-3"
                      >
                        <span className="text-accent/60 mt-1 shrink-0">
                          &mdash;
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
