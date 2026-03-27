'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'p18adityas@iima.ac.in',
    href: 'mailto:p18adityas@iima.ac.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8953444767',
    href: 'tel:+918953444767',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '@adityashankar2',
    href: 'https://linkedin.com/in/adityashankar2',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              // Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-subtle">
              Let&apos;s connect
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-16">
              Whether you want to discuss product strategy, explore
              collaboration opportunities, or just say hello — I&apos;d love to
              hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === 'LinkedIn' ? '_blank' : undefined}
                rel={
                  link.label === 'LinkedIn'
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-8 glass-hover group text-center"
              >
                <link.icon
                  size={24}
                  className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform"
                />
                <p className="text-sm text-gray-500 font-mono mb-1">
                  {link.label}
                </p>
                <p className="text-white font-medium">{link.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12"
          >
            <a
              href="mailto:p18adityas@iima.ac.in"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full hover:bg-accent-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
            >
              <Mail size={18} />
              Say Hello
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
