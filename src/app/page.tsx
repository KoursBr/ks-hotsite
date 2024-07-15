import { ChakraProvider } from "@chakra-ui/react"
import koursTheme from "../styles/theme";
import Hero from "@/components/Hero";
import Features from "@/components/Benefits";
import Platform from "@/components/Platform";
import Results from "@/components/Results";
import Sell from "@/components/Sell/Index";
import StartFree from "@/components/StartFree";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";

function Home() {
  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Hero />
      <Features/>
      <Platform />
      <Results />
      <Sell />
      <Carousel />
      <StartFree />
      <Faq />
    </ChakraProvider>
  )
}

export default Home
