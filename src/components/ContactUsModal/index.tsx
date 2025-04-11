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
  Textarea,
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

interface ContactModalProps {
  showModal: boolean;
  onClose: () => void;
  prevEmail?: string;
}

const ContactModal = React.forwardRef(
  (props: ContactModalProps, forwardRef) => {
    const { showModal, onClose, prevEmail } = props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState(prevEmail || "");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{
      name?: string;
      email?: string;
      message?: string;
    }>({});

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

      const dto = { name, email, message };

      setIsSubmitting(true);

      try {
        const response = await fetch(
          "https://run.relay.app/api/v1/playbook/cm9d154xl0cgf0qm54s4q2sj6/trigger/7DFHQPGjrqFnDKXV3kPJ7w",
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
          toast({
            status: "success",
            title: "Mensagem enviada com sucesso.",
            description: "Nosso time entrará em contato o mais breve possível.",
            position: "top-right",
          });

          onClose();
        } else {
          toast({
            status: "error",
            title: "Erro ao enviar mensagem.",
            description: "Tente novamente em alguns instantes.",
            position: "top-right",
          });
        }
      } catch (error) {
        toast({
          status: "error",
          title: "Erro ao enviar mensagem.",
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
        setMessage("");
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
                Fale com a gente
              </Text>
              <Text mt={2} color="gray.600">
                Deixe sua mensagem e entraremos em contato por e-mail o quanto
                antes 😊
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

              <FormControl isInvalid={!!errors.message}>
                <FormLabel>Mensagem</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Deixe sua mensagem aqui..."
                  _placeholder={{ color: "gray.400" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
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

export default ContactModal;
