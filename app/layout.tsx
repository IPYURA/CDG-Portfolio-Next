import type { Metadata } from "next";
import { notoSansKR } from "./font";
import "../styles/globals.scss";
import "../styles/zIndex.scss";
import "../styles/reset.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CDG Portfolio",
  description: "조동건의 포트폴리오 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
