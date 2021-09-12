import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import {Stack, Circle, Flex, Box, Text, Spacer} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button } from '@chakra-ui/button';
function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === 'dark';

    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");

        return (
            <Stack>
                <Circle position="absolute" bg="blue" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
                <Flex 
                direction={isNotSmallerScreen ? "row" : "column"} 
                p={isNotSmallerScreen ? "32" : "0"} 
                spacing="200px" alignSelf="flex-start">
                    
                    <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                        <Text fontSize="5xl" fontWeight="semibold">Welcome to</Text>
                        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">FM.space</Text>
                        <Text color={isDark ? "gray.200" : "gray.500"} as="sub" mt="5" fontSize="2xl" lineHeight="110%" fontWeight="semibold" fontFamily="system-ui, sans-serif">This is my private laboratorium to learn more about ReactJs</Text>
                    <Spacer></Spacer>
                    <Button 
                    mt={8} colorScheme="blue" 
                    onClick={() => window.open("https://twitter.com/promiseee123")}>
                    Follow Me!</Button>
                    </Box>
                </Flex>
            </Stack>

            
        )
}

export default Header;
