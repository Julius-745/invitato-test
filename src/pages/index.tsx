import { Stack, Box, Image, HStack, } from '@chakra-ui/react';
import TitleComponent from '@/components/Title';

 
 const Home = () => {
    return (
        <HStack>
            <Stack maxWidth={"70%"} float={"left"}>
                <Box opacity={0.8}>
                        <Image src={'/image/main.jpg'} height={"60rem"}/>
                </Box>
                <TitleComponent isMobileScreen={false} />
            </Stack>
            <Stack maxW={"30%"} overflow={"auto"} marginTop={"-3rem"} alignItems={"center"}>
                <Box position={"relative"} opacity={0.8} marginRight={"-2rem"}>
                        <Image src={'/image/main.jpg'} margin={"-2rem"} height={"60rem"}/>
                </Box>
                <TitleComponent isMobileScreen={true}/>
            </Stack>
        </HStack>
    ); 
 }
 
 export default Home;