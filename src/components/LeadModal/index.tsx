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
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";

interface RegisterModalProps {
  showModal: boolean;
  onClose: () => void;
  prevEmail?: string;
}

const RegisterModal = React.forwardRef(
  (props: RegisterModalProps, forwardRef) => {
    const { showModal, onClose, prevEmail } = props;

    const [contentStatus, setContentStatus] = useState("yes");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [instagram, setInstagram] = useState("");
    const [email, setEmail] = useState(prevEmail);
    const [name, setName] = useState("");

    const toast = useToast();

    const handleSubmit = async () => {
      const dto = {
        name,
        instagram,
        contentStatus,
        email,
        access_key: "b4cff98c-3a06-4610-8cdd-685959227787",
      };

      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dto),
      });

      if (response.status === 200) {
        onClose();
        toast({
          status: "success",
          title: "Inscrição realizada com sucesso!",
          description:
            "Você será notificado assim que o acesso antecipado estiver disponível.",
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
        setInstagram("");
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
                src="/Black logo - no background.svg"
                alt="Kours logo icon"
                w={"90px"}
              />
              <Box bg="green.100" px={2} py={1} rounded="full">
                <Text fontSize="xs" color="green.700">
                  Em breve!
                </Text>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Box mt={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Tenha acesso antecipado!
              </Text>
              <Text mt={2} color="gray.600">
                Inscreva-se e seja um dos primeiros a experimentar a plataforma.
              </Text>
            </Box>

            <VStack spacing={4} mt={6}>
              <HStack spacing={4} w="full">
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    placeholder="João Pedro"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Instagram</FormLabel>
                  <Input
                    id="instagram"
                    name="instagram"
                    placeholder="@joaopedro"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="joao.pedro@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Já possui seu infoproduto?</FormLabel>
                <RadioGroup onChange={setContentStatus} value={contentStatus}>
                  <VStack alignItems="start">
                    <Radio value="yes">Sim</Radio>
                    <Radio value="no">Não</Radio>
                    <Radio value="producing">Estou produzindo</Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>
            </VStack>

            <Button
              mt={6}
              w="full"
              color={"white"}
              bg={"#017EF4"}
              isLoading={isSubmitting}
              onClick={handleSubmit}
            >
              Me inscrever
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  addon?: string;
  value: any;
  setValue: (value: string) => void;
}

const InputField = ({
  label,
  id,
  type,
  placeholder,
  addon,
  value,
  setValue,
}: InputFieldProps) => {
  return (
    <Box w="full">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        pl={addon ? 8 : 3}
      />
    </Box>
  );
};

export default RegisterModal;
