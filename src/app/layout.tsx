import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { GoogleTagManager } from "@next/third-parties/google";

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
    <html lang="en">
      <GoogleTagManager gtmId="G-WX6ZYHMRYF" />
      <body className={inter.className}>
        {children}

        {/* Google Tag Manager  */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-WX6ZYHMRYF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
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
