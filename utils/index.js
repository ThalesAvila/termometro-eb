import { questionData } from "../data";

export const calculateScore = (leadInfo) => {
    console.log({ leadInfo });
    const score = {
      general: {
        rawValue: 0,
        value: 0,
        stage: '',
      },
      employerBrand: {
        rawValue: 0,
        value: 0,
        stage: '',
        responses: [],
      },
      internalExternalEngagement: {
        rawValue: 0,
        value: 0,
        stage: '',
        responses: [],
      },
      talentJourney: {
        rawValue: 0,
        value: 0,
        stage: '',
        responses: [],
      },
      structureMetrics: {
        rawValue: 0,
        value: 0,
        stage: '',
        responses: [],
      }
    };

    const { 
      hasCareersWebsite, 
      updateCareersWebsite, 
      hasEmployeeValueProposition, 
      hasGlassdoor, 
      hasLinkedIn, 
      hasInstagram, 
      hasMedium,
      weeklyPost,
      hasReferralProgram,
      employeesPostAbout,
      employeesEngaged,
      hasOnlineEvents,
      greatImpactEvents,
      partnershipEntity,
      hasTalentPipeline,
      hasInboundMarket,
      diversityInitiatives,
      hasRecruitmentPrograms,
      hasAts,
      jobBoards,
      hasRmEmployee,
      proveImpact,
      hasRmBudget,
      taBudget,
      returnOnInvestment,
    } = leadInfo;

    score.employerBrand.rawValue = 
    ((hasCareersWebsite === 'true') * 2) +
    ((updateCareersWebsite === 'true') * 1) +
    ((hasEmployeeValueProposition === 'true') * 1) +
    ((hasGlassdoor === 'true') * 1) +
    ((hasLinkedIn  === 'true') * 2) +
    ((hasInstagram === 'true') * 1) +
    ((hasMedium === 'true') * 1) +
    ((weeklyPost === 'true') * 1);

    score.employerBrand.responses = questionData.employerBrand.map(question => {
      return leadInfo[question.inputName] === 'true'
    });

    score.internalExternalEngagement.rawValue = 
    ((hasReferralProgram === 'true') * 1) +
    ((employeesPostAbout === 'true') * 1) +
    ((employeesEngaged === 'true') * 1) +
    ((hasOnlineEvents === 'true') * 1) +
    ((greatImpactEvents === 'true') * 1) +
    ((partnershipEntity === 'true') * 1)

    score.internalExternalEngagement.responses = questionData.internalExternalEngagement
      .map(question => {
        return leadInfo[question.inputName] === 'true'
      });

    score.talentJourney.rawValue = 
    ((hasTalentPipeline  === 'true') * 1) +
    ((hasInboundMarket === 'true') * 1) +
    ((diversityInitiatives === 'true') * 2) +
    ((hasRecruitmentPrograms === 'true') * 2) +
    ((hasAts === 'true') * 2) +
    ((jobBoards === 'true') * 1)

    score.talentJourney.responses = questionData.talentJourney
      .map(question => {
        return leadInfo[question.inputName] === 'true'
      });

    score.structureMetrics.rawValue = 
    ((hasRmEmployee === 'true') * 2) +
    ((proveImpact === 'true') * 1) +
    ((hasRmBudget === 'true') * 2) +
    ((taBudget  === 'true') * 1) +
    ((returnOnInvestment === 'true') * 1)

    score.structureMetrics.responses = questionData.structureMetrics
      .map(question => {
        return leadInfo[question.inputName] === 'true'
      });
 
    const generalScore = 
    score.employerBrand.rawValue +
    score.internalExternalEngagement.rawValue +
    score.talentJourney.rawValue +
    score.structureMetrics.rawValue;

    score.employerBrand.value = Math.round(score.employerBrand.rawValue * 10);
    score.internalExternalEngagement.value = Math.round(score.internalExternalEngagement.rawValue * 100 / 6);
    score.talentJourney.value = Math.round(score.talentJourney.rawValue * 100 / 9);
    score.structureMetrics.value = Math.round(score.structureMetrics.rawValue * 100 / 7);
    
    if(generalScore <= 16 ) {
      score.general.stage = 'survival';
    } else if (generalScore <= 26) {
      score.general.stage = 'optimization';
    } else {
      score.general.stage = 'prosperity';
    }
    console.log({ score });
    return score;
}