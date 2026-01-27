import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from "../images/Albi.jpg";

const greeting = "Hello, I am Alberto!";
const bio1 = "A Full-Stack developer";
const bio2 = "specialised in React, React Native, & Python Backend";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
  <Avatar src={profileImage}
  width = "60"
  height = ""
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

export default LandingSection;
