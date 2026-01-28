import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { faSun, faMoon, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useAlertContext } from "../context/alertContext";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "alberto.garza.swe@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/albergarz114",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/alberto-garza-ios/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
  
];

const Header = () => {

  const headerRef = useRef(null); 
  const { colorMode, toggleColorMode } = useColorMode();
  const { language, toggleLanguage } = useAlertContext();
  

  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
  
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map(social => 
                <a href={social.url} key={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>)
              }

              <IconButton
              aria-label="Toggle theme"
              variant = "ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
              icon={<FontAwesomeIcon icon={colorMode === "light" ? faSun : faMoon} size="lg"/>}
              onClick={toggleColorMode}
              />
              <HStack
              as="button" 
              onClick={toggleLanguage} 
              spacing={2} 
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
              
              >
                <FontAwesomeIcon icon={faLanguage} size="lg"/>
                <Box fontWeight="bold" fontSize="sm">{language}</Box>
                
              </HStack>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")}
              >{language === "ES" ? "Proyectos" : language === "DE" ? "Projekte" : "Projects"}</a>
              <a href="#contactme" onClick={handleClick("contactme")}
              >{language === "ES" ? "Póngase en contacto conmigo" : language === "DE" ? "Kontaktieren Sie mich" : "Contact Me"}</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
