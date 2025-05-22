import koursTheme from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "../components/Home";
import { Suspense } from "react";

export default function Home() {
  return (
    <ChakraProvider theme={koursTheme}>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    </ChakraProvider>
  );
}
