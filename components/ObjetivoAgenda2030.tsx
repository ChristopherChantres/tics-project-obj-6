import React from "react";
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const ObjetivoAgenda2030 = () => {
  return (
    <Box
      bg="teal.100"
      w={{ base: '100%', md: '90%', lg: '100%' }}
      p={6}
      shadow="md"
      mx="auto"
      mt={10}
    >
      <VStack justifyContent={'center'} alignItems={'center'} spaceY={6}>
        <Image
          src={'/images/desarrollo_sostenible.png'} 
          alt="Desarrollo Sostenible de la ONU"
          borderRadius="md"
          shadow="lg"
          mx="auto"
          w={{ base: "150px", md: "300px", lg: "800px" }}
        />
        <Heading
          as="h2"
          size="3xl"
          fontWeight="bold"
          color="teal.800"
          textAlign="center"
          w="full"
        >
          Agenda 2030 Para el Desarrollo Sostenible
        </Heading>
        <Box textAlign={'center'}>
          <Text fontSize="1.2rem" color="teal.700">
            Objetivo 6: Garantizar la disponibilidad de agua y su gesti&oacute;n
            sostenible y el saneamiento para todos.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ObjetivoAgenda2030;
