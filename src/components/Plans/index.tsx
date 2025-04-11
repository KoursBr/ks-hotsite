"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Tabs,
  TabList,
  Tab,
  Icon,
  createIcon,
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
      "Subdomínio Kours",
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
      "Domínio próprio",
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
      "Domínio próprio",
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
      "Domínio próprio",
    ],
    buttonLabel: "Comece no Expert",
  },
];

const formatCurrencyToBrl = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export default function PlansSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (price: number) => {
    const priceWithYearly = isAnnual ? price * 10 : price;
    const formattedPrice = formatCurrencyToBrl(priceWithYearly);
    return formattedPrice;
  };

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
      <Flex
        direction="column"
        maxW="7xl"
        mx="auto"
        textAlign="center"
        mb={{ base: 8, md: 16 }}
      >
        <Text mb={4} color="#62B0F9" fontWeight={600}>
          Preços e planos
        </Text>
        <Heading as="h2" size="3xl" mb={4}>
          Planeje sua jornada
        </Heading>
        <Text maxW="3xl" mx="auto" color="#FFFFFF80" fontSize="lg">
          Opções de assinatura adaptadas aos seus objetivos e necessidades.
        </Text>

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          mt={8}
        >
          <Text
            position={"relative"}
            textTransform="uppercase"
            bg={"#017ef4"}
            px={2}
            py={1}
            color={"white"}
            fontSize="xs"
            fontWeight="600"
            rounded="md"
            mb={3}
          >
            2 meses grátis com o plano anual
            <Icon
              as={Arrow}
              color={"#017ef4"}
              w={71}
              position={"absolute"}
              right={-10}
              top={"27px"}
              transform={"rotate(300deg)"}
            />
          </Text>
          <Flex>
            <Tabs
              variant="unstyled"
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
        </Flex>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={10}
        maxW="7xl"
        mx="auto"
      >
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
              top={{ base: 0, md: isPro ? "-16px" : "0" }}
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
                  bg={isPro ? "#017ef4" : "#555555"}
                  color="white"
                  _hover={{ opacity: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      `https://admin.kours.com.br/register?plan=${plan.title}`,
                      "_blank"
                    );
                  }}
                >
                  {plan.buttonLabel}
                </Button>

                <Box borderBottom="1px solid rgba(255, 255, 255, 0.1)" mb={4} />

                <VStack spacing={3} align="start" mb={6}>
                  {plan.features.map((feature, idx) => (
                    <Flex key={idx} align="center">
                      <FaCircleCheck
                        style={{ marginRight: "8px" }}
                        color="#555555"
                      />
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

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
