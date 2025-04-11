"use client";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Button,
  useBreakpointValue,
  Image,
  Icon,
  Divider,
  Hide,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { PiUserCircleFill } from "react-icons/pi";

const Links = [
  "Porque a Kours?",
  "Apresentação",
  "Como funciona?",
  "Preços e planos",
  "Perguntas frequentes",
];

const Navbar = ({ onItemClick }: { onItemClick: (item: string) => void }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction={"column"} alignItems="center" p="2rem" w="full">
      <Box
        bg="gray.600"
        color="white"
        px={4}
        borderRadius={8}
        w={{ base: "full", md: "auto" }}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={{ base: "row-reverse", md: "row" }}
          w={{ base: "full", md: "auto" }}
        >
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon color={"white"} fontSize={"12px"} />
              ) : (
                <HamburgerIcon color={"white"} fontSize={"20px"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant={"unstyled"}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box onClick={() => onItemClick("Home")} cursor="pointer">
              <Image
                src="/svg/kours-white-logo.svg"
                alt="Logo"
                w={"100%"}
                h={"100%"}
                loading="lazy"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={2}
              m="0 10rem"
              fontSize={"sm"}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link
                  key={link}
                  px={4}
                  py={3}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.500",
                    fontSize: "sm",
                  }}
                  onClick={() => onItemClick(link)}
                >
                  {link}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Hide below="md">
            <Divider
              orientation="vertical"
              mr={3}
              height={"50px"}
              borderColor={"rgba(134, 134, 134, 0.3)"}
            />
          </Hide>
          <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <Button
              leftIcon={<Icon as={PiUserCircleFill} boxSize={6} />}
              variant="solid"
              color="white"
              size="md"
              fontWeight={600}
              _hover={{ bg: "gray.500" }}
              bg="transparent"
              px={4}
              onClick={() =>
                window.open("https://admin.kours.com.br", "_blank")
              }
            >
              Login
            </Button>
          </Flex>
        </Flex>

        {isMobile && isOpen ? (
          <Box pb={4} display={{ md: "none" }} w="full">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link}
                  px={3}
                  py={2}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "teal.700",
                  }}
                  onClick={() => {
                    onClose();
                    onItemClick(link);
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Flex>
  );
};

export default Navbar;
