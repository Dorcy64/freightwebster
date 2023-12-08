import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freight Webster",
  description: "Digital guide to freight terminology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}