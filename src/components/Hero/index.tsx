"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { EmailIcon } from "@chakra-ui/icons";

import Navbar from "../NavBar";
import { MdEmail } from "react-icons/md";

const heroImage = "/frame-hero.png";

export default function Hero() {
  const headingFontSize = useBreakpointValue({ base: "46px", md: "72px" });
  const textFontSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <main>
      <Box
        height="100%"
        bg="radial-gradient(circle at bottom, #123352, #123352 10%, #0f406f 40%, #181818 60%, #181818)"
        position="relative"
        _before={{
          base: {},
          md: {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "500px 500px",
            zIndex: 1,
          },
        }}
      >
        <Flex direction="column" h="100%" position="relative" zIndex={2}>
          <Navbar />
          <Container maxW="7xl" p={4}>
            <Stack
              direction="column"
              spacing={6}
              alignItems="center"
              mt={{ base: 4, md: 8 }}
              mb={{ base: 8, md: 16 }}
            >
              <Heading
                as="h1"
                fontSize={headingFontSize}
                fontWeight="600"
                textAlign="center"
                color="white"
              >
                Transforme seu conhecimento <br /> em{" "}
                <span style={{ color: "#017EF4" }}>sucesso digital</span>
              </Heading>
              <Text fontSize={textFontSize} textAlign="center" color="gray.400">
                Crie, compartilhe e monetize seu conhecimento com cursos e
                e-books online.
              </Text>
              <Box p="1rem" w="full" maxW="xl" bg="#28394b" borderRadius="8">
                <Stack
                  direction={useBreakpointValue({ base: "column", md: "row" })}
                  spacing={4}
                  align="stretch"
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="lg"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      children={<MdEmail color="#B5B5B5" />}
                    />
                    <Input
                      backgroundColor="white"
                      size="lg"
                      _placeholder={{ color: "#8A8787", fontSize: "0.9rem" }}
                      type="email"
                      placeholder="Insira o seu e-mail"
                      borderRadius="8"
                      border="none"
                    />
                  </InputGroup>
                  <Button
                    backgroundColor="#017EF4"
                    size="lg"
                    color="white"
                    fontSize="0.9rem"
                    _hover={{ backgroundColor: "#0a60b0" }}
                    borderRadius="8"
                  >
                    Comece grátis
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Container>
          <Flex justifyContent="center" alignItems="center">
            <Box overflow="hidden" lineHeight="0" px={1}>
              <NextImage
                src={heroImage}
                alt="Descrição da imagem"
                width={1000}
                height={768}
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
}
