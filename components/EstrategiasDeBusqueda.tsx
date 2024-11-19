import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const EstrategiasDeBusqueda = () => {
  return (
    <Box
        id={'estrategia-de-búsqueda'}
        bg="teal.50"
        color="teal.50"
        p={8}
        mt={10}
        w="90%"
        mx="auto"
        borderRadius="lg"
        shadow="lg"
    >
      {/* Título */}
      <Heading
        as="h2"
        fontSize="2rem"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        color="teal.500"
      >
        Conceptos Clave de la Investigaci&oacute;n
      </Heading>

      {/* Imagen */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src="images/terminos_controlados.png" // Reemplaza con la ruta correcta de tu imagen
          alt="Estrategias de búsqueda"
          borderRadius="md"
          shadow="md"
          w={{ base: "100%", md: "80%" }}
        />
      </Box>

      {/* Título */}
      <Heading
        as="h2"
        fontSize="2rem"
        fontWeight="bold"
        textAlign="center"
        my={6}
        color="teal.500"
      >
        Estrategias De B&uacute;squeda
      </Heading>

      {/* Imagen */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src="images/operadores_logicos.png" // Reemplaza con la ruta correcta de tu imagen
          alt="Estrategias de búsqueda"
          borderRadius="md"
          shadow="md"
          w={{ base: "100%", md: "80%" }}
        />
      </Box>
    </Box>
  );
};

export default EstrategiasDeBusqueda;
