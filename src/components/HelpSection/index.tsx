"use client";

import { Box, Heading, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { MdOutgoingMail } from "react-icons/md";

const HelpSection = ({
  onTalkToUseClick,
}: {
  onTalkToUseClick: () => void;
}) => {
  return (
    <Box
      as="section"
      bg="#017df4"
      bgImage="url('/png/bg-start.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
      color="white"
    >
      <Flex direction="column" align="center" gap={6} maxW="4xl" mx="auto">
        <Heading fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold">
          Precisa de ajuda para escolher o melhor plano para você?
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="whiteAlpha.800"
          maxW="80%"
        >
          Nós te ajudamos! Nossa equipe de suporte está à disposição para
          responder a todas as suas perguntas e oferecer orientações
          personalizadas.
        </Text>

        <Button
          leftIcon={<Icon as={MdOutgoingMail} />}
          colorScheme="blackAlpha"
          bg="black"
          color="white"
          size="lg"
          _hover={{ bg: "white", color: "#000" }}
          onClick={onTalkToUseClick}
        >
          Fale conosco
        </Button>
      </Flex>
    </Box>
  );
};

export default HelpSection;
