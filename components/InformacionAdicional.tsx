import React from "react";
import { Box, Heading, Text, Image, VStack, Spacer } from "@chakra-ui/react";

const InformacionAdicional = () => {
  // Array for the images and footers
  const images = [
    {
      src: "images/aguas_residuales_mapa.png", // Replace with your image path
      alt: "Proporción estimada de aguas residuales domésticas tratadas de manera segura a nivel mundial",
      footer: "Proporción estimada de aguas residuales domésticas tratadas de manera segura a nivel mundial. Fuente: UN-Habitat-WHO (2021)",
    },
    {
      src: "images/aguas_residuales_grafica.png", // Replace with your image path
      alt: "Proporción estimada de aguas residuales domésticas tratadas de manera segura por región.",
      footer: "Proporción estimada de aguas residuales domésticas tratadas de manera segura por región. Fuente: UN-Habitat-WHO (2021)",
    },
    {
      src: "images/tipos_de_gestion_de_aguas.png", // Replace with your image path
      alt: "Tipos de gestión de aguas residuales domésticas",
      footer: "Tipos de gestión de aguas residuales domésticas. Fuente: UN-Habitat-WHO (2021)",
    },
  ];

  return (
    <Box
        id={'información-adicional'}
        bg="teal.800"
        color="teal.50"
        py={8}
        px={{ base: 4, md: 8 }}
        borderRadius="lg"
        shadow="lg"
    >
      <Heading
        as="h2"
        fontSize="2rem"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        color="teal.200"
      >
        Información Adicional
      </Heading>

      <VStack spaceY={8}>
        {images.map((image, index) => (
          <Box key={index} w="100%" textAlign="center">
            <Image
              src={image.src}
              alt={image.alt}
              borderRadius="md"
              boxShadow="md"
              mx="auto"
              mb={4}
              maxW="100%"
              maxH="400px"
            />
            <Text fontSize="sm" color="teal.300" fontStyle="italic">
              {image.footer}
            </Text>
            {index < images.length - 1 && <Spacer borderColor="teal.500" my={6} />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default InformacionAdicional;
