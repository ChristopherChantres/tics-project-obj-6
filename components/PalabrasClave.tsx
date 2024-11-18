'use client'

import React from "react";
import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";

const PalabrasClave = () => {
    const palabras = [
        { es: "Acceso a agua potable", en: "Drinking water access" },
        { es: "Saneamiento", en: "Sanitation" },
        { es: "Calidad del agua", en: "Water quality" },
        { es: "Tratamiento del agua", en: "Water treatment" },
        { es: "Desarrollo sostenible", en: "Sustainable development" },
        { es: "Agua residual", en: "Waste water" },
    ];      

  return (
    <Box
      bg="teal.50"
      position="relative"
      w="100%"
      p={8}
      mt={10}
      mx="auto"
      shadow="md"
    >
      {/* Título */}
      <Heading
        as="h2"
        fontSize={'2rem'}
        fontWeight="bold"
        color="teal.700"
        textAlign="center"
        mb={8}
      >
        Palabras Clave
      </Heading>

      {/* Contenedor para la red de conceptos */}
      <Flex
        position="relative"
        align="center"
        justify="center"
        flexWrap="wrap"
        gap={6}
      >
        {palabras.map((palabra, index) => (
          <Box
            key={index}
            bg="teal.100"
            p={4}
            borderRadius="lg"
            shadow="md"
            textAlign="center"
            color="teal.900"
            fontWeight="bold"
            minW="120px"
            minH="60px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            _hover={{
                bg: '#009edb',
                color: 'white'
            }}
          >
            {palabra.es + " | " + palabra.en}

            {/* Líneas que conectan los conceptos */}
            {index < palabras.length - 1 && (
              <Box
                position="absolute"
                w="2px"
                h="80px"
                bg="teal.500"
                top="100%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="-1"
              />
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PalabrasClave;
