import type { Metadata } from "next";
import {
  Inter,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-base-sans",
  display: "swap",
});

const devanagariSerif = Noto_Serif_Devanagari({
  subsets: ["latin", "devanagari"],
  variable: "--font-devanagari-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

const title = "मोहन का घड़ा";
const description =
  "गाँव के कुम्हार मोहन की कहानी, जिसने अपने सपनों को एक घड़े में गढ़ा और शहर के एक बच्चे की प्यास बुझा दी।";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-0ffe74f8.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "hi_IN",
    type: "website",
    url: "https://agentic-0ffe74f8.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://agentic-0ffe74f8.vercel.app",
    languages: {
      hi: "https://agentic-0ffe74f8.vercel.app",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${devanagariSerif.variable} antialiased bg-amber-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
