import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getAllProjects } from '@/lib/projects';
import { getAllBlogPosts } from '@/lib/blogs';

export default function Home() {
  const projects = getAllProjects();
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} />
        <Blog posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
