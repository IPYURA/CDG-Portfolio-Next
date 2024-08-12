import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Roboto } from "next/font/google";
import "../styles/globals.scss";
import "../styles/zIndex.scss";
import "../styles/reset.scss";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
// const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });
// const roboto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CDG Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
