import React from "react";
import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Christopher Eder Chantres Justo",
    id: "184875",
    description: "Ciencia de Datos | Programar y Aprender",
    img: "images/christopher_foto.jpg", // Replace with the correct path
  },
  {
    name: "Emiliano Olivas Guerrero",
    id: "186332",
    description: "Estrategias Financieras y Contaduría Pública | Jugar Fútbol",
    img: "images/emiliano_foto.png", // Replace with the correct path
  },
  {
    name: "Erick Silva Meléndez",
    id: "186001",
    description: "Artes Culinarias | Jugar Basquetball",
    img: "images/erick_foto.png", // Replace with the correct path
  },
  {
    name: "Rubén Gabriel Flores Flores",
    id: "184498",
    description: "Relaciones Internacionales | Jugar Voleibol.",
    img: "images/flores_foto.png", // Replace with the correct path
  },
  {
    name: "Andrés Acevedo Vázquez",
    id: "185444",
    description: "Administración de Negocios Internacionales | Hacer deporte.",
    img: "images/andres_foto.png", // Replace with the correct path
  }
];

const SobreNosotros = () => {
  return (
    <Box
        id={'sobre-nosotros'}
        bg="teal.300"
        color="teal.50"
        py={10}
        px={{ base: 6, md: 12 }}
        borderRadius="lg"
        shadow="lg"
    >
      {/* Section Title */}
      <Heading
        as="h2"
        fontSize="2rem"
        fontWeight="bold"
        textAlign="center"
        mb={8}
        color="teal.900"
      >
        Sobre Nosotros
      </Heading>

      {/* Team Members */}
      <Flex wrap="wrap" justify="center" gap={8}>
        {teamMembers.map((member, index) => (
          <VStack
            key={index}
            bg="teal.700"
            borderRadius="lg"
            shadow="md"
            p={6}
            align="center"
            w={{ base: "100%", md: "300px" }}
            textAlign="center"
          >
            {/* Profile Image */}
            <Box
              bgImage={`url(${member.img})`}
              bgSize="cover"
              position="center"
              borderRadius="full"
              boxSize="120px"
              borderWidth={2}
              borderColor="teal.200"
              mb={4}
            />
            {/* Member Details */}
            <Heading as="h3" fontSize="lg" fontWeight="bold" color="teal.50">
              {member.name}
            </Heading>
            <Text fontSize="sm" color="teal.300" fontWeight="bold">
              ID: {member.id}
            </Text>
            <Text fontSize="sm" color="teal.50">
              {member.description}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default SobreNosotros;
