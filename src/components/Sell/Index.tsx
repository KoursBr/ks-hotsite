'use client'

import { Box, Image, Flex, Heading, useBreakpointValue, Text, Button } from "@chakra-ui/react";
const manCamera = '/man-camera.svg';
const handComputer = '/hand-computer.svg';

const cards = [
  {
    id: 1,
    image: manCamera,
    title: "Cursos online",
    text: "Crie cursos de forma fácil e intuitiva. Ensine o que você sabe, sem necessidade de habilidades técnicas."
  },
  {
    id: 2,
    image: handComputer,
    title: "Downloads digitais",
    text: "Conecte-se com o seu público oferecendo conteúdo digital rápido, acessível e conveniente."
  },
]

export default function Sell() {
  const flexDir = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box bg="#F4F8FF">
      <Box textAlign="center" fontWeight={600} py="4rem">
        <Heading color="gray.500" fontSize="5xl">Como posso vender?</Heading>
        <Text color="gray.300" fontWeight={500}>Você define o caminho! Oferecemos duas opções para que o seu objetivo seja alcançado.</Text>
      </Box>
      <Flex
        direction={flexDir}
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap="4"
      >
        {cards.map((card, id) => {
          return (
            <Box key={id} p='4'>
              <Box boxShadow='md' borderRadius='lg' overflow='hidden' maxW={{ base: '80vw', sm: '45vw', md: '30vw', lg: '30vw' }}>
                <Image src={card.image} alt="Man with camera" />
                <Box p="1rem">
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {card.title}
                  </Box>
                  <Box>
                    <Box as='span' color='gray.600' fontSize='sm'>
                      {card.text}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Flex>
      <Flex justifyContent="center" alignItems="center" h={{ base: "50vw", md: "10vw" }} position="relative">
        <Button colorScheme="blue" my={6}>Teste grátis</Button>
        <Image
            src="/bars.png"
            position="absolute"
            alt="Dark Logo"
            top="2"
            left={{ base: '0', md: '150px' }}
            objectFit="cover"
            w="290px"
            h="30px"
          />
      </Flex>
    </Box>
  )
}