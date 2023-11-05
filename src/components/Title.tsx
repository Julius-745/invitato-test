import {
  Box,
  Flex,
  Heading,
  SlideFade,
  Text,
  useDisclosure,
  Image,
  Button,
  Slide,
} from "@chakra-ui/react";
import { roboto, clicker, roboto_latin } from "../../styles/font";
import { useEffect, useState, useRef } from "react";
import { FaHeart } from "react-icons/fa6";
import { EmailIcon } from "@chakra-ui/icons";

type Title = {
  isMobileScreen: boolean;
};

const TitleComponent = (props: Title) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isPlay, setIsPlayed] = useState<Boolean>(false);
  const [isTransitionOpen, setIsTransitionOpen] = useState<boolean>(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState<Boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onToggle();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTransitionOpen === true) {
      const timer = setTimeout(() => {
        setIsTransitionOpen(false)
        setIsInvitationOpen(true)
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitionOpen]);

  useEffect(() => {
    if (isPlay === true) {
      var music = new Audio("/music/music.mp3");
      music.play().then(() => setIsInvitationOpen(true));
    }
  }, [isPlay]);

  return (
    <Box
      position={"absolute"}
      marginLeft={isInvitationOpen ? "" : "2rem"}
      marginTop={isInvitationOpen ? "" : "1rem"}
    >
      <SlideFade in={isOpen} offsetY="20px">
        <Flex
          flexDirection={"column"}
          gap={props.isMobileScreen ? 5 : 10}
          alignItems={props.isMobileScreen ? "center" : "left"}
        >
          {props.isMobileScreen ? (
            isInvitationOpen ? (
              <></>
            ) : (
              <Box>
                <Image src={"/image/logo.png"} boxSize={"80px"} />
              </Box>
            )
          ) : (
            <></>
          )}
          {isInvitationOpen ? (
            <></>
          ) : (
            <>
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
                <Heading
                  style={{
                    fontSize: props.isMobileScreen ? "3rem" : "5rem",
                    fontFamily: clicker.style.fontFamily,
                    color: props.isMobileScreen ? "white" : "#67544e",
                  }}
                >
                  Nailal & Via
                </Heading>
              </Box>
            </>
          )}
          {props.isMobileScreen ? (
            <></>
          ) : (
            <Box>
              <Text
                fontFamily={roboto_latin.style.fontFamily}
                color={"#67544e"}
              >
                “And I knew exactly how old Walt Disney’s Cinderella felt when
                she found her prince.”
              </Text>
              <Text color={"#67544e"}>— Elizabeth Young</Text>
            </Box>
          )}
          <Box paddingTop={"22rem"}>
            {props.isMobileScreen ? (
              isInvitationOpen ? (
                <></>
              ) : (
                <Button
                  leftIcon={<EmailIcon />}
                  colorScheme="gray"
                  onClick={() => setIsPlayed(!isPlay)}
                  marginLeft={"30%"}
                >
                  Open Invitation
                </Button>
              )
            ) : (
              <></>
            )}
            {isInvitationOpen ? (
              <></>
            ) : (
              <Image
                src={"/image/flower.svg"}
                zIndex={2}
                maxW={props.isMobileScreen ? "110%" : ""}
                marginLeft={props.isMobileScreen ? "-2rem" : ""}
              />
            )}
            {props.isMobileScreen ? (
              <>
                <Image
                  src={"/image/footer.png"}
                  zIndex={1}
                  marginTop={isInvitationOpen ? "15rem" : "-10rem"}
                  maxW={"110%"}
                  marginLeft={isInvitationOpen ? "" : "-2rem"}
                />
                <Box zIndex={3} textAlign={"center"} marginTop={"-8rem"}>
                  {isInvitationOpen ? (
                    <>
                      <Text
                        fontFamily={roboto_latin.style.fontFamily}
                        color={"black"}
                        marginLeft={10}
                        marginRight={10}
                        fontSize={13}
                      >
                        Dear Mr/Mrs/Ms, <br />
                        Family & Friends <br />
                        We are pleased to announce and invite you to our
                        wedding. We sincerely hope that you will be able to
                        attend and pray directly on our wedding day. Your
                        presence will mean a lot to us.
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text
                        fontFamily={roboto_latin.style.fontFamily}
                        color={"black"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={2}
                        marginLeft={"30%"}
                      >
                        Created with <FaHeart size={"10px"} /> by Invitato
                      </Text>
                      <Text
                        fontFamily={roboto_latin.style.fontFamily}
                        color={"black"}
                      >
                        © 2023 Nailal & Via. All Rights Reserved
                      </Text>
                    </>
                  )}
                </Box>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Flex>
      </SlideFade>
    </Box>
  );
};

export default TitleComponent;
