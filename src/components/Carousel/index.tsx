"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Divider,
  StackDivider,
  VStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <Box w="full" px="10rem" bg="dark.100">
      <Box position="relative" className="carousel-container" w="full">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex alignItems="center" justifyContent="center" h="full">
              <Box flex="1">
                <Image
                  src="https://via.placeholder.com/150"
                  w={"100%"}
                  h={"100%"}
                  alt="Placeholder Image"
                  loading="lazy"
                />
              </Box>
              <Box flex="2">
                <Text fontSize="xl">Texto ao lado da imagem</Text>
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex alignItems="center" justifyContent="center" h="full">
              <Box flex="1">
                <Image
                  src="\webp\man-posing.webp"
                  alt="Male posing for picture on a transparent background"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </Box>
              <Box flex="2">
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                  align="stretch"
                >
                  <Box
                    textAlign="left"
                    fontWeight={600}
                    px={{ base: "1rem", md: "3rem" }}
                    py="1rem"
                  >
                    <Text
                      color="primary"
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    >
                      Feedback
                    </Text>
                    <Heading
                      color="white"
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    >
                      Histórias de sucesso
                    </Heading>
                    <Text color="gray.300" fontWeight={500}>
                      O sucesso dos nossos clientes fala por si mesmo.
                    </Text>
                  </Box>
                  <Box px={{ base: "1rem", md: "3rem" }}>
                    <Box
                      bg="#303030"
                      borderRadius="lg"
                      padding={{ base: "1rem", md: "2rem" }}
                    >
                      <Text
                        as="i"
                        color="white"
                        fontSize={{ base: "sm", md: "md", lg: "lg" }}
                        fontWeight="400"
                      >
                        Como criador de conteúdo, a Kours me deu as ferramentas
                        de que eu precisava para criar cursos de alta qualidade.
                        <br />
                        <br />
                        Além disso, as ferramentas de análise me ajudam a
                        entender o que funciona e o que não funciona para o meu
                        negócio. Tem sido realmente incrível.
                      </Text>
                      <Box
                        textTransform="uppercase"
                        fontSize={{ base: "xs", md: "sm", lg: "md" }}
                        color="white"
                        borderLeft="2px solid #007ef4"
                        pl={{ base: "0.5rem", md: "1rem" }}
                        mt="3rem"
                      >
                        <b>Diogo Meirelles,</b> criador de conteúdo
                      </Box>
                      <Box display="flex" justifyContent="start" mt="2">
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <Icon
                              as={FaStar}
                              key={i}
                              color={"#FED74E"}
                              mx={1}
                            />
                          ))}
                      </Box>
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </SwiperSlide>
        </Swiper>
        <Box>
          <Button
            className="swiper-button-prev-custom"
            left="0"
            bottom="-40px"
            position="absolute"
          >
            <FiArrowLeft />
          </Button>
          <Divider />
          <Button
            className="swiper-button-next-custom"
            left="10"
            bottom="-40px"
            position="absolute"
          >
            <FiArrowRight />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
