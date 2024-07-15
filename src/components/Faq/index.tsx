"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaRegCommentDots } from "react-icons/fa";

export default function Faq() {
  return (
    <Box
      // bg="rgba(0, 0, 0, 0.5)"
      // color="white"
      py={8}
      px={4}
      bgImage="url('/bg-faq.svg'), linear-gradient(rgba(24, 24, 24, 24, 1), rgba(0, 0, 0, 0))"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        maxW="1200px"
        mx="auto"
      >
        <Box flex="1" mr={8}>
          <Text color="blue.300" fontWeight="bold" mb={2}>
            Perguntas frequentes
          </Text>
          <Heading fontSize="4xl" mb={4}>
            Ficou com alguma dúvida?
          </Heading>
          <Text fontSize="lg" mb={8}>
            Se mesmo depois de ler as perguntas frequentes ainda tiver dúvidas
            sobre a plataforma ou se precisar de assistência, entre em contato
            conosco. A nossa equipe de suporte está pronta para fornecer as
            informações que você precisa e auxiliá-lo em sua jornada com a
            Kours.
          </Text>
          <Button
            leftIcon={<FaRegCommentDots />}
            colorScheme="blue"
            variant="solid"
            size="lg"
          >
            Fale conosco
          </Button>
        </Box>

        <VStack flex="1" spacing={4} align="stretch">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    O que torna a Kours diferente de outras plataformas de
                    cursos online?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A Kours oferece uma combinação única de conteúdo de alta
                qualidade, suporte ao aluno e recursos interativos que tornam o
                aprendizado mais eficaz e envolvente.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Como posso começar a usar a plataforma?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Para começar, basta se inscrever em nossa plataforma, escolher o
                curso desejado e começar a aprender imediatamente.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Quais são as opções de pagamento disponíveis?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Oferecemos várias opções de pagamento, incluindo cartões de
                crédito, débito e PayPal, para tornar o processo de inscrição o
                mais conveniente possível.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Qual é a diferença entre a versão gratuita e os planos
                    pagos?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A versão gratuita oferece acesso limitado a determinados cursos
                e recursos, enquanto os planos pagos proporcionam acesso total a
                todos os cursos, certificados e suporte prioritário.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Como posso entrar em contato com a equipe de suporte?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Você pode entrar em contato com a nossa equipe de suporte
                através do botão "Fale conosco" ou enviando um e-mail para
                suporte@kours.com.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Flex>
    </Box>
  );
}
