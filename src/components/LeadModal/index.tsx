"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Text,
  VStack,
  Image,
  Input,
} from "@chakra-ui/react";

import { sendGAEvent } from "@next/third-parties/google";

interface RegisterModalProps {
  showModal: boolean;
  onClose: () => void;
  prevEmail?: string;
}

const RegisterModal = React.forwardRef(
  (props: RegisterModalProps, forwardRef) => {
    const { showModal, onClose, prevEmail } = props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState(prevEmail || "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const toast = useToast();

    const validate = () => {
      const newErrors: typeof errors = {};
      if (!name.trim()) newErrors.name = "Nome é obrigatório.";

      if (!email.trim()) {
        newErrors.email = "Email é obrigatório.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Email inválido.";
      }
      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
      if (!validate()) return;

      const dto = { name, email };

      setIsSubmitting(true);

      sendGAEvent("event", "conversion", {
        send_to: "AW-16764643531/08cvCNytq-UZEMvRgLo-",
        email,
        name,
      });

      try {
        const response = await fetch(
          "https://run.relay.app/api/v1/playbook/cm92uq7yj0bmp0plyau1e3s96/trigger/og-s1U18mfR7P9poiFsXsw",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(dto),
          }
        );

        if (response.ok) {
          const url = `https://admin.kours.com.br/register?nome=${encodeURIComponent(
            name
          )}&email=${encodeURIComponent(email)}`;

          window.open(url, "_blank");

          onClose();
        } else {
          toast({
            status: "error",
            title: "Erro ao enviar dados.",
            description: "Tente novamente em alguns instantes.",
            position: "top-right",
          });
        }
      } catch (error) {
        toast({
          status: "error",
          title: "Erro ao enviar dados.",
          description: "Tente novamente em alguns instantes.",
          position: "top-right",
        });
      }

      setIsSubmitting(false);
    };

    useEffect(() => {
      if (props.prevEmail) setEmail(props.prevEmail);
    }, [props.prevEmail]);

    useEffect(() => {
      return () => {
        setName("");
        setEmail("");
      };
    }, []);

    return (
      <Modal
        isOpen={showModal}
        onClose={onClose}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex alignItems="center" gap={3}>
              <Image
                src="/svg/kours-logo-black.svg"
                alt="Kours logo icon"
                w="90px"
                h="100%"
                loading="lazy"
                title="Kours logo icon"
              />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Box mt={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Faça parte da Kours
              </Text>
              <Text mt={2} color="gray.600">
                Inscreva-se para experimentar a plataforma.
              </Text>
            </Box>

            <VStack spacing={4} mt={6}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Nome</FormLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="João Pedro"
                  _placeholder={{ color: "gray.400" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="joao.pedro@email.com"
                  _placeholder={{ color: "gray.400" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
            </VStack>

            <Button
              mt={6}
              w="full"
              color="white"
              bg="#017EF4"
              isLoading={isSubmitting}
              onClick={handleSubmit}
              isDisabled={isSubmitting}
            >
              Começar agora
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);

export default RegisterModal;
