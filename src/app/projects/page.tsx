import { getAllProjects } from '@/lib/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Aditya Shankar',
  description: 'Products and projects I have built and led.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            // Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-subtle">
            All Projects
          </h1>
          <p className="text-gray-400 mb-16">
            Products I&apos;ve built, led, and shipped.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="glass rounded-2xl p-8 glass-hover group flex flex-col"
              >
                {project.featured && (
                  <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-3">
                    Featured
                  </span>
                )}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono text-gray-500 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} /> Source
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
