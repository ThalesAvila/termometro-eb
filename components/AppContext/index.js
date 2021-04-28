import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


const sample1 = {
  "name": "THALES JORGE AVILA COSTA",
  "email": "dev.thales.avila@gmail.com",
  "phone": "+5513991649691",
  "company": "Matchbox Brasil",
  "role": "Frontend Engineer",
  "companySize": "1-100",
  "companySegment": "Consultoria",
  "talentProfile": "Tecnologia",
  "hasCareersWebsite": "true",
  "updateCareersWebsite": "false",
  "hasEmployeeValueProposition": "true",
  "hasGlassdoor": "false",
  "hasLinkedIn": "false",
  "hasInstagram": "true",
  "hasMedium": "true",
  "weeklyPost": "true",
  "hasReferralProgram": "false",
  "employeesPostAbout": "true",
  "employeesEngaged": "true",
  "hasOnlineEvents": "false",
  "greatImpactEvents": "true",
  "partnershipEntity": "true",
  "hasTalentPipeline": "true",
  "hasInboundMarket": "false",
  "diversityInitiatives": "true",
  "hasRecruitmentPrograms": "false",
  "hasAts": "true",
  "jobBoards": "false",
  "hasRmEmployee": "true",
  "proveImpact": "false",
  "hasRmBudget": "true",
  "taBudget": "false",
  "returnOnInvestment": "false"
}

const sample2 = {
  "name": "THALES JORGE AVILA COSTA",
  "email": "dev.thales.avila@gmail.com",
  "phone": "+5513991649691",
  "company": "Matchbox Brasil",
  "role": "Frontend Engineer",
  "companySize": "1-100",
  "companySegment": "Consultoria",
  "talentProfile": "Tecnologia",
  "hasCareersWebsite": "false",
  "updateCareersWebsite": "true",
  "hasEmployeeValueProposition": "false",
  "hasGlassdoor": "false",
  "hasLinkedIn": "true",
  "hasInstagram": "false",
  "hasMedium": "false",
  "weeklyPost": "false",
  "hasReferralProgram": "false",
  "employeesPostAbout": "false",
  "employeesEngaged": "false",
  "hasOnlineEvents": "false",
  "greatImpactEvents": "false",
  "partnershipEntity": "false",
  "hasTalentPipeline": "false",
  "hasInboundMarket": "false",
  "diversityInitiatives": "true",
  "hasRecruitmentPrograms": "false",
  "hasAts": "true",
  "jobBoards": "false",
  "hasRmEmployee": "true",
  "proveImpact": "false",
  "hasRmBudget": "true",
  "taBudget": "false",
  "returnOnInvestment": "false"
}

const sample3 = {
  "name": "THALES JORGE AVILA COSTA",
  "email": "dev.thales.avila@gmail.com",
  "phone": "+5513991649691",
  "company": "Matchbox Brasil",
  "role": "Frontend Engineer",
  "companySize": "1-100",
  "companySegment": "Consultoria",
  "talentProfile": "Tecnologia",
  "hasCareersWebsite": "true",
  "updateCareersWebsite": "true",
  "hasEmployeeValueProposition": "true",
  "hasGlassdoor": "true",
  "hasLinkedIn": "false",
  "hasInstagram": "true",
  "hasMedium": "true",
  "weeklyPost": "true",
  "hasReferralProgram": "true",
  "employeesPostAbout": "true",
  "employeesEngaged": "true",
  "hasOnlineEvents": "true",
  "greatImpactEvents": "true",
  "partnershipEntity": "true",
  "hasTalentPipeline": "true",
  "hasInboundMarket": "false",
  "diversityInitiatives": "true",
  "hasRecruitmentPrograms": "true",
  "hasAts": "true",
  "jobBoards": "true",
  "hasRmEmployee": "true",
  "proveImpact": "false",
  "hasRmBudget": "true",
  "taBudget": "true",
  "returnOnInvestment": "true"
}

export function AppWrapper({ children }) {
  const [leadInfo, updateLeadInfo] = useState({});
  const [leadReport, setLeadReport] = useState({}); 

  return (
    <AppContext.Provider value={{ leadInfo, updateLeadInfo, leadReport, setLeadReport }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}