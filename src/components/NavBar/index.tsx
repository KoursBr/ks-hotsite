'use client'
import React from 'react';
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
  Icon
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { PiUserCircleFill } from "react-icons/pi";

const Links = ['Porque a Kours?', 'Como funciona?', 'Feedback', 'Preços e planos', 'Perguntas frequentes'];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      alignItems="center"
      p="2rem"
      w="full"
    >
      <Box bg="gray.600" color="white" px={4} borderRadius={8}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: "flex", md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} >
            <Box><Image src='/white-logo.svg' alt='Logo' /></Box>
            <HStack
              as={'nav'}
              spacing={2}
              m="0 10rem"
              fontSize={'sm'}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link key={link} px={4} py={3} rounded={'md'} _hover={{
                  textDecoration: 'none',
                  bg: 'gray.500',
                  fontSize: 'sm'
                }}>
                  {link}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }} borderLeft="1px solid #868686">
            <Button
              leftIcon={<Icon as={PiUserCircleFill} boxSize={6} />}
              variant="solid"
              color="white"
              size="md"
              fontWeight={600}
              _hover={{ bg: 'gray.500' }}
              bg="transparent"
              px={4}
            >
              Login
            </Button>
          </Flex>
        </Flex>

        {isMobile && isOpen ? (
          <Box pb={4} display={{ md: 'none' }} w="full">
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} px={3} py={2} rounded={'md'} _hover={{
                  textDecoration: 'none',
                  bg: 'teal.700',
                }}>
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
