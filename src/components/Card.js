import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="black" borderRadius="md" boxShadow="md" p={4}>
      <Image
        src={imageSrc}
        alt={title}
        boxSize="200px"
        objectFit="cover"
        borderRadius="md"></Image>
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <Text color="teal.500">See more</Text><FontAwesomeIcon icon={faArrowRight} size="1x"/>
      </HStack>
    </VStack>
  );
};

export default Card;
