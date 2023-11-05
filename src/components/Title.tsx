import { Box, Flex, Heading, SlideFade, Text, useDisclosure, Image, Button } from "@chakra-ui/react";
import { roboto, clicker, roboto_latin } from "../../styles/font";
import { useEffect, useState, useRef } from "react";
import {EmailIcon} from "@chakra-ui/icons";

type Title = {
    isMobileScreen: boolean;
}

const TitleComponent = (props: Title) => {
    const { isOpen, onToggle } = useDisclosure()
    const [isPlay, setIsPlayed] = useState<Boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          onToggle()
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        if(isPlay === true){
            var music = new Audio('/music/music.mp3');
            music.play();
        }
    }, [isPlay])
    

    return(
        <Box position={"absolute"} marginLeft={"2rem"} marginTop={"1rem"}>
                <SlideFade in={isOpen} offsetY='20px'>
                    <Flex flexDirection={"column"} gap={props.isMobileScreen ? 5 : 10} alignItems={props.isMobileScreen ? "center" : "left"}>
                    {props.isMobileScreen ? (
                            <Box>
                                <Image src={"/image/logo.png"} boxSize={"80px"}/>
                            </Box>
                        ) : (
                            <></>
                        )}
                        <Box>
                            <Text 
                                fontFamily={roboto.style.fontFamily} 
                                color={props.isMobileScreen ? "white" : "#67544e"}
                                fontSize={props.isMobileScreen ? "0.8rem" : "1rem"}
                            >
                                THE WEDDING OF
                            </Text>
                        </Box>
                        <Box>
                            <Heading style={{
                                fontSize: props.isMobileScreen ? "3rem": "5rem",
                                fontFamily: clicker.style.fontFamily,
                                color: props.isMobileScreen ? "white": "#67544e"
                            }}>
                                Nailal & Via
                            </Heading>
                        </Box>
                            {props.isMobileScreen ? (
                                 <></>
                            ) : (
                                <Box>
                                <Text fontFamily={roboto_latin.style.fontFamily} color={"#67544e"}>
                                    “And I knew exactly how old Walt Disney’s Cinderella felt when she found her prince.”
                                </Text>
                                <Text color={"#67544e"}>
                                    — Elizabeth Young
                                </Text>
                            </Box>
                            )}
                            <Box paddingTop={"20rem"} alignContent={"center"}>
                                {props.isMobileScreen ? (
                                    <Button leftIcon={<EmailIcon/>} colorScheme='gray' onClick={() => setIsPlayed(!isPlay)}>
                                        Open Invitation
                                    </Button>
                                    ) : (
                                    <></>
                                )}
                                <Image src={"/image/flower.svg"} zIndex={2} maxW={props.isMobileScreen ? "110%" : ""} marginLeft={props.isMobileScreen ? "-2rem" : ""}/>
                                {props.isMobileScreen ? (<Image src={"/image/footer.png"} zIndex={1} marginTop={props.isMobileScreen ? "-10rem" : ""} maxW={"110%"} marginLeft={"-2rem"}/>) : (<></>)}
                                <Box zIndex={3} textAlign={"center"} marginTop={"-8rem"}>
                                    <Text fontFamily={roboto_latin.style.fontFamily} color={"black"}>
                                        Created with Love by Invitato
                                    </Text>
                                    <Text fontFamily={roboto_latin.style.fontFamily} color={"black"}>
                                        © 2023 Nailal & Via. All Rights Reserved
                                    </Text>
                                </Box>
                            </Box>
                    </Flex>
                </SlideFade>
                </Box>
    )
}

export default TitleComponent;