import { Box } from "@chakra-ui/react";
import ObjetivoAgenda2030 from "@/components/ObjetivoAgenda2030";
import Meta from "@/components/Meta";
import TemaDeInvestigacion from "@/components/TemaDeInvestigacion";
import PreguntaYPlanteamiento from "@/components/PreguntaYPlanteamiento";
import PalabrasClave from "@/components/PalabrasClave";
import Conclusion from "@/components/Conclusion";
import TerminosPrivacidad from "@/components/TerminosPrivacidad";
import InformacionAdicional from "@/components/InformacionAdicional";
import SobreNosotros from "@/components/SobreNosotros";
import Menu from "@/components/Menu";
import ListadoRecursosBibliograficos from "@/components/ListadoRecursosBibliograficos";
import EstrategiasDeBusqueda from "@/components/EstrategiasDeBusqueda";

export default function Home() {
  return (
    <Box
    bg={'#1a2c32'}
    minH={'100vh'}
    w={'100vw'}
    pb={10}
    >
      <Menu />
      <ObjetivoAgenda2030 />
      <Meta />
      <TemaDeInvestigacion />
      <PreguntaYPlanteamiento />
      <PalabrasClave />
      <EstrategiasDeBusqueda />
      <ListadoRecursosBibliograficos />
      <Conclusion />
      <TerminosPrivacidad />
      <SobreNosotros />
      <InformacionAdicional />
    </Box>
  );
}
