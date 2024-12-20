import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/navbar';
import localFont from "next/font/local";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import { Analytics } from "@vercel/analytics/react"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "StreetGuardian",
  description: "One stop solution to provide shelter and immediate help to homeless people at any given instant, 24/7!",
};

import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}

