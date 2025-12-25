import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/lib/toast";
import { ToastContainer } from "@/components/ui/ToastContainer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Usada Bali - Sistem Identifikasi Tanaman",
  description:
    "Sistem identifikasi tanaman Usada Bali berbasis web untuk membantu mengenali tanaman herbal tradisional.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} font-sans min-h-screen flex flex-col bg-white text-slate-900`}
      >
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  );
}
