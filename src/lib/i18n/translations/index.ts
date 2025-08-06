import { commonTranslations } from './common';
import { servicesTranslations } from './services';
import { caseStudiesTranslations } from './caseStudies';
import { aboutTranslations } from './about';
import { contactTranslations } from './contact';
import { trainingTranslations } from './training';
import { websiteTranslations } from './website';
import { mobileAppTranslations } from './mobileApp';
import { aiAgentsTranslations } from './aiAgents';
import { supportTranslations } from './support';
import { retainerTranslations } from './retainer';
import { legalTranslations } from './legal';
import { homeTranslations } from './home';
import { footerTranslations } from './footer';

export const translations = {
  ar: {
    ...commonTranslations.ar,
    ...homeTranslations.ar,
    ...servicesTranslations.ar,
    ...caseStudiesTranslations.ar,
    ...aboutTranslations.ar,
    ...contactTranslations.ar,
    ...trainingTranslations.ar,
    ...websiteTranslations.ar,
    ...mobileAppTranslations.ar,
    ...aiAgentsTranslations.ar,
    ...supportTranslations.ar,
    ...retainerTranslations.ar,
    ...legalTranslations.ar,
    ...footerTranslations.ar,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...servicesTranslations.en,
    ...caseStudiesTranslations.en,
    ...aboutTranslations.en,
    ...contactTranslations.en,
    ...trainingTranslations.en,
    ...websiteTranslations.en,
    ...mobileAppTranslations.en,
    ...aiAgentsTranslations.en,
    ...supportTranslations.en,
    ...retainerTranslations.en,
    ...legalTranslations.en,
    ...footerTranslations.en,
  }
};