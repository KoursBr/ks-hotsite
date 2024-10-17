import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
