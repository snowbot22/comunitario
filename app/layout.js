import Header from "@/components/Header";
import { Fira_Code, Work_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const geistMono = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Comunidad La Toglla",
  description:
    "Encuentra emprendimientos e información sobre la comunidad ancestral La Toglla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
