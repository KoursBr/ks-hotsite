"use client";
import {
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Icon,
  Skeleton,
  Box,
} from "@chakra-ui/react";

import { TfiStatsUp } from "react-icons/tfi";
import { MdOutlineTextFields } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const resultsFirst = "/results-first.svg";
const resultsSecond = "/results-second.svg";
const resultsThird = "/results-third.svg";

const results = [
  {
    image: resultsFirst,
    icon: TfiStatsUp,
    title: "Tome decisões baseada em dados",
    text: "Acesse ferramentas avançadas de análise para tomar decisões informadas e otimizar o desempenho.",
  },
  {
    image: resultsSecond,
    icon: MdOutlineTextFields,
    title: "Destaque-se com uma identidade de marca única",
    text: "Personalize completamente seu ambiente de vendas e fortaleça o reconhecimento da sua marca entre os alunos.",
  },
  {
    image: resultsThird,
    icon: IoMdSettings,
    title: "Gerencie tudo em um único lugar",
    text: "Simplifique suas operações com uma plataforma que centraliza o gerenciamento de conteúdo, alunos e dados.",
  },
];

export default function Results() {
  return (
    <Box bg="dark.100" overflowX="hidden" py={8} px={8}>
      <Box
        textAlign={{ base: "left", md: "center" }}
        fontWeight={600}
        py="2rem"
        mt={{ base: 8, md: 12}}
      >
        <Text color="primary" fontSize={{ base: "md", md: "sm" }}>
          Como funciona?
        </Text>
        <Heading color="white" fontSize={{ base: "4xl", md: "6xl" }} py={2}>
          Maximizando seus resultados
        </Heading>
        <Text color="gray.300" fontWeight={500}>
          Uma visão interna das ferramentas e funcionalidades que impulsionam o
          seu negócio.
        </Text>
      </Box>

      <Container maxW="7xl" px={{ base: 2, md: 6 }} py={10}>
        {results.map((result, index) => {
          const isSecond = index === 1;
          return (
            <Stack
              key={index}
              direction={{
                base: "column-reverse",
                md: isSecond ? "row" : "row-reverse",
              }}
              mb="4rem"
              position="relative"
            >
              <Box
                h="400px"
                w="500px"
                bg={[
                  "radial-gradient(circle, #123352 15%, #123352 15%, #123352 0%, #181818 65%, #181818)",
                ]}
                position="absolute"
                {...(isSecond ? { right: "-250px" } : { left: "-250px" })}
                bottom="-100px"
                zIndex="0"
              />
              <Stack
                direction="column"
                justifyContent="center"
                spacing={2}
                mt="1rem"
                px={{base: '0', md: "2rem"}}
                zIndex="1"
              >
                <Icon
                  as={result.icon}
                  w={12}
                  h={12}
                  color="blue.500"
                  padding="8px"
                  background="#252525"
                  borderRadius="5px"
                  border="1px solid #4d4d4d"
                />
                <Heading as="h2" size="lg" mb={2} color="white" maxW={'480px'}>
                  {result.title}
                </Heading>
                <Text color="white" maxW={'480px'}>{result.text}</Text>
              </Stack>
              <Box ml={{ base: 0, md: 5 }} zIndex="1">
                <Image
                  w="100%"
                  h="100%"
                  minW={{ base: "auto", md: "30rem" }}
                  objectFit="cover"
                  src={result.image}
                  rounded="md"
                  fallback={<Skeleton />}
                />
              </Box>
            </Stack>
          );
        })}
      </Container>
    </Box>
  );
}
