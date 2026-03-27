import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-bold">
              aditya<span className="text-accent">.</span>
            </Link>
            <span className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm font-mono">
            <Link
              href="/#about"
              className="text-gray-500 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
