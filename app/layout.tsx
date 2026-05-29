import type { Metadata } from "next";
import { JetBrains_Mono, Geologica } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geologicaHeading = Geologica({
  subsets: ["cyrillic"],
  variable: "--font-heading",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "lonam.dev",
  description: "Портфолио реально крутого бро",
  icons: {
    icon: [{ url: "/favicon.svg", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        geologicaHeading.variable,
        jetbrainsMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col dark">{children}</body>
    </html>
  );
}
