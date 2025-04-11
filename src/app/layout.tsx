import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kours",
  description:
    "Descubra a Kours, a plataforma white-label omnichannel que permite a personalização completa para venda de cursos online e produtos digitais. Com Kours, criadores de conteúdo, escolas EAD, e empresas podem gerenciar seus cursos e treinamentos com facilidade. Nossa plataforma oferece ferramentas avançadas de gerenciamento de conteúdo, acompanhamento de desempenho de vendas e uma experiência personalizada para seus alunos ou funcionários. Escolha entre a Área de Membros, nosso robusto LMS (Learning Management System), ou o Treinamento Privado para empresas. Comece agora com o self-onboarding simples ou solicite o onboarding guiado da nossa equipe especializada. Aumente suas vendas de conteúdo digital com uma solução prática, escalável e confiável.",
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

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Kours - Plataforma White-label para Cursos e Produtos Digitais"
        />
        <meta
          property="og:description"
          content="Venda cursos e produtos digitais com uma plataforma personalizável, robusta e moderna."
        />
        <meta
          property="og:image"
          content="https://kours.com.br/webp/og-image.webp"
        />
        <meta property="og:url" content="https://kours.com.br" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kours - Plataforma White-label" />
        <meta
          name="twitter:description"
          content="Venda cursos e produtos digitais com a Kours."
        />
        <meta
          name="twitter:image"
          content="https://kours.com.br/webp/og-image.webp"
        />

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
