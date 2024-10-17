"use client";

import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import koursTheme from "../styles/theme";
import Hero from "@/components/Hero";
import Features from "@/components/Benefits";
import Platform from "@/components/Platform";
import Results from "@/components/Results";
import Sell from "@/components/Sell/Index";
import StartFree from "@/components/StartFree";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";
import RegisterModal from "@/components/LeadModal";
import { useRef, useState } from "react";
import Navbar from "@/components/NavBar";

function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const featuresRef = useRef<HTMLDivElement>();
  const resultsRef = useRef<HTMLDivElement>();
  const faqRef = useRef<HTMLDivElement>();

  const scrollTo = (item: string) => {
    if (item === "Porque a Kours?")
      featuresRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    if (item === "Como funciona?")
      resultsRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    if (item === "Perguntas frequentes" || item === "Feedback")
      faqRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [heroInputEmail, setHeroInputEmail] = useState("");

  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Hero
        onOpenLeadModal={onOpen}
        setEmail={setHeroInputEmail}
        onItemClick={scrollTo}
      />
      <Features ref={featuresRef} />
      <Platform onOpenLeadModal={onOpen} />
      <Results ref={resultsRef} />
      <Sell onOpenLeadModal={onOpen} />
      {/* <Carousel /> */}
      {/* <StartFree /> */}
      <Faq ref={faqRef} onOpenLeadModal={onOpen} />

      {isOpen && (
        <RegisterModal
          showModal={isOpen}
          onClose={onClose}
          prevEmail={heroInputEmail}
        />
      )}
    </ChakraProvider>
  );
}

export default Home;
