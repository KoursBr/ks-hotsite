"use client";

import {
  Flex,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { BiSolidWidget } from "react-icons/bi";
import { MdUpdate, MdDevices } from "react-icons/md";

const benefits = [
  {
    icon: BiSolidWidget,
    title: "Ambiente intuitivo e fácil de usar",
    text: "Nossa plataforma é totalmente projetada para atender às suas necessidades de forma simples e sem complicações.",
  },
  {
    icon: MdUpdate,
    title: "Altamente adaptável às demandas do mercado",
    text: "Estamos constantemente evoluindo para atender às mudanças do mercado digital, garantindo que você tenha acesso às mais recentes e eficazes ferramentas.",
  },
  {
    icon: MdDevices,
    title: "Acesso de qualquer lugar",
    text: "Acesse a plataforma a partir de qualquer lugar, seja na versão web ou mobile, para total flexibilidade e conveniência.  Tornando assim o seu caminho para o sucesso digital o mais suave possível.",
  },
];

const Features = forwardRef((props, forwardRef: any) => {
  const headingFontSize = useBreakpointValue({ base: "32px", md: "54px" });

  return (
    <Box bg="#F4F8FF" ref={forwardRef}>
      <Box py={8} px={8} maxW="7xl" mx="auto">
        <Box
          textAlign={{ base: "left", md: "center" }}
          fontWeight={600}
          my="4rem"
        >
          <Text color="primary" fontSize="sm">
            Porque a Kours?
          </Text>
          <Heading color="gray.500" fontSize={headingFontSize} py={2}>
            Vantagens de fazer parte da Kours
          </Heading>
          <Text color="gray.300" fontWeight={400}>
            Potencialize seu negócio digital.
          </Text>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          p={{ base: "10px", md: "2rem" }}
          border="1px solid #e6e6e6"
          borderRadius="10px"
        >
          {benefits.map((benefits, index) => (
            <Box
              key={index}
              p={6}
              rounded="md"
              bg={"white"}
              shadow={"md"}
              cursor="text"
            >
              <Flex direction="column" h="full">
                <Icon as={benefits.icon} w={10} h={10} mb={4} color="primary" />
                <Heading
                  fontSize={{ base: "16px", md: "20px" }}
                  mb={2}
                  color="gray.600"
                >
                  {benefits.title}
                </Heading>
                <Text color="gray.500">{benefits.text}</Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
});

export default Features;
