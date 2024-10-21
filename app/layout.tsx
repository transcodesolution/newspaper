import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/lib/styles/global.scss";
import Header from "@/lib/components/layouts/header";
import Footer from "@/lib/components/layouts/footer";

const ptSerifRegular = localFont({
  src: '../lib/fonts/PT_Serif/PTSerif-Regular.ttf',
  variable: '--font-ptserif-regular',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: "News Paper",
  description: "Everyday Update is now eassy!! Keep ahead your self from your colleague",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSerifRegular.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
