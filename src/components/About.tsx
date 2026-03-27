'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '8+', label: 'Years of Experience' },
  { value: '23+', label: 'Team Members Led' },
  { value: '$180M+', label: 'ARR Product Owned' },
  { value: '300+', label: 'Features Shipped' },
];

const competencies = [
  'Product Management',
  'B2B SaaS',
  'Agentic AI',
  'AI Copilots',
  'Self-Service',
  'PLG',
  'Integrations',
  'Product GTM',
  'Data Analytics',
  'UX Research',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            // About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient-subtle">
            Who I am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a Product Leader with 8+ years of experience building and
              scaling products across B2B SaaS and B2C. I specialize in 0&rarr;1
              product development, driving 1&rarr;10 growth, and leading
              high-impact cross-functional teams.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Currently at <span className="text-white">Moveworks</span>{' '}
              (acquired by ServiceNow), I lead Self-Service, System
              Integrations, and the AI Agent Marketplace — launching 300+
              enterprise-ready agents and driving $100M+ ARR upsell
              opportunities.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I hold an MBA from{' '}
              <span className="text-white">IIM Ahmedabad</span> (Top 10%ile)
              with an exchange at Stockholm School of Economics, and a B.Tech
              from <span className="text-white">IIT Kanpur</span>.
            </p>

            {/* Competency tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {competencies.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-xs font-mono text-accent/80 border border-accent/20 rounded-full bg-accent/[0.04]"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-8 text-center glass-hover"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
