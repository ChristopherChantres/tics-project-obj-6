import React from "react";
import { Box, Heading, HStack, Text, VStack, Spacer } from "@chakra-ui/react";

const PlanteamientoDelProblema = () => {
  return (
    <Box
      id={'planteamiento-y-pregunta'}
      w="100%"
      p={8}
      mx="auto"
      mt={10}
      rounded="md"
      shadow="md"
    >
      <HStack
      flexDir={{ base: 'column', lg: 'row' }}
      >
        <VStack w={{base: '100%', lg:'35%'}} flex={1}>
          <Heading
            lineHeight={'3rem'}
            as="h3"
            size="lg"
            fontWeight="bold"
            fontSize={'3rem'}
            color="teal.200"
            textAlign="center"
            mb={4}
          >
            Pregunta de Investigaci&oacute;n
          </Heading>
          <Text fontSize={'1.3rem'} color="teal.50" textAlign={'left'} fontWeight={'bold'}>
          &quot;¿C&oacute;mo contribuye el tratamiento de aguas residuales recicladas al suministro 
            de agua potable y al cumplimiento de los Objetivos de Desarrollo Sostenible?&quot;
          </Text>
        </VStack>
        {/* <Spacer /> */}
        <Spacer />
        <VStack align="start" w={{base: '100%', lg:'70%'}} spaceY={4}>
          {/* Título Principal */}
          <Heading as="h2" fontSize={'2rem'} fontWeight="bold" color="teal.300" textDecoration={'underline'}>
            Planteamiento del Problema
          </Heading>

          {/* Tema */}
          <Box>
            <Heading as="h3" fontSize={'1.5rem'} fontWeight="semibold" color="teal.200">
              Tema
            </Heading>
            <Text fontSize={'1.2rem'} color="teal.50" mt={2}>
              Tratamiento de aguas residuales recicladas, que garantice calidad y suministro
              aunado al cumplimiento de objetivos de desarrollo sostenible.
            </Text>
          </Box>

          {/* Introducción */}
          <Box>
            <Heading as="h3" fontSize={'1.5rem'} fontWeight="semibold" color="teal.300">
              Introducción
            </Heading>
            <Text fontSize={'1.2rem'} color="teal.50" mt={2}>
              El agua es un recurso vital para la supervivencia humana, y su acceso seguro y
              asequible es una prioridad global. Sin embargo, más de una décima parte de la
              población mundial aún carece de acceso a fuentes de agua potable seguras. A medida
              que la demanda de agua potable continúa aumentando, se han implementado rigurosos
              tratamientos y controles de calidad para garantizar que las comunidades afectadas
              por la escasez de agua puedan beneficiarse de estos avances. Comprender los factores
              que limitan el acceso al agua segura nos permite desarrollar soluciones más
              efectivas, tanto en términos de tecnologías de tratamiento como en iniciativas
              educativas que promuevan una gestión responsable del recurso y una mayor conciencia
              comunitaria sobre su importancia.
            </Text>
          </Box>

          {/* Descripción del Problema */}
          <Box>
            <Heading as="h3" fontSize={'1.5rem'} fontWeight="semibold" color="teal.300">
              Descripción del Problema
            </Heading>
            <Text fontSize={'1.2rem'} color="teal.50" mt={2}>
              Antes de la adopción de la Agenda 2030, se implementó una iniciativa conocida como
              “Los Objetivos de Desarrollo del Milenio (ODM)”. Aunque fundamentales, estos
              objetivos no abordaron de manera directa el acceso al agua limpia y saneamiento, lo
              que generó riesgos sanitarios considerables. Hoy en día, la gestión eficiente de las
              aguas residuales recicladas es crucial para ampliar el acceso al agua potable,
              garantizar la sostenibilidad ambiental y cumplir con los ODS, específicamente el ODS
              6.
            </Text>
          </Box>

          {/* Justificación */}
          <Box>
            <Heading as="h3" fontSize={'1.5rem'} fontWeight="semibold" color="teal.300">
              Justificación
            </Heading>
            <Text fontSize={'1.2rem'} color="teal.50" mt={2}>
              El tratamiento de aguas residuales es fundamental para lograr el ODS 6. Se estima
              que 2 mil millones de personas consumen agua contaminada, lo que provoca millones
              de enfermedades (Tortajada, 2020). Una política adecuada y una administración
              gubernamental efectiva son esenciales para avanzar en la implementación de soluciones
              sostenibles y garantizar un suministro de agua potable accesible.
            </Text>
          </Box>

          {/* Conclusión y Pregunta de Investigación */}
          <Box>
            <Heading as="h3" fontSize={'1.5rem'} fontWeight="semibold" color="teal.300">
              Conclusión y Pregunta de Investigación
            </Heading>
            <Text fontSize={'1.2rem'} color="teal.50" mt={2}>
              El acceso al agua potable segura y el manejo eficiente de aguas residuales son
              fundamentales para enfrentar los desafíos globales de escasez de recursos hídricos.
              ¿Cómo contribuye el tratamiento de aguas residuales recicladas al suministro de agua
              potable y al cumplimiento de los Objetivos de Desarrollo Sostenible? Esta
              investigación busca identificar las barreras y oportunidades clave para una gestión
              eficiente del agua.
            </Text>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PlanteamientoDelProblema;
