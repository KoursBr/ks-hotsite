"use client";

import { Box, Image, Flex, Heading, Text, Button } from "@chakra-ui/react";

import KoursCircleLogoWhite from "../../../public/svg/kours-circle-blue-logo.svg";

const manCamera = "/webp/man-camera.webp";
const handComputer = "/webp/hand-computer.webp";

const cards = [
  {
    id: 1,
    image: manCamera,
    title: "Cursos online",
    text: "Crie cursos de forma fácil e intuitiva. Ensine o que você sabe, sem necessidade de habilidades técnicas.",
  },
  {
    id: 2,
    image: handComputer,
    title: "Downloads digitais",
    text: "Conecte-se com o seu público oferecendo conteúdo digital rápido, acessível e conveniente.",
  },
];

export default function Sell({
  onOpenLeadModal,
}: {
  onOpenLeadModal: () => void;
}) {
  return (
    <Box bg="#F4F8FF" py={8} px={8} position={"relative"}>
      <Box
        position={"absolute"}
        top={"-60px"}
        right={"10%"}
        w={{ base: 100, md: 140 }}
        h={{ base: 100, md: 140 }}
      >
        <Image src={KoursCircleLogoWhite.src} alt="Kours white logo with blue circle" />
      </Box>
      <Box
        textAlign={{ base: "left", md: "center" }}
        fontWeight={600}
        py={{ base: "2rem", md: "4rem" }}
      >
        <Heading color="gray.500" fontSize={{ base: "3xl", md: "5xl" }} mb={2}>
          Como posso vender?
        </Heading>
        <Text color="gray.300" fontWeight={400}>
          Você define o caminho! Oferecemos duas opções para que o seu objetivo
          seja alcançado.
        </Text>
      </Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap="4"
      >
        {cards.map((card, id) => {
          return (
            <Box key={id} p="4">
              <Box
                boxShadow="md"
                borderRadius="lg"
                overflow="hidden"
                maxW={{ base: "80vw", sm: "45vw", md: "30vw", lg: "30vw" }}
              >
                <Image
                  src={card.image}
                  alt="Man with camera image"
                  width={"100%"}
                  height={"100%"}
                  loading="lazy"
                />
                <Box p="1rem">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {card.title}
                  </Box>
                  <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                      {card.text}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>
      <Flex
        justifyContent="center"
        alignItems={{ base: "left", md: "center" }}
        position="relative"
      >
        <Button
          bg="#017EF4"
          onClick={onOpenLeadModal}
          color={"white"}
          mb={6}
          mt={8}
          width={"185px"}
        >
          Teste grátis
        </Button>
      </Flex>
    </Box>
  );
}
