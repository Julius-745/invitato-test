import { Stack, Heading, SlideFade, Text, useDisclosure, Box, Image, Flex, HStack } from '@chakra-ui/react';
import { roboto, clicker, roboto_latin } from '../../styles/font';
import { useEffect } from 'react';

 
 const Home = () => {
    const { isOpen, onToggle } = useDisclosure()

    useEffect(() => {
        const timer = setTimeout(() => {
          onToggle()
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

 return (
    <HStack>
        <Stack>
            <Box position={"relative"}>
                    <Image src={'/image/main.jpg'} margin={"-2rem"} backgroundAttachment={"fixed"} position={"sticky"} width={"90%"} height={"60rem"}/>
            </Box>
                <Box position={"absolute"} marginLeft={"2rem"} marginTop={"1rem"}>
                <SlideFade in={isOpen} offsetY='20px'>
                    <Box>
                        <Text fontFamily={roboto.style.fontFamily} color={"#67544e"}>
                            THE WEDDING OF
                        </Text>
                        <Heading style={{
                            fontSize: "5rem",
                            fontFamily: clicker.style.fontFamily,
                            color: "#67544e"
                        }}>
                            Nailal & Via
                        </Heading>
                        <Text fontFamily={roboto_latin.style.fontFamily} color={"#67544e"}>
                            “And I knew exactly how old Walt Disney’s Cinderella felt when she found her prince.”
                        </Text>
                        <Text color={"#67544e"}>
                            — Elizabeth Young
                        </Text>
                    </Box>
                </SlideFade>
            </Box>
        </Stack>
    </HStack>
 ); 
 }
 
 export default Home;