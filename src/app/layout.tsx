import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heuvera – Find a Place",
  description: "Explore handpicked vacation rentals, short-term stays, and unique travel experiences with Heuvera—your gateway to the perfect getaway.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
