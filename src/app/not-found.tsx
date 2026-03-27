import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">Page not found</p>
          <Link
            href="/"
            className="px-6 py-3 bg-accent text-dark-900 font-semibold rounded-full hover:bg-accent-light transition-all"
          >
            Go home
          </Link>
        </div>
      </main>
    </>
  );
}
