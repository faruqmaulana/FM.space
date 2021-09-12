import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/layout";
import { FaMoon, FaSun, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
function App() {

  const{colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
      <VStack p={5}>
        <Flex width="100%">
          <Heading ml={2} size="md" fontWeight='semibold'  color="cyan.400">Faruq</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound="true" ></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={() => window.open("https://www.instagram.com/faruq.maulanaa/")}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={() => window.open("https://github.com/faruqmaulana")} ></IconButton>
        <IconButton ml={8} icon={ isDark? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header></Header>
        {/* <Social></Social>
        <Profile></Profile> */}

      </VStack>
  );
}

export default App;
