"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  SimpleGrid,
  VStack,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const basePlans = [
  {
    title: "Plano Grátis",
    price: 0,
    description: "Acesso gratuito para começar a criar seus cursos e e-books.",
    features: [
      "12,5% de taxa de transação",
      "1 curso",
      "1 arquivo digital",
      "1 usuário administrador",
      "Subdomínio Kours"
    ],
    buttonLabel: "Teste grátis",
    isFree: true,
  },
  {
    title: "Plano Starter",
    price: 99,
    description: "Ideal para criadores que estão começando a vender online.",
    features: [
      "8,5% de taxa de transação",
      "3 cursos",
      "5 arquivos digitais",
      "5 usuários administradores",
      "Domínio próprio"
    ],
    buttonLabel: "Comece no Starter",
  },
  {
    title: "Plano Pro",
    price: 299,
    description: "Recursos avançados para expandir seu negócio.",
    features: [
      "6% de taxa de transação",
      "10 cursos",
      "Arquivos digitais ilimitados",
      "10 usuários administradores",
      "Domínio próprio"
    ],
    buttonLabel: "Comece no Pro",
  },
  {
    title: "Plano Expert",
    price: 599,
    description: "Tudo que você precisa para escalar com total liberdade.",
    features: [
      "4,5% de taxa de transação",
      "Cursos ilimitados",
      "Arquivos digitais ilimitados",
      "Usuários administradores ilimitados",
      "Domínio próprio"
    ],
    buttonLabel: "Comece no Expert",
  },
];

export default function PlansSection() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (price: number) =>
    isAnnual ? `R$ ${price * 10},00` : `R$ ${price},00`;

  const highlightStyle = {
    borderColor: "#62B0F9",
    boxShadow: "0 0 20px rgba(98, 176, 249, 0.3)",
    transform: "scale(1.02)",
  };

  return (
    <Box
      as="section"
      id="planos"
      bg="rgb(24,24,24)"
      minH="100vh"
      color="white"
      px={{ base: 4, md: 8 }}
      pt={{ base: 20, md: 28 }}
      pb={24}
    >
      <Flex direction="column" maxW="7xl" mx="auto" textAlign="center" mb={16}>
        <Text mb={4} color="#62B0F9" fontWeight={600}>
          Preços e planos
        </Text>
        <Heading as="h2" size="3xl" mb={4}>
          Planeje sua jornada
        </Heading>
        <Text maxW="3xl" mx="auto" color="#FFFFFF80" fontSize="lg">
          Opções de assinatura adaptadas aos seus objetivos e necessidades.
        </Text>

        <Tabs
          variant="unstyled"
          mt={6}
          alignSelf="flex-end"
          onChange={(index) => setIsAnnual(index === 1)}
        >
          <TabList
            bg="#242424"
            p="4px"
            borderRadius="md"
            display="inline-flex"
            gap="2px"
          >
            {["Mensal", "Anual"].map((label, i) => (
              <Tab
                key={label}
                px={6}
                py={1.5}
                borderRadius="md"
                fontWeight="medium"
                fontSize="sm"
                color={isAnnual === (i === 1) ? "white" : "#7c7c7c"}
                bg={isAnnual === (i === 1) ? "#313131" : "transparent"}
                _selected={{}}
                _hover={{ bg: "rgba(255,255,255,0.05)" }}
              >
                {label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} maxW="7xl" mx="auto">
        {basePlans.map((plan, index) => {
          const isPro = plan.title === "Plano Pro";

          return (
            <Flex
              key={index}
              direction="column"
              bg="rgba(255, 255, 255, 0.05)"
              borderRadius="2xl"
              border="1px solid rgba(255, 255, 255, 0.1)"
              p={8}
              cursor="default"
              transition="all 0.3s ease"
              {...(isPro ? highlightStyle : {})}
              position="relative"
              top={isPro ? "-16px" : "0"} // ✅ Apenas sobe visualmente
            >
              {isPro && (
                <Box
                  position="absolute"
                  top="-16px"
                  left="50%"
                  transform="translateX(-50%)"
                  bg="#017ef4"
                  color="white"
                  fontSize="xs"
                  fontWeight="bold"
                  px={4}
                  py={2}
                  borderRadius="full"
                >
                  🔥 MAIS POPULAR
                </Box>
              )}

              <Box>
                <Heading size="md" mb={2} color="#FFFFFFB3">
                  {plan.title}
                </Heading>

                <Text fontSize="3xl" fontWeight="bold" mb={4}>
                  {getPrice(plan.price)}
                </Text>

                <Text mb={4} color="gray.300" fontSize="sm" height={12}>
                  {plan.description}
                </Text>

                <Button
                  mt={4}
                  mb={6}
                  width="full"
                  fontSize="sm"
                  fontWeight="semibold"
                  bg={isPro ? "#017ef4" : "#555555"} // ✅ Apenas Plano Pro tem botão azul
                  color="white"
                  _hover={{ opacity: 0.9 }}
                  // ✅ Botão não faz mais nada (sem seleção)
                  onClick={(e) => e.stopPropagation()}
                >
                  {plan.buttonLabel}
                </Button>

                <Box borderBottom="1px solid rgba(255, 255, 255, 0.1)" mb={4} />

                <VStack spacing={3} align="start" mb={6}>
                  {plan.features.map((feature, idx) => (
                    <Flex key={idx} align="center">
                      <FaCircleCheck style={{ marginRight: "8px" }} color="#555555" />
                      <Text fontSize="sm">{feature}</Text>
                    </Flex>
                  ))}
                </VStack>
              </Box>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
