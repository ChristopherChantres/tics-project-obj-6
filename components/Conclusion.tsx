import React from "react";
import { Box, Heading, Text} from "@chakra-ui/react";

const Conclusion = () => {
  return (
    <Box
        id={'conclusión'}
        bg="teal.800"
        w="100%"
        p={8}
        mt={10}
        rounded="lg"
        shadow="md"
        mx="auto"
        textAlign="center"
    >
      <Heading
        as="h3"
        fontSize="2rem"
        fontWeight="semibold"
        color="teal.300"
        mb={4}
      >
        Conclusión
      </Heading>
      <Text fontSize="1.2rem" color="teal.50">
        El acceso al agua potable segura y el manejo eficiente de aguas residuales son fundamentales 
        para enfrentar los desafíos globales de escasez de recursos hídricos y cumplir con los 
        Objetivos de Desarrollo Sostenible. A pesar de los esfuerzos previos bajo los Objetivos de 
        Desarrollo del Milenio, el problema del acceso al agua y el saneamiento no se abordó con la 
        urgencia necesaria. Sin embargo, los ODS actuales reconocen la importancia de una gestión 
        integral del agua, enfocándose en el reciclaje de aguas residuales como una solución 
        sostenible. La correcta implementación de estas estrategias no solo mejora el suministro de 
        agua, sino que también garantiza un impacto positivo en la salud pública y la sostenibilidad 
        ambiental. ¿Cómo contribuye el tratamiento de aguas residuales recicladas al suministro 
        de agua potable y al cumplimiento de los Objetivos de Desarrollo Sostenible? Esta
        investigación permitirá identificar las barreras y oportunidades clave para una gestión 
        eficiente de las aguas residuales, brindando soluciones que aseguren un acceso sostenible al agua y promuevan la salud pública
      </Text>
    </Box>
  );
};

export default Conclusion;
