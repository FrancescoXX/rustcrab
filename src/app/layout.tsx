import { Inter, Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Pointer } from "@/components/cursor";



const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      variables: {
        colorPrimary: 'rgba(245, 116, 46, 1)',
        colorBackground: "rgba( 255, 255, 255, 0.105)",
        colorText: 'rgba(133, 133, 131, 1)',
        colorNeutral: 'rgba(133, 133, 131, 1)',
        colorInputBackground: 'rgba(255, 255, 255, 0.1)',
        colorInputText: 'rgba(133, 133, 131, 1)',
      },
      elements: {
        formButtonPrimary: {
          backgroundColor: 'rgba(245, 116, 46, 1)',
          '&:hover, &:focus, &:active': {
            backgroundColor: 'rgba(245, 116, 46, 1)',
          },
          'cl-manage-account-section': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
        },
      },
    }}
  >
      
   
    <html lang="en">
      <head>    
      <meta property="og:title" content="Rustcrab" />
        <meta
          property="og:description"
          content="An Open source project with everything you need to learn about Rust."
        />
        <meta
          property="og:image"
          content="https://www.rustcrab.com/rust_lgo_720.png"
        />
        <meta property="og:url" content="https://www.rustcrab.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Rustcrab" />
        <meta
          name="twitter:description"
          content="An Open source project with everything you need to learn about Rust"
        />
        <meta
          name="twitter:image"
          content="https://www.rustcrab.com/rust_lgo_720.png"
        />
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
      <body className={`${inter.className} ${roboto.className} bg-background min-h-screen text-foreground`}>
      <Pointer>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      
        {children}
        
        <Footer />
        </ThemeProvider>
        </Pointer>
      </body>
      <CookieConsent />
    </html>
    </ClerkProvider>
  );
}