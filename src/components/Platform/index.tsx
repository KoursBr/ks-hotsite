"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Platform({
  onOpenLeadModal,
}: {
  onOpenLeadModal: () => void;
}) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction={isMobile ? "column-reverse" : "row"}
      bg="primary"
      align="stretch"
      justify="space-between"
      // minH={{ base: "auto", md: "75vh" }}
    >
      <Box
        bg="primary"
        color="white"
        px={isMobile ? "4" : "20"}
        py={isMobile ? "4" : "20"}
        flex={1}
        h="full"
        position="relative"
      >
        {!isMobile && (
          <Image
            src="/png/kours-dark-faded-logo.png"
            position="absolute"
            alt="Kours Dark Faded Logo"
            bottom="-3"
            right="0"
            objectFit="cover"
            w="250px"
            h="250px"
            loading="lazy"
          />
        )}
        <Flex
          direction="column"
          justify="center"
          h="full"
          py={{ base: 8, md: 0 }}
        >
          <Heading size="2xl" mb={4}>
            Muito mais que uma plataforma
          </Heading>
          <Text mb={4}>
            Ao se juntar à nossa plataforma, você ganha acesso a um universo de
            possibilidades e vantagens exclusivas.
          </Text>
          <Text mb={8}>
            Você pode criar cursos envolventes, alcançar um público mais amplo e
            expandir seus horizontes. Sua jornada é única, e estamos
            comprometidos em ajudá-lo a alcançar o sucesso que você merece.
          </Text>
          <Button
            bg="dark.100"
            width={"185px"}
            height={"50px"}
            fontSize={"15px"}
            maxW="200px"
            fontWeight={500}
            color="white"
            _hover={{ bg: "gray.500" }}
            onClick={onOpenLeadModal}
          >
            Quero fazer parte
          </Button>
        </Flex>
      </Box>
      <Box flex={1} h="full">
        <Image
          src="/webp/woman-using-laptop.webp"
          alt="Woman using a laptop"
          objectFit="cover"
          w="100%"
          h={{ base: "auto", md: "500px" }}
          loading="lazy"
        />
      </Box>
    </Flex>
  );
}
