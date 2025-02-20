import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  AspectRatio,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const DemoVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const headingFontSize = useBreakpointValue({ base: "32px", md: "54px" });

  return (
    <Container maxW="4xl" p={4} centerContent>
      <Box
        textAlign={{ base: "left", md: "center" }}
        fontWeight={600}
        my="2rem"
      >
        <Text color="primary" fontSize="sm">
          Demonstração
        </Text>
        <Heading color="gray.500" fontSize={headingFontSize} py={2}>
          Apresentando a Kours
        </Heading>
        <Text color="gray.300" fontWeight={400}>
          Descubra como podemos ajudar você a alcançar seus objetivos.
        </Text>
      </Box>
      <Box w="full" overflow="hidden" borderRadius="2xl" mb={{ lg: 20 }}>
        <AspectRatio
          ratio={16 / 9}
          bgGradient="linear(to-tr, #0f406f, #181818)"
          cursor="pointer"
          onClick={() => setPlayVideo(!playVideo)}
        >
          {playVideo ? (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tzXzEZTU-oA"
              title="Intro video for Kours"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <Center position="absolute" inset={0}>
              <Button
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _focus={{ outline: "none" }}
                onClick={() => setPlayVideo(true)}
                w={{ base: 16, lg: 28 }}
                h={{ base: 16, lg: 28 }}
                p={0}
              >
                <Icon
                  as={FaPlay}
                  w={{ base: 16, lg: 28 }}
                  h={{ base: 16, lg: 28 }}
                  color="white"
                />
              </Button>
            </Center>
          )}
        </AspectRatio>
      </Box>
    </Container>
  );
};

export default DemoVideo;
