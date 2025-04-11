"use client";

import Image from "next/image";
import { Hide } from "@chakra-ui/media-query";
import {
  Box,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import { FaCirclePlus } from "react-icons/fa6";

import KoursLogo from "../../../public/svg/kours-white-logo.svg";

const FaqPlans = () => {
  return (
    <Box
      as="section"
      bg="rgb(24,24,24)"
      bgGradient="linear(to top, rgba(24,24,24,0) 0%, rgba(0,0,0,1) 100%)"
      minH="80vh"
      pt={{ base: 12, md: 24 }}
      px={{ base: 4, md: 8 }}
      position="relative"
      overflow="hidden"
      zIndex="1"
    >
      <Hide below="md">
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage="url('/svg/faq-background-image.svg')"
          bgPosition="bottom"
          bgRepeat="repeat-y"
          bgSize="100vw 300px"
          height="full"
          zIndex="0"
        />
      </Hide>

      <Flex
        direction="column"
        maxW="6xl"
        mx="auto"
        color="white"
        gap={10}
        zIndex="2"
        position="relative"
      >
        <Heading as="h2" size="2xl" textAlign="center">
          Perguntas frequentes
        </Heading>

        <Box bg="rgba(24, 24, 24, 0.5)">
          <Accordion allowMultiple>
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
                  <FaCirclePlus color="#696969" style={{ marginLeft: "6px" }} />
                </AccordionButton>
                <AccordionPanel pb={4} color="gray.300">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>

      <Flex
        mt={{ base: 8, md: 12 }}
        mx={{ base: 0, md: 12 }}
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
    </Box>
  );
};

const faqData = [
  {
    question: "Posso testar a plataforma antes de contratar um plano?",
    answer:
      "Sim! Você pode criar sua conta gratuitamente e só escolher um plano quando estiver pronto para vender.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "Os planos variam de acordo com a taxa de transação, funcionalidades avançadas e suporte prioritário. Escolha o que mais faz sentido para o seu momento.",
  },
  {
    question: "Posso migrar de plano depois?",
    answer:
      "Com certeza. Você pode mudar de plano a qualquer momento — seja para escalar ou para adaptar seu negócio.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim. Usamos processadores confiáveis e certificados, com criptografia de ponta a ponta. Seu pagamento e o dos seus alunos estão protegidos.",
  },
  {
    question:
      "Existe suporte disponível para ajudar na configuração do meu plano?",
    answer:
      "Sim. Nossa equipe está pronta para te ajudar via chat, e-mail e tutoriais. E nos planos avançados, o suporte é prioritário.",
  },
];

export default FaqPlans;
