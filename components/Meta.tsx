import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Meta = () => {
  return (
    <Box
      bg="transparent"
      w="100%"
      p={8}
      position="relative"
      mx="auto"
      mt={10}
      rounded="md"
    //   shadow="md"
      overflow="hidden"
    >
      <VStack justifyContent={'center'} spaceY={2}>
        <Heading
          as="h3"
          fontSize={'4rem'}
          fontWeight="bold"
          color="#009edb"
          textAlign="center"
          w="full"
        >
          Meta
        </Heading>
        <Box textAlign={'center'} w={'100%'}>
            <Text fontSize="1.6rem" color="teal.100" mt={2}>
            Tratamiento de aguas residuales recicladas, que garantice calidad y
            suministro aunado al cumplimiento de objetivos de desarrollo
            sostenible.
            </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Meta;
