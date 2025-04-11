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
          onClick={() => setPlayVideo(true)}
          cursor="pointer"
        >
          {playVideo ? (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tzXzEZTU-oA?rel=0&modestbranding=1&autoplay=1"
              title="Vídeo de demonstração da Kours"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ borderRadius: "16px" }}
            ></iframe>
          ) : (
            <Center>
              <Button
                aria-label="Assistir vídeo de demonstração"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setPlayVideo(true);
                }}
                p={0}
                w={{ base: 16, lg: 28 }}
                h={{ base: 16, lg: 28 }}
              >
                <Icon
                  as={FaPlay}
                  w="100%"
                  h="100%"
                  color="white"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.1)" }}
                  title="Play"
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
