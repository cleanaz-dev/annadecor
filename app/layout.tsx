import type { Metadata } from "next";
import { Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "AnnaDecor - Interior Design Excellence",
  description: "Transform your space with professional interior design services",
  generator: "v0.app",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
