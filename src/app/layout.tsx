import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import RateConversionModal from "@/components/organisms/RateConversionModal";
import SelectionModal from "@/components/organisms/SelectionModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bito",
  description: "BitoGroup Frontend Developer Pretest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-full overflow-hidden">
          <Nav />
          <div className="w-full h-[calc(100%-205px)]">
            {children}
          </div>
          <Footer />
          <RateConversionModal />
          <SelectionModal />
        </main>
      </body>
    </html>
  );
}
