import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from "../images/Albi.jpg";
import { useAlertContext } from "../context/alertContext";


const LandingSection = () => {

  const { language } = useAlertContext();

  const greeting = language === "DE" ? "Hallo, Ich bin Alberto!" : "Hello, I am Alberto!";
  const bio1 = language === "DE" ? "Full-Stack Entwickler" : "A Full-Stack developer";
  const bio2 = language === "DE" ? "Spezialisiert auf React, React Native und Python Backend" : "specialised in React, React Native, & Python Backend";

  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
  <Avatar src={profileImage}
  width = "40"
  height = "60"
  name='Alberto'
  />
  <Heading as= 'h4' size='md' noOfLiners={1}>{greeting}</Heading>
  <VStack spacing={6}>
  <Heading as='h1' size='3x1' noOfLiners={1}>{bio1}</Heading>
  <Heading as='h1' size='3x1' noOfLiners={1}>{bio2}</Heading>
  </VStack>
    </VStack>
  </FullScreenSection>
  );
};
export default LandingSection;
