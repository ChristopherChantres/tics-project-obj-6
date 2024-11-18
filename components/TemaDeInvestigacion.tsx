import React from "react";
import { Box, Heading, Text, VStack, Flex, Image } from "@chakra-ui/react";

const TemaDeInvestigacion = () => {
  return (
    <Flex
      bg="teal.100"
      w="100%"
      p={6}
    //   rounded="md"
      shadow="md"
      mx="auto"
      mt={10}
      align="center"
      justify="space-between"
      direction={{ base: "column", lg: "row" }}
    >
      <Box flex="1">
        <VStack align="start">
          <Heading
            as="h3"
            fontSize={'4rem'}
            fontWeight="bold"
            color="teal.500"
            textAlign={{ base: "center", lg: "left" }}
            w="full"
          >
            Tema de Investigaci&oacute;n
          </Heading>
          <Text fontSize="2rem" color="teal.800" mt={4}>
            Tratamiento de aguas residuales recicladas, que garantice calidad y
            suministro aunado al cumplimiento de objetivos de desarrollo
            sostenible.
          </Text>
        </VStack>
      </Box>
      <Box
        flex="1"
        maxW="300px"
        mt={{ base: 6, lg: 0 }}
        ml={{ lg: 6 }}
        textAlign="center"
      >
        <Image
          src="images/agua_para_todos.webp"
          alt="Imagen representativa"
          borderRadius="md"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default TemaDeInvestigacion;
