import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";

const referencias = [
  {
    id: "01",
    tipo: "Artículo académico en español de la Biblioteca UDLAP",
    titulo:
      '"EL ACCESO A AGUA LIMPIA Y SANEAMIENTO. UN ANÁLISIS COMPARADO DEL DERECHO AL AGUA DESDE EL DERECHO INTERNACIONAL DE LOS DERECHOS HUMANOS Y DEL DERECHO AMBIENTAL"',
    referencia:
      "Navarro, M. S. (2020). 'El Acceso a Agua Limpia Y Saneamiento. Un Análisis Comparado Del Derecho Al Agua Desde El Derecho Internacional De Los Derechos Humanos Y Del Derecho Ambiental.' Actualidad Jurídica Ambiental, 106, 40–78. https://research-ebsco-com.udlap.idm.oclc.org/linkprocessor/plink?id=3329ea02-503c-3673-9517-c39dcb471626",
    url: "https://research-ebsco-com.udlap.idm.oclc.org/linkprocessor/plink?id=3329ea02-503c-3673-9517-c39dcb471626",
  },
  {
    id: "02",
    tipo: "Artículo académico en inglés de la Biblioteca UDLAP",
    titulo:
      "Applications of deep learning in water quality management: A state-of-the-art review",
    referencia:
      "Wai, K. P., Chia, M. Y., Koo, C. H., Huang, Y. F., & Chong, W. C. (2022). Applications of deep learning in water quality management: A state-of-the-art review. Journal of Hydrology, 613, N.PAG. https://doi-org.udlap.idm.oclc.org/10.1016/j.jhydrol.2022.128332",
    url: "https://doi-org.udlap.idm.oclc.org/10.1016/j.jhydrol.2022.128332",
  },
  {
    id: "03",
    tipo: "Libro electrónico en español",
    titulo:
      "Caracterización de comunidades bacterianas establecidas en un reactor biológico fijo para el tratamiento de efluentes domésticos.",
    referencia:
      "Zúñiga Hernández, E. M., Ramos López, M. Á., Zavala Gómez, C. E., Campos Guillén, J., Ledesma García, J., Arriaga Hurtado, L. G., Amaro Reyes, A., Sandoval Cárdenas, D. I., & Rodríguez Morales, J. A. (2023). Caracterización de comunidades bacterianas establecidas en un reactor biológico fijo para el tratamiento de efluentes domésticos. Nova Scientia, 15(31), 1–25. https://doi-org.udlap.idm.oclc.org/10.21640/ns.v15i31.3095",
    url: "https://doi-org.udlap.idm.oclc.org/10.21640/ns.v15i31.3095",
  },
  {
    id: "04",
    tipo: "Revista digital en español de la Biblioteca UDLAP",
    titulo:
      "Comparación de tecnologías para el tratamiento sostenible de aguas residuales ordinarias en pequeñas comunidades de Costa Rica: demanda de área, costo constructivo y costo de operación y mantenimiento",
    referencia:
      "Centeno Mora, E., & Murillo Marín, A. (2019). Comparación de tecnologías para el tratamiento sostenible de aguas residuales ordinarias en pequeñas comunidades de Costa Rica. Revista Ingeniería, 30(1), 1–24. https://doi.org/10.15517/ri.v30i1.38898",
    url: "https://doi.org/10.15517/ri.v30i1.38898",
  },
  {
    id: "05",
    tipo: "Periódico digital en español de la Biblioteca UDLAP",
    titulo: "Conservación del agua: Singapur va por delante",
    referencia:
      "PressReader.com - digital newspaper & magazine subscriptions. (s. f.-b). PressReader. https://pressreader.com/article/281784219598492",
    url: "https://pressreader.com/article/281784219598492",
  },
  {
    id: "06",
    tipo: "Artículo académico",
    titulo:
      "Contributions of recycled wastewater to clean water and sanitation Sustainable Development Goals",
    referencia:
      "Tortajada, C. (2020). Contributions of recycled wastewater to clean water and sanitation Sustainable Development Goals. npj Clean Water, 3(1). https://doi.org/10.1038/s41545-020-0069-3",
    url: "https://doi.org/10.1038/s41545-020-0069-3",
  },
  {
    id: "07",
    tipo: "Revista digital en inglés de la Biblioteca UDLAP",
    titulo:
      "Decent and sustainable work for the future?: The ILO future of work centenary initiative, the UN 2030 agenda for sustainable development, and the evolution of the meaning of work",
    referencia:
      "Zekić, N., Rombouts, B., & Department of Labour Law and Social Policy. (2020). Decent and sustainable work for the future?: The ILO future of work centenary initiative, the UN 2030 agenda for sustainable development, and the evolution of the meaning of work. UCLA Journal of International Law and Foreign Affairs, 24(2), 317–358. https://research.tilburguniversity.edu/en/publications/cf5388ae-2280-46ba-a206-92d379a6f423",
    url: "https://research.tilburguniversity.edu/en/publications/cf5388ae-2280-46ba-a206-92d379a6f423",
  },
  {
    id: "08",
    tipo: "Artículo académico",
    titulo: "Derecho Constitucional",
    referencia:
      "Silva, J. A. (2023). Derecho Constitucional. Cuestiones Constitucionales, Revista Mexicana de Derecho Constitucional, 1(47), 243–272. https://doi.org/10.22201/iij.24484881e.2022.47.17529",
    url: "https://doi.org/10.22201/iij.24484881e.2022.47.17529",
  },
  {
    id: "09",
    tipo: "Artículo académico",
    titulo:
      "Desalación de agua y justicia energética. La Agenda 2030 para el Desarrollo Sostenible",
    referencia:
      "Nava Escudero, C. (2022). Desalación de agua y justicia energética. La Agenda 2030 para el Desarrollo Sostenible. Cuestiones Constitucionales. Revista Mexicana de Derecho Constitucional, (45).",
    url: "",
  },
  {
    id: "10",
    tipo: "Artículo académico en español de la Biblioteca UDLAP",
    titulo:
      "Desarrollo sostenible a través del nexo agua-energía-alimentos: avances y perspectivas para México",
    referencia:
      "Mahlknecht, J. (2024). Desarrollo sostenible a través del nexo agua-energía-alimentos: avances y perspectivas para México. Ciencia Ergo Sum, 31, 1–9. https://research-ebsco-com.udlap.idm.oclc.org/c/4envev/viewer/pdf/wy3ikzjxyn",
    url: "https://research-ebsco-com.udlap.idm.oclc.org/c/4envev/viewer/pdf/wy3ikzjxyn",
  },
  {
    id: "11",
    tipo: "Artículo académico",
    titulo:
      "Drinking and Natural Mineral Water: Treatment and Quality–Safety Assurance",
    referencia:
      "Kekes, T., Tzia, C., & Kolliopoulos, G. (2023). Drinking and Natural Mineral Water: Treatment and Quality–Safety Assurance. Water, 15(13), 2325. https://doi.org/10.3390/w15132325",
    url: "https://doi.org/10.3390/w15132325",
  },
  {
    id: "12",
    tipo: "Revista digital en inglés de la Biblioteca UDLAP",
    titulo:
      "Empowering Collections-Based Organizations to Participate in Agenda 2030: The 'Our Collections Matter Toolkit'",
    referencia:
      "Ioddo, M., Rosetti, I., McGhie, H., & Pedersoli, J. J. L. (2021). Empowering Collections-Based Organizations to Participate in Agenda 2030: The 'Our Collections Matter Toolkit.' Sustainability, 13(24). https://doi-org.udlap.idm.oclc.org/10.3390/su132413964",
    url: "https://doi-org.udlap.idm.oclc.org/10.3390/su132413964",
  },
  {
    id: "13",
    tipo: "Video",
    titulo: "Goal 6 – Clean water and sanitation",
    referencia:
      "UNStats [@UNStats]. (s. f.). Goal 6 – Clean water and sanitation [Video]. YouTube. Recuperado el 15 de noviembre de 2024 de https://www.youtube.com/watch?v=d6n3G4aQtpA",
    url: "https://www.youtube.com/watch?v=d6n3G4aQtpA",
  },
  {
    id: "14",
    tipo: "Periódico digital en español de la Biblioteca de la UDLAP",
    titulo: "La importancia del Objetivo de Desarrollo Sostenible n°6",
    referencia:
      "PressReader.com - digital newspaper & magazine subscriptions. (s. f.). PressReader. https://pressreader.com/article/282819308983067",
    url: "https://pressreader.com/article/282819308983067",
  },
  {
    id: "15",
    tipo: "Video",
    titulo: "¿Qué es el tratamiento de aguas residuales?",
    referencia:
      "Acqua Consultores. (2022, abril 12). ¿Qué es el tratamiento de aguas residuales? [Video]. YouTube. https://www.youtube.com/watch?v=d6n3G4aQtpA",
    url: "https://www.youtube.com/watch?v=d6n3G4aQtpA",
  },
  {
    id: "16",
    tipo: "Trabajo de conferencia",
    titulo:
      "Revisión de la literatura: Calidad del agua y problemas de salud pública en países en desarrollo.",
    referencia:
      "Muryani, E. (2021). Literature review: Water quality and public health problems in developing countries. AIP Conference Proceedings, 2363(1), 1–6. https://doi-org.udlap.idm.oclc.org/10.1063/5.0061561",
    url: "https://doi-org.udlap.idm.oclc.org/10.1063/5.0061561",
  },
  {
    id: "17",
    tipo: "Tesis digital",
    titulo:
      "Biosíntesis de nanopartículas de plata con extracto de queñua y su aplicación antibacteriana en el afluente de la Planta de Tratamiento de Aguas Residuales del departamento de Cusco, Perú.",
    referencia:
      "Gutiérrez-Sierra, N., Mesco-Aquise, N. J., Maldonado-Farfán, A. R., & Aragón-Mamani, S. (2023). Biosíntesis de nanopartículas de plata con extracto de queñua y su aplicación antibacteriana en el afluente de la Planta de Tratamiento de Aguas Residuales del departamento de Cusco, Perú. Revista Colombiana de Química, 52(3), 11–19. https://doi-org.udlap.idm.oclc.org/10.15446/rev.colomb.quim.v52n3.111932",
    url: "https://doi-org.udlap.idm.oclc.org/10.15446/rev.colomb.quim.v52n3.111932",
  },
  {
    id: "18",
    tipo: "Revista digital en español de la Biblioteca UDLAP",
    titulo:
      "Tratamiento de aguas residuales ordinarias en Costa Rica: perfil tecnológico y perspectivas de sostenibilidad",
    referencia:
      "Mora, E. C., Cruz Zúñiga, N., & Vidal Rivera, P. (2023). Tratamiento de aguas residuales ordinarias en Costa Rica: perfil tecnológico y perspectivas de sostenibilidad. Revista Ingeniería, 34(1), 7–22. https://doi.org/10.15517/ri.v34i1.55222",
    url: "https://doi.org/10.15517/ri.v34i1.55222",
  },
  {
    id: "19",
    tipo: "Artículo académico",
    titulo:
      "Wastewater Treatment and Reuse for Sustainable Water Resources Management: A Systematic Literature Review",
    referencia:
      "Silva, J. A. (2023). Wastewater Treatment and Reuse for Sustainable Water Resources Management: A Systematic Literature Review. Sustainability, 15(14), 10940. https://doi.org/10.3390/su151410940",
    url: "https://doi.org/10.3390/su151410940",
  },
];
 
  

const ListadoRecursosBibliograficos = () => {
  return (
    <Box
        id={'listado-de-recursos-bibliográficos'}
        bg="teal.800"
        color="teal.50"
        p={8}
        mt={10}
        w="90%"
        mx="auto"
        borderRadius="lg"
        shadow="2xl white"
    >
      {/* Section Title */}
      <Heading
        as="h2"
        fontSize="2rem"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        color="teal.200"
      >
        Referencias Bibliográficas
      </Heading>

      {/* Table */}
      <Box as="table" w="100%" borderSpacing="0" borderCollapse="collapse">
        <Box as="thead" bg="teal.700">
          <Box as="tr">
            <Box
              as="th"
              p={4}
              textAlign="left"
              fontSize="lg"
              color="teal.50"
              borderBottom="1px solid teal.600"
              fontWeight={'900'}
            >
              ID
            </Box>
            <Box
              as="th"
              p={4}
              textAlign="left"
              fontSize="lg"
              color="teal.50"
              borderBottom="1px solid teal.600"
              fontWeight={'900'}
            >
              Tipo de Recurso
            </Box>
            <Box
              as="th"
              p={4}
              textAlign="left"
              fontSize="lg"
              color="teal.50"
              borderBottom="1px solid teal.600"
              fontWeight={'900'}
            >
              Título
            </Box>
            <Box
              as="th"
              p={4}
              textAlign="left"
              fontSize="lg"
              color="teal.50"
              borderBottom="1px solid teal.600"
              fontWeight={'900'}
            >
              Referencia en APA
            </Box>
          </Box>
        </Box>
        <Box as="tbody">
          {referencias.map((ref) => (
            <Box
              as="tr"
              key={ref.id}
              // _hover={{ bg: "teal.600", cursor: 'pointer' }}
              borderBottom="1px solid teal.600"
            >
              <Box as="td" p={4} fontSize="sm">
                {ref.id}
              </Box>
              <Box as="td" p={4} fontSize="sm">
                {ref.tipo}
              </Box>
              <Box as="td" p={4} fontSize="sm">
                {ref.titulo}
              </Box>
              <Box as="td" p={4} fontSize="sm">
                <Link href={ref.url} color={'blue.400'} fontWeight={'bold'} _hover={{bg: 'teal.100'}} p={'2'} borderRadius={'10px'} target={'_blank'}>
                  {ref.referencia}
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ListadoRecursosBibliograficos;
