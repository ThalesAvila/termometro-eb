import { useEffect, useMemo } from 'react';
import { useRouter } from "next/router";

import {
  Graph,
  Title,
  Waves,
  Container,
  Column,
  Paragraph,
  View,
  DataBox,
  Button
} from "@/components/index";
import { calculateScore } from '../../utils';
import { dynamicReport, dynamicReportResponses } from "../../data";
import { useAppContext } from '@/components/AppContext';

export default function Report() {
  const router = useRouter()
  const { id } = router.query
  const { leadInfo, leadReport, setLeadReport } = useAppContext();
  
  useEffect(() => {
    setLeadReport(calculateScore(leadInfo));
  }, [leadInfo]);

  const employerBrandResponses = useMemo(() => {
    return dynamicReportResponses?.employerBrand.map((response, i) => {
      if(leadReport?.employerBrand?.responses[i]) {
        response.isPositive = true;
      } else {
        response.isPositive = false;
      }
      return response;
    })
  });

  const internalExternalEngagementResponses = useMemo(() => {
    return dynamicReportResponses?.internalExternalEngagement.map((response, i) => {
      if(leadReport?.internalExternalEngagement?.responses[i]) {
        response.isPositive = true;
      } else {
        response.isPositive = false;
      }
      return response;
    })
  });

  const talentJourneyResponses = useMemo(() => {
    return dynamicReportResponses?.talentJourney.map((response, i) => {
      if(leadReport?.talentJourney?.responses[i]) {
        response.isPositive = true;
      } else {
        response.isPositive = false;
      }
      return response;
    })
  });

  const structureMetricsResponses = useMemo(() => {
    return dynamicReportResponses?.structureMetrics.map((response, i) => {
      if(leadReport?.structureMetrics?.responses[i]) {
        response.isPositive = true;
      } else {
        response.isPositive = false;
      }
      return response;
    })
  });

  return (
    <>
      <Waves 
        small
        salmon={leadReport?.general?.stage === 'survival'}
        yellow={leadReport?.general?.stage === 'optimization'}
        green={leadReport?.general?.stage === 'prosperity'}
      >
        <Container type="report">
          <View width="41vw" padding="3vw 0 0 0">
            <Title
              type="report-hero"
              color="white"
              title1="SEU TERMÔMETRO DE "
              title2="EMPLOYER BRANDING "
              title3="ESTÁ AQUI!"
            />
          </View>
        </Container>
      </Waves>
      <Container type="report">
        <Column small padding="0 3vw 0 0">
          <View>
            <Title
              color={leadReport?.general?.stage}
              type="report-title"
              title1={dynamicReport[0][leadReport?.general?.stage]}
            />
            <View reportSubText width="24vw">
              <Paragraph highlight textAlign="start">
                {dynamicReport[1][leadReport?.general?.stage]}
              </Paragraph>
            </View>
          </View>
        </Column>
        <Column big padding="0 0 0 8vw">
          <View width="35vw" height="18.5vw">
            <img
              src={`/assets/img/${leadReport?.general?.stage}.png`}
              srcSet={`
                /assets/img/${leadReport?.general?.stage}.png 0.5x,
                /assets/img/${leadReport?.general?.stage}.png 0.75x,
                /assets/img/${leadReport?.general?.stage}.png 1.5x,
                /assets/img/${leadReport?.general?.stage}.png 2x,
                /assets/img/${leadReport?.general?.stage}.png 2.5x,
                /assets/img/${leadReport?.general?.stage}.png 2.8x,
                /assets/img/${leadReport?.general?.stage}.png 3x,
              `}
              layout="responsive"
            />
          </View>
        </Column>
        <Column full>
          <View reportText width="60vw" margin="8vw 0" cookie>
            <Paragraph textAlign="start">
              {dynamicReport[2][leadReport?.general?.stage]}
            </Paragraph>
          </View>
        </Column>
        <Column full>
          <View flex around width="100%" margin="4vw 0 6vw 0">
            <Graph
              value={leadReport.employerBrand?.value}
              color="purple"
              title="presença da marca empregadora"
            />
            <Graph
              value={leadReport.internalExternalEngagement?.value}
              color="survival"
              title="engajamento interno e externo"
            />
            <Graph 
              value={leadReport.talentJourney?.value} 
              color="optimization" 
              title="jornada do Talento" />
            <Graph
              value={leadReport.structureMetrics?.value} 
              color="prosperity"
              title="estrutura do time e métricas"
            />
          </View>
        </Column>
        <DataBox
          collapsableData={employerBrandResponses}
          title1="Presença da marca empregadora "
          title2=""
          graphValue={leadReport.employerBrand?.value}
          color="purple"
          paragraph={dynamicReport[3][leadReport?.general?.stage]}
        />
        <View flex around width="100%" margin="6vw 0 0 0" />
        <DataBox
          collapsableData={internalExternalEngagementResponses}
          title1="Engajamento interno e externo "
          graphValue={leadReport.internalExternalEngagement?.value}
          color="survival"
          paragraph={dynamicReport[4][leadReport?.general?.stage]}
        />
        <View flex around width="100%" margin="6vw 0 0 0" />
        <DataBox
          collapsableData={talentJourneyResponses}
          title1="Jornada do talento "ywnrds
          graphValue={leadReport.talentJourney?.value} 
          color="optimization"
          paragraph={dynamicReport[5][leadReport?.general?.stage]}
        />
        <View flex around width="100%" margin="6vw 0 0 0" />
        <DataBox
          collapsableData={structureMetricsResponses}
          title1="Estrutura do time de métrica"
          graphValue={leadReport.structureMetrics?.value} 
          color="prosperity"
          paragraph={dynamicReport[6][leadReport?.general?.stage]}
        />
      </Container>
      <View flex around width="100%" margin="6vw 0 0 0" />
      {/* <Waves purple /> */}
      <View padding="0 0 2vw 0" style={{ display: 'flex', justifyContent:'center' }}>
        <Button
          as="a"
          href="https://materiais.matchboxbrasil.com/especialista"
          target="_blank"
        >
          Fale com especialista
        </Button>
        <Button
          style={{ marginLeft: 16 }}
          as="a"
          target="_blank"
          download="report.pdf"
          href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/pdf?id=${id}`}
        >
          Gerar PDF
        </Button>
      </View>
    </>
  );
}
