import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kours - Plataforma White-label para Cursos Online",
  description:
    "Plataforma white-label para vender cursos online e produtos digitais. Crie, gerencie e escale com facilidade usando a Kours.",
  openGraph: {
    title: "Kours - Plataforma White-label para Cursos Online",
    description:
      "A Kours é uma plataforma white-label para criadores de conteúdo, escolas e empresas venderem cursos online e produtos digitais com autonomia, personalização e escalabilidade.",
    url: "https://kours.com.br",
    siteName: "Kours",
    images: [
      {
        url: "https://kours.com.br/webp/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kours - Plataforma para cursos online white-label",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kours - Plataforma White-label para Cursos Online",
    description:
      "A Kours é uma plataforma white-label para criadores de conteúdo, escolas e empresas venderem cursos online e produtos digitais com autonomia, personalização e escalabilidade.",
    images: ["https://kours.com.br/webp/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* SEO Essentials */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kours" />

        {/* Schema.org */}
        <Script
          id="schema-kours"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Kours",
            description:
              "Plataforma white-label para venda de cursos e produtos digitais",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            url: "https://kours.com.br",
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            },
          })}
        </Script>

        {/* Preconnects */}
        <link rel="preconnect" href="https://cdn.segment.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://sessions.bugsnag.com" />
      </Head>

      {process.env.NODE_ENV === "production" && (
        <>
          {/* Google Tag Manager */}
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-WX6ZYHMRYF');
            `}
          </Script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=G-WX6ZYHMRYF"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </>
      )}

      <body className={inter.className}>
        {children}

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1146058800520690');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1146058800520690&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
