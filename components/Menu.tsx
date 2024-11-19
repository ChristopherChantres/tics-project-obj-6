'use client'

import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  VStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const menuItems = [
  "Objetivo Agenda 2030",
  "Meta",
  "Tema de investigación",
  "Planteamiento Y Pregunta",
  "Palabras clave",
  "Estrategia de búsqueda",
  "Listado de recursos bibliográficos",
  "Conclusión",
  "Términos de uso y condiciones de privacidad",
  "Sobre nosotros",
  "Información adicional",
];

const Menu = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="teal.50"
      color="teal.50"
      px={6}
      py={4}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex justifyContent="space-between" alignItems="center">
        {/* Brand / Logo */}
        <Heading as="h1" fontSize={'1.5rem'} fontWeight={'bold'} color="teal.900">
          Agenda 2030 Objetivo 6
        </Heading>

        {/* Desktop Menu */}
        <HStack
          as="nav"
          display={{ base: "none", md: "flex" }}
          spaceY={6}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.replace(/\s+/g, "-").toLowerCase()}`} // Convert item text to lowercase and replace spaces with dashes
              _hover={{ textDecoration: "underline", color: "teal.300" }}
              fontSize="sm"
              color={'teal.900'}
            >
              {item}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <Button
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            bg="teal.700"
            _hover={{ bg: "teal.600" }}
            p={2}
            borderRadius="md"
        >
            <IoMenu size="1.5em" color="white" />
        </Button>

      </Flex>

      {/* Mobile Menu */}
      {open && (
        <Box
          bg="teal.800"
          p={6}
          mt={2}
          borderRadius="md"
          shadow="md"
          display={{ md: "none" }}
        >
          <VStack align="start" spaceY={4}>
            <Button
                display={{ base: "flex", md: "none" }}
                onClick={onClose}
                bg="teal.700"
                _hover={{ bg: "teal.600" }}
                p={2}
                borderRadius="md"
            >
                <CgClose size="1.5em" color="white" />
            </Button>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.replace(/\s+/g, "-").toLowerCase()}`} // Convert item text to lowercase and replace spaces with dashes
                _hover={{ textDecoration: "underline", color: "teal.500" }}
                fontSize="md"
                color={'teal.100'}
                onClick={onClose} // Close menu on item click
              >
                {item}
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Menu;
