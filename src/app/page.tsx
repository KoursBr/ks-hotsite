"use client";

import { useEffect, useRef, useState } from "react";

import { useSearchParams } from "next/navigation";
import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";

import koursTheme from "../styles/theme";

import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Navbar from "@/components/NavBar";
import Results from "@/components/Results";
import Sell from "@/components/Sell/Index";
import Features from "@/components/Benefits";
import Platform from "@/components/Platform";
import Carousel from "@/components/Carousel";
import FaqPlans from "@/components/FaqPlans";
import StartFree from "@/components/StartFree";
import DemoVideo from "@/components/DemoVideo";
import RegisterModal from "@/components/LeadModal";
import ContactUsModal from "@/components/ContactUsModal";
import HelpSection from "@/components/HelpSection";

function Home() {
  const {
    isOpen: isLeadModalOpen,
    onClose: onCloseLeadModal,
    onOpen: onOpenLeadModal,
  } = useDisclosure();
  const {
    isOpen: isContactUsModalOpen,
    onClose: onCloseContactUsModal,
    onOpen: onOpenContactUsModal,
  } = useDisclosure();

  const searchParams = useSearchParams();

  const [showPlans, setShowPlans] = useState(false);
  const [heroInputEmail, setHeroInputEmail] = useState("");
  const [pendingScrollTo, setPendingScrollTo] = useState<string | null>(null);

  const featuresRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

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
      setPendingScrollTo("Preços e planos");
    }
  }, [searchParams]);

  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Box bg="#181818" w="100%" zIndex={10}>
        <Navbar onItemClick={scrollTo} />
      </Box>

      <Box display={showPlans ? "none" : "block"}>
        <Hero
          onOpenLeadModal={onOpenLeadModal}
          setEmail={setHeroInputEmail}
          onItemClick={scrollTo}
        />

        <DemoVideo />

        <Platform onOpenLeadModal={onOpenLeadModal} />
        <Features ref={featuresRef} />
        <Results ref={resultsRef} />
        {/* <Sell onOpenLeadModal={onOpen} /> */}
        {/* <Carousel /> */}
        <StartFree
          onSeePlanClick={() => {
            scrollTo("Preços e planos");
          }}
        />
        <Faq ref={faqRef} onTalkToUseClick={onOpenContactUsModal} />

        {isLeadModalOpen && (
          <RegisterModal
            showModal={isLeadModalOpen}
            onClose={onCloseLeadModal}
            prevEmail={heroInputEmail}
          />
        )}

        {isContactUsModalOpen && (
          <ContactUsModal
            showModal={isContactUsModalOpen}
            onClose={onCloseContactUsModal}
            prevEmail={heroInputEmail}
          />
        )}
      </Box>

      {showPlans && (
        <Box ref={plansRef}>
          <Plans />
          <HelpSection onTalkToUseClick={onOpenContactUsModal} />
          <FaqPlans />
        </Box>
      )}
    </ChakraProvider>
  );
}

export default Home;
