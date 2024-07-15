import { Inter, Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J6GRE0TKHY"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J6GRE0TKHY');
          `}
        </Script>
      </head>
      <Head>
        <title>Rustcrab - The Non-Crap Repo for Rust Developers</title>
        <meta
          name="description"
          content="The best repository for Rust developers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} ${roboto.className} bg-white dark:bg-black min-h-screen text-black dark:text-white `}>
        <Header />
        {children}
        <Footer />
      </body>
      <CookieConsent />
    </html>
  );
}
