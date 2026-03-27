import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aditya Shankar — Product Leader',
  description:
    'Product Leader with 8+ years of experience building and scaling products across B2B SaaS and B2C. Currently Principal PM at Moveworks (ServiceNow).',
  openGraph: {
    title: 'Aditya Shankar — Product Leader',
    description:
      'Product Leader building and scaling products across B2B SaaS and B2C.',
    url: 'https://adityashankar.in',
    siteName: 'Aditya Shankar',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
