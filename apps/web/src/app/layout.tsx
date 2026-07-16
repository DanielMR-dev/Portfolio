import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Daniel Mira',
    default: 'Daniel Mira — Systems Engineer & Security Specialist',
  },
  description:
    'Portfolio of Daniel Mira Restrepo — Systems & Computer Engineering Graduate specializing in Network Security, Software Engineering, and Ethical Hacking.',
  authors: [{ name: 'Daniel Mira Restrepo' }],
  creator: 'Daniel Mira Restrepo',
  keywords: [
    'cybersecurity',
    'software engineering',
    'ethical hacker',
    'network security',
    'full stack developer',
    'Next.js',
    'React',
    'TypeScript',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
