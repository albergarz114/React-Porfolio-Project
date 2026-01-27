import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


const projects = [
  {
    title: "Little Lemon: A Dockerized Full-Stack Booking Application",
    description:
      "Built with a focus on both aesthetic appeal and technical robustness, this project features a custom-themed React UI and a Python/Django backend. I implemented Docker and CD/CI pipeline",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://github.com/albergarz114/Capstone-Project",
  },
  {
    title: "Shopfy",
    description:
      "A shopping list app which user can add, delete, update. Implemented external API and cool visual features. 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://github.com/albergarz114/Shopfy-list",
  },
  {
    title: "Photo Gallery: GlisthrallPhoto",
    description:
      "This project is a photo collage application which a user can upload, download, save, or delete a photo.",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://github.com/albergarz114/GlisthrallPhoto-app",
  },
  {
    title: "World News App",
    description:
      "A mobile application for displaying world, local, news. Added local database to save data",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "https://github.com/albergarz114/iOS-World-News-App",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
