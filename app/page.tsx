import { Box } from "@chakra-ui/react";
import ObjetivoAgenda2030 from "@/components/ObjetivoAgenda2030";
import Meta from "@/components/Meta";
import TemaDeInvestigacion from "@/components/TemaDeInvestigacion";
import PreguntaYPlanteamiento from "@/components/PreguntaYPlanteamiento";
import PalabrasClave from "@/components/PalabrasClave";

export default function Home() {
  return (
    <Box
      bg={'#1a2c32'}
      minH={'100vh'}
      w={'100vw'}
      py={10}
    >
      <ObjetivoAgenda2030 />
      <Meta />
      <TemaDeInvestigacion />
      <PreguntaYPlanteamiento />
      <PalabrasClave />
    </Box>
  );
}
