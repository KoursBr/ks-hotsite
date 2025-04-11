"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

export default function StartFree({
  onSeePlanClick,
}: {
  onSeePlanClick: () => void;
}) {
  return (
    <Box
      bg="primary"
      py={8}
      bgImage="url('/png/bg-start.png')"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box textAlign="center" fontWeight={500} py="4rem">
        <Heading color="white" fontSize="5xl">
          Para começar, é grátis.{" "}
        </Heading>
        <Text color="gray.100" fontWeight={400} letterSpacing={1}>
          {" "}
          Inscreva-se e dê o primeiro passo para o seu crescimento online.
        </Text>
      </Box>
      <Flex justifyContent="center" alignItems="center" h="100%">
        <Button
          mx="2"
          bg="primary"
          color="white"
          variant="outline"
          _hover={{ bg: "#1961a4" }}
          onClick={onSeePlanClick}
        >
          Ver planos
        </Button>
        <Button
          mx="2"
          bg="black"
          color="white"
          variant="solid"
          rightIcon={<FaArrowRight />}
          _hover={{ bg: "gray.500" }}
          onClick={() => {
            window.open("https://admin.kours.com.br/register", "_blank");
          }}
        >
          Comece agora
        </Button>
      </Flex>
    </Box>
  );
}
