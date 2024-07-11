import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Rustcrab - The Non-Crap Repo for Rust Developers</title>
        <meta name="description" content="The best repository for Rust developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} ${roboto.className}`}>{children}</body>
    </html>
  );
}
