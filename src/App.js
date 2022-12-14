import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">Gonçalo Moreira</Heading>

        <Spacer></Spacer>
        <IconButton onClick={() => window.open('https://www.linkedin.com/in/gon%C3%A7alo-moreira-5940a3250/')} icon={<FaLinkedin />} isRound='true'></IconButton>
        <IconButton onClick={() => window.open('https://www.instagram.com/notmoreira/')} ml={2} icon={<FaInstagram />} isRound='true'></IconButton>
        <IconButton onClick={() => window.open('https://bitbucket.org/')} ml={2} icon={<FaGithub />} isRound='true'></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
