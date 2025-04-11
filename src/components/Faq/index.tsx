"use client";

import Image from "next/image";
import { Hide, useBreakpointValue } from "@chakra-ui/media-query";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import KoursLogo from "../../../public/svg/kours-white-logo.svg";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { forwardRef } from "react";
import { useRouter } from "next/navigation";

const FaqSection = forwardRef(
  ({ onTalkToUseClick }: { onTalkToUseClick: () => void }, forwardRef: any) => {
    const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

    const router = useRouter();

    return (
      <Box
        as="section"
        bg="rgb(24,24,24)"
        bgGradient="linear(to top, rgba(24,24,24,0) 0%, rgba(0,0,0,1) 100%)"
        minH={"100vh"}
        height={{ base: "auto", md: "auto" }}
        position="relative"
        pt={{ base: 8, md: 24 }}
        ref={forwardRef}
      >
        <Hide below="md">
          <Box
            position={"absolute"}
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgImage="url('/svg/faq-background-image.svg')"
            bgPosition="bottom"
            bgRepeat="repeat-y"
            bgSize="100vw 300px"
            height={"full"}
          />
        </Hide>

        <Flex
          direction="column"
          justify={"space-between"}
          color="white"
          gap={12}
          py={10}
          px={{ base: 2, md: 8 }}
          maxW="7xl"
          mx="auto"
          height={"full"}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            p={{ base: 4, md: 10 }}
            zIndex="2"
            position="relative"
          >
            <Box maxW={{ base: "100%", md: "40%" }} zIndex="2">
              <Text mb={2} color={"#62B0F9"} fontWeight={600}>
                Perguntas frequentes
              </Text>
              <Heading as="h2" size="2xl" mb={4}>
                Ficou com alguma dúvida?
              </Heading>
              <Text mb={6}>
                Se mesmo depois de ler as perguntas frequentes ainda tiver
                dúvidas sobre a plataforma ou se precisar de assistência, entre
                em contato conosco.
              </Text>
              <Button
                bg="#017EF4"
                size={buttonSize}
                zIndex="2"
                color={"white"}
                _hover={{ bg: "rgba(1, 126, 244, 0.6)" }}
                onClick={onTalkToUseClick}
              >
                <MdOutgoingMail
                  style={{ marginRight: "5px" }}
                  fontSize={"20px"}
                />
                Fale conosco
              </Button>
            </Box>

            <Box
              maxW={{ base: "100%", md: "45%" }}
              mt={{ base: 8, md: 0 }}
              bg={"rgba(24, 24, 24, 0.5)"}
              zIndex="2"
            >
              <Accordion allowMultiple bg={"rgba(24, 24, 24, 0.5)"}>
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} border="none">
                    <AccordionButton
                      _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                      borderRadius="md"
                      px={4}
                      py={4}
                      bg="rgba(255, 255, 255, 0.1)"
                      color="white"
                      mb={2}
                    >
                      <Box flex="1" textAlign="left">
                        {faq.question}
                      </Box>
                      <FaCirclePlus
                        color="#696969"
                        style={{ marginLeft: "6px" }}
                      />
                    </AccordionButton>
                    <AccordionPanel pb={4} color="gray.300">
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Flex>

          {/* Footer */}
          <Flex
            mt={12}
            mx={{ base: 0, md: 24 }}
            align={"center"}
            justify={"space-between"}
            flexDir={{ base: "column-reverse", md: "row" }}
          >
            <Box position={"relative"}>
              <Image
                src={KoursLogo}
                alt="Kours Logo"
                width={100}
                height={100}
                loading="lazy"
              />
            </Box>

            <Flex
              justify={{ base: "space-between", md: "center" }}
              align="center"
              py={4}
              px={{ base: 2, md: 4 }}
              zIndex="2"
              mt={{ base: 4, md: 8 }}
              mb={{ base: 4, md: 0 }}
              gap={4}
              position={"relative"}
            >
              <Text fontSize="sm" color="white">
                Políticas de cookies
              </Text>
              <Text fontSize="sm" color="white">
                Políticas de privacidade
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    );
  }
);

const faqData = [
  {
    question:
      "O que torna a Kours diferente de outras plataformas de cursos online?",
    answer:
      "A Kours é uma plataforma white-label omnichannel, o que significa que oferecemos a possibilidade de personalizar completamente o ambiente de vendas e consumo de conteúdo digital de acordo com as suas necessidades. Além disso, oferecemos três produtos distintos, cada um projetado para diferentes públicos e modelos de negócios, como criadores de conteúdo, escolas EAD e empresas que oferecem treinamentos internos. Com ferramentas robustas de gerenciamento de conteúdo e uma interface intuitiva, a Kours se destaca por fornecer uma solução prática e escalável para quem deseja vender ou distribuir produtos digitais.",
  },
  {
    question: "Como posso começar a usar a plataforma?",
    answer:
      "É muito simples! Basta acessar a nossa landing page e seguir o processo de self-onboarding, no caso da Área de Membros. Para escolas e empresas interessadas no nosso LMS ou Treinamento Privado, oferecemos um onboarding guiado pela nossa equipe para garantir que todas as configurações sejam feitas de forma eficiente e personalizada.",
  },
  {
    question: "Quais são as opções de pagamento disponíveis?",
    answer:
      "A Kours aceita várias formas de pagamento, incluindo cartões de crédito, débito, boleto e pagamento via Pix (para clientes no Brasil). Dependendo da sua localização, também podem ser oferecidos métodos de pagamento regionais.",
  },
  {
    question: "Qual é a diferença entre a versão gratuita e os planos pagos?",
    answer:
      "A versão gratuita da Kours oferece acesso limitado às funcionalidades principais da plataforma, ideal para iniciantes que querem começar a vender seus conteúdos digitais. Nos planos pagos, você desbloqueia ferramentas avançadas, como relatórios detalhados de desempenho, maior capacidade de armazenamento de conteúdo e funcionalidades extras de personalização e suporte prioritário.",
  },
  {
    question: "Como posso entrar em contato com a equipe de suporte?",
    answer:
      "Para entrar em contato com nossa equipe de suporte, você pode utilizar a área de suporte disponível dentro da plataforma, ou enviar um e-mail diretamente para nosso time. Oferecemos suporte dedicado para todos os clientes, e os usuários de planos pagos também têm acesso a suporte prioritário. Estamos sempre à disposição para ajudar com qualquer dúvida ou problema que possa surgir!",
  },
];

export default FaqSection;
