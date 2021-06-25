import { useState, useEffect, useMemo } from 'react'
import gql from 'graphql-tag';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import {
  Graph,
  Title,
  Waves,
  Container,
  Column,
  Paragraph,
  View,
  DataBox,
} from "@/components/index";
import parseLeadInfo from 'utils/parseLeadInfo';
import { calculateScore } from '../../utils';
import { dynamicReport, dynamicReportResponses } from "../../data";
import { endpoint } from 'config';

const GET_LEAD_QUERY = gql`
  query GET_LEAD_QUERY($id: ID!) {
    Lead(where: { id: $id }) { 
      company
      role
      companySize
      companySegment
      talentProfile
      hasCareersWebsite
      updateCareersWebsite
      hasEmployeeValueProposition
      hasGlassdoor
      hasLinkedIn
      hasInstagram
      hasMedium
      weeklyPost
      hasReferralProgram
      employeesPostAbout
      employeesEngaged
      hasOnlineEvents
      greatImpactEvents
      partnershipEntity
      hasTalentPipeline
      hasInboundMarket
      diversityInitiatives
      hasRecruitmentPrograms
      hasAts
      jobBoards
      hasRmEmployee
      proveImpact
      hasRmBudget
      taBudget
      returnOnInvestment
    }
  }
`;
  
export default function Report(props) {
  const [leadReport, setLeadReport] = useState(undefined)

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

  useEffect(() => {
    setLeadReport(calculateScore(props.data));
  }, [props.data]);

  return (
    <>
      <Waves 
        small
        salmon={leadReport?.general?.stage === 'survival'}
        yellow={leadReport?.general?.stage === 'optimization'}
        green={leadReport?.general?.stage === 'prosperity'}
      >
        <Container type="report">
          <View width="41vw" padding="9vw 0 0 0">
            <Title
              type="report-hero"
              color="white"
              title1="SEU TERMÔMETRO DE "
              title2="EMPLOYER BRANDING "
              title3="ESTA AQUI!"
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
              <Paragraph highlight>
              {dynamicReport[1][leadReport?.general?.stage]}
              </Paragraph>
            </View>
          </View>
        </Column>
        <Column big padding="0 0 0 8vw">
          <View width="35vw" height="18.5vw">
            <img
              src="/assets/img/termometro.png"
              srcSet={`
                  /assets/img/termometro.png 0.5x,
                  /assets/img/termometro.png 0.75x,
                  /assets/img/termometro.png 1.5x,
                  /assets/img/termometro.png 2x,
                  /assets/img/termometro.png 2.5x,
                `}
              layout="responsive"
            />
          </View>
        </Column>
        <Column full>
          <View reportText width="60vw" margin="8vw 0" cookie>
            <Paragraph>
              {dynamicReport[2][leadReport?.general?.stage]}
            </Paragraph>
          </View>
        </Column>
        <Column full>
          <View flex around width="100%" margin="4vw 0 6vw 0">
            <Graph
              value={leadReport?.employerBrand?.value}
              color="purple"
              title="presença da marca empregadora"
            />
            <Graph
              value={leadReport?.internalExternalEngagement?.value}
              color="survival"
              title="engajamento interno e externo"
            />
            <Graph
              value={leadReport?.talentJourney?.value} 
              color="yellow" 
              title="jornada do Talento" />
            <Graph
              value={leadReport?.structureMetrics?.value}
              color="prosperity"
              title="estrutura do time e métricas"
            />
          </View>
        </Column>
        <DataBox
          collapsableData={employerBrandResponses}
          title1="Presença da marca empregadora"
          title2=""
          graphValue={leadReport?.employerBrand?.value}
          color="purple"
          paragraph={dynamicReport[3][leadReport?.general?.stage]}
        />
        <View flex around width="100%" margin="6vw 0 0 0" />
        <DataBox
          collapsableData={internalExternalEngagementResponses}
          title1="Engajamento interno e externo "
          graphValue={leadReport?.internalExternalEngagement?.value}
          color="survival"
          paragraph={dynamicReport[4][leadReport?.general?.stage]}
        />
        <View flex around width="100%" margin="6vw 0 0 0" />
        <DataBox
          collapsableData={talentJourneyResponses}
          title1="Jornada do talento "ywnrds
          graphValue={leadReport?.talentJourney?.value} 
          color="optimization"
          paragraph={dynamicReport[5][leadReport?.general?.stage]}
        />
        <View flex around width="100%" margin="6vw 0 0 0" />
        <DataBox
          collapsableData={structureMetricsResponses}
          title1="Estrutura do time de métrica"
          graphValue={leadReport?.structureMetrics?.value} 
          color="prosperity"
          paragraph={dynamicReport[6][leadReport?.general?.stage]}
        />
      </Container>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query

  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_LEAD_QUERY,
    variables: {
      id
    }
  })

  const parsedLeadInfo = parseLeadInfo(data.Lead, true)

  return {
    props: {
      data: parsedLeadInfo
    }
  }
}