import React from "react";
import { Box, Heading, Text, Spacer, Flex } from "@chakra-ui/react";

const PreguntaYPlanteamiento = () => {
  return (
    <Box
      bg={'transparent'}
      w="100%"
      p={8}
      mt={4}
      mx="auto"
      shadow="md"
    >
      <Flex direction={{ base: "column", md: "row" }} gap={2}>
        {/* Título de Investigación */}
        <Box
          border={'3px solid white'}
          borderRadius={'xl'}
          p={10}
          _hover={{
            bg: 'teal.400'
          }}
        >
          <Box flex={1}>
            <Heading
              as="h3"
              size="lg"
              fontWeight="bold"
              fontSize={'2rem'}
              color="teal.200"
              textAlign="center"
              mb={4}
            >
              Título de Investigación
            </Heading>
            <Text fontSize="lg" color="teal.100">
              "Tratamiento de aguas residuales recicladas para garantizar calidad y suministro sostenible"
            </Text>
          </Box>
        </Box>

        {/* Separador */}
        <Spacer/>
        {/* Pregunta de Investigación */}

        <Box
          border={'3px solid white'}
          borderRadius={'xl'}
          p={10}
          _hover={{
            bg: 'teal.400'
          }}
        >
          <Box flex={1}>
            <Heading
              as="h3"
              size="lg"
              fontWeight="bold"
              fontSize={'2rem'}
              color="teal.200"
              textAlign="center"
              mb={4}
            >
              Pregunta de Investigación
            </Heading>
            <Text fontSize="lg" color="teal.100">
              ¿Cómo puede el tratamiento de aguas residuales recicladas contribuir a garantizar un suministro sostenible y cumplir con los Objetivos de Desarrollo Sostenible?
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PreguntaYPlanteamiento;
