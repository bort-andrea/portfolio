import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack bg="white" color="black" borderRadius="md" boxShadow="md" p={4}>
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="md"></Image>
      <Heading size="md">{title}</Heading>
      <Text color="#64748b" fontSize="lg">{description}</Text>
      <HStack spacing={2} textAlign="left">
        <a href={url} target="_blank"><Text color="teal.500">See more</Text></a><FontAwesomeIcon icon={faArrowRight} size="1x"/>
      </HStack>
    </VStack>
  );
};

export default Card;
