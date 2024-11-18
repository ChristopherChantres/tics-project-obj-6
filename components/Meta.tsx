import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Meta = () => {
  return (
    <Box
        id={'meta'}
        bg="transparent"
        w="100%"
        p={8}
        position="relative"
        mx="auto"
        mt={10}
        rounded="md"
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
            <Text fontSize="1.5rem" color="teal.100" mt={2}>
            "Para 2030, aumentar de manera considerable el reciclaje y la reutilizaci&oacute;n segura de aguas residuales, garantizando su correcto tratamiento a trav&eacute;s de tecnolog&iacute;as sostenibles y fomentando su aplicaci&oacute;n en sectores agr&iacute;colas, industriales y urbanos, con el objetivo de disminuir la demanda sobre los recursos h&iacute;dricos naturales."
            </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Meta;
