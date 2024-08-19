import { Noto_Sans_KR, Roboto } from "next/font/google";

export const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-notoSansKR",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});
