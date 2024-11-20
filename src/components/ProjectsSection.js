import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Personal Website",
    description:
      "Un portfolio sviluppato in HTML, CSS e Javascript completamente responsivo",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://bort-andrea.github.io/"
  },
  {
    title: "Fake Reddit",
    description:
      "Una web APP che simula reddit, si può selezionare la subreddit preferita e visionare gli ultimi post pubblicati",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://fakereddit.netlify.app/"
  },
  {
    title: "Jamming Playlist",
    description:
      "Una web APP che interagisce con Spotify. Si può ricercare canzoni e aggiungerle in una propria playlist personale",
    getImageSrc: () => require("../images/photo3.jpg"),
    url:"https://react-jamming-playlist.netlify.app/"
  },
  {
    title: "VC Experience",
    description:
      "Una landing page aziendale e responsiva.",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "https://github.com/bort-andrea/VC_Experience"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#4487e3"
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
