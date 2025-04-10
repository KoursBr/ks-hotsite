"use client";

import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";
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
import Plans from "@/components/Plans";
import { useEffect, useRef, useState } from "react";
import FaqPlans from "@/components/FaqPlans";
import HelpSection from "@/components/HelpSection";
import Navbar from "@/components/NavBar";
import { useSearchParams } from "next/navigation";

function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showPlans, setShowPlans] = useState(false);
  const [heroInputEmail, setHeroInputEmail] = useState("");
  const featuresRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const [pendingScrollTo, setPendingScrollTo] = useState<string | null>(null);
  const searchParams = useSearchParams();


  const scrollTo = (item: string) => {
    if (item === "Preços e planos") {
      setShowPlans(true);
      setPendingScrollTo("Preços e planos");
      return;
    }

    if (showPlans) {
      setShowPlans(false);
      setPendingScrollTo(item);
      return;
    }

    if (item === "Porque a Kours?") {
      featuresRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (item === "Como funciona?") {
      resultsRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (item === "Feedback" || item === "Perguntas frequentes") {
      faqRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (pendingScrollTo === "Preços e planos" && showPlans) {
      setTimeout(() => {
        plansRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setPendingScrollTo(null);
      }, 100);
    }

    if (pendingScrollTo && !showPlans) {
      setTimeout(() => {
        scrollTo(pendingScrollTo);
        setPendingScrollTo(null);
      }, 100);
    }
  }, [showPlans, pendingScrollTo]);

  useEffect(() => {
    const sectionParam = searchParams.get("section");
    if (sectionParam === "plans") {
      setShowPlans(true);
      setPendingScrollTo("Preços e planos"); // Scroll suave
    }
  }, [searchParams]);

  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Box bg="#181818" w="100%" zIndex={10}>
        <Navbar onItemClick={scrollTo} />
      </Box>

      <Box display={showPlans ? "none" : "block"}>
        <Hero
          onOpenLeadModal={onOpen}
          setEmail={setHeroInputEmail}
          onItemClick={scrollTo}
        />
        <Platform onOpenLeadModal={onOpen} />
        <Features ref={featuresRef} />
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
      </Box>

      {showPlans && (
        <Box ref={plansRef}>
          <Plans />
          <HelpSection />
          <FaqPlans />
        </Box>
      )}
    </ChakraProvider>
  );
}

export default Home;
