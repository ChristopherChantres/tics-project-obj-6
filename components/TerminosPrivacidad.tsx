import React from 'react';
import { Box, Heading, Text, Link, Image, VStack, Spacer } from "@chakra-ui/react";

const TerminosPrivacidad = () => {
  return (
    <Box
        id={'términos-de-uso-y-condiciones-de-privacidad'}
        bg="teal.900"
        color="teal.50"
        p={8}
        borderRadius="lg"
        shadow="md"
        mt={10}
    >
      <VStack spaceY={2} align="stretch">
        {/* Section Title */}
        <Heading as="h2" fontSize={'2rem'} textAlign="center" color="teal.100" textDecoration={'underline'}>
          Términos de Uso y Condiciones de Privacidad
        </Heading>
        
        {/* Terms of Use */}
        <Box>
          <Heading as="h3" size="md" mb={2} color="teal.200">
            Términos de Uso
          </Heading>
          <Text fontSize="md" lineHeight="1.8">
            Al utilizar este sitio web, aceptas cumplir con nuestros términos de uso, 
            incluyendo la responsabilidad de emplear el contenido únicamente con fines educativos 
            y no comerciales. El uso indebido de la información aquí presentada podría resultar en 
            restricciones futuras de acceso.
          </Text>
        </Box>

        <Spacer borderColor="teal.700" />

        {/* Privacy Policy */}
        <Box>
          <Heading as="h3" size="md" mb={2} color="teal.200">
            Condiciones de Privacidad
          </Heading>
          <Text fontSize="md" lineHeight="1.8">
            Este sitio recopila información mínima y necesaria para garantizar la mejor experiencia 
            del usuario. Respetamos tu privacidad y no compartiremos tus datos personales sin tu consentimiento. 
            Para más detalles, consulta nuestra política de privacidad completa.
          </Text>
        </Box>

        <Spacer borderColor="teal.700" />

        {/* License Attribution */}
        <Box>
          <Heading as="h3" size="md" mb={2} color="teal.200">
            Licencia
          </Heading>
          <Text fontSize="sm" lineHeight="1.6">
            Este trabajo,{" "}
            <Link
              href="http://google.com"
              color="teal.300"
              textDecoration="underline"
            >
              Tratamiento de aguas residuales recicladas, que garantice calidad
              y suministro aunado al cumplimiento de objetivos de desarrollo
              sostenible
            </Link>{" "}
            <span style={{ fontStyle: "italic" }}>
                por: Christopher Chantres, Emiliano Olivas, Erick Silva, Ruben Flores,
                y Andrés Acevedo. Esta licenciado bajo:
            </span>{" "}
            <Link
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
              color="teal.300"
              textDecoration="underline"
            >
              CC BY-NC-ND 4.0
            </Link>
            .
          </Text>
          <Box mt={3} display="flex" justifyContent="center" gap={3}>
            <Image
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
              alt="CC"
              height="28px"
            />
            <Image
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
              alt="BY"
              height="28px"
            />
            <Image
              src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
              alt="NC"
              height="28px"
            />
            <Image
              src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
              alt="ND"
              height="28px"
            />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default TerminosPrivacidad;
