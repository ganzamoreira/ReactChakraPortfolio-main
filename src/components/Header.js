import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Sou o</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Gonçalo</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Junior Web Developer</Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("mailto:moreira.goncalo.2003@gmail.com")
                    }>Contactem-me!</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://media-exp1.licdn.com/dms/image/D4D03AQEZNCq7t1Xzpg/profile-displayphoto-shrink_800_800/0/1664392683051?e=1674086400&v=beta&t=31hM9YGbCjITynwzW2J6sNPE368l-JS6j4JCngOdCWc' />
            </Flex>

        </Stack>
    )
}

export default Header
