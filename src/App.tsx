import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import RTLWrapper from './components/RTLWrapper';
import ScrollToTop from './components/ScrollToTop';
import { TrackingProvider } from './hooks/useTracking';

import Home from './pages/Home';
import ReportsAdmin from './pages/admin/ReportsAdmin';
import ClientsAdmin from './pages/admin/ClientsAdmin';
import CRMAdmin from './pages/admin/CRMAdmin';
import PrivacyPage from './pages/privacy';
import HomeV2 from './pages/HomeV2';
import HomeV3 from './pages/HomeV3';
import Process from './pages/Process';
import CaseStudies from './pages/CaseStudies';
import Website from './pages/Website';
import Guide from './pages/Guide';
import GuideContent from './pages/guide/GuideContent';
import ChapterContent from './pages/guide/ChapterContent';
import WorkOrderProposal from './pages/proposals/documents/WorkOrderProposal';
import Training from './pages/Training';
import Contract from './pages/Contract';
import Invoice from './pages/Invoice';
import ChristmasCard from './pages/ChristmasCard';
import GenericProposal from './pages/proposals/GenericProposal';
import ClientProposal from './pages/proposals/ClientProposal';
import Proposals from './pages/Proposals';
import About from './pages/About';
import PaulGosnell from './pages/PaulGosnell';
import Why from './pages/Why';
import Support from './pages/Support';
import Affiliate from './pages/Affiliate';
import AIAgents from './pages/AIAgents';
import MobileApp from './pages/MobileApp';
import Retainer from './pages/Retainer';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import ContactPage from './pages/ContactPage';
import GuideAdmin from './pages/admin/GuideAdmin';
import FractionalCPO from './pages/FractionalCPO';
import AIPlatformDev from './pages/AIPlatformDev';
import ProductStrategy from './pages/ProductStrategy';
import DigitalTransformation from './pages/DigitalTransformation';
import TokenManagement from './pages/admin/TokenManagement';
import MessagesAdmin from './pages/admin/MessagesAdmin';
import InvoicingAdmin from './pages/admin/InvoicingAdmin';
import ContractsAdmin from './pages/admin/ContractsAdmin';
import NewInvoice from './pages/admin/NewInvoice';
import NewContract from './pages/admin/NewContract';
import EditInvoice from './pages/admin/EditInvoice';
import Links from './pages/Links';
import HealthLanding from './pages/HealthLanding';
import Rhythm from './pages/case-studies/RhythmLuxury';
import ExperienceGift from './pages/case-studies/ExperienceGiftLuxury';
import ChilledCRM from './pages/case-studies/ChilledCRMLuxury';
import ChilledSites from './pages/case-studies/ChilledSitesLuxury';
import Harmony from './pages/case-studies/HarmonyLuxury';
import Serenity from './pages/case-studies/SerenityLuxury';
import Fitlink from './pages/case-studies/FitlinkLuxury';
import ClinicBook from './pages/case-studies/ClinicBookLuxury';
import BarberBookingSystem from './pages/case-studies/BarberBookingLuxury';
import FABBank from './pages/case-studies/FABBankLuxury';
import AlArabiya from './pages/case-studies/AlArabiyaLuxury';
import EtihadAirways from './pages/case-studies/EtihadAirwaysLuxury';
import DoHHealth from './pages/case-studies/DoHHealthLuxury';
import BFITWeb3 from './pages/case-studies/BFITWeb3Luxury';
import ArabianMalls from './pages/case-studies/ArabianMallsLuxury';
import Genieology from './pages/case-studies/GenieologyLuxury';
import MamoriHealthOS from './pages/case-studies/MamoriHealthOSLuxury';
import LuxuryTravelSweden from './pages/case-studies/LuxuryTravelSwedenLuxury';
import CoachOS from './pages/case-studies/CoachOSLuxury';
import YachtOS from './pages/case-studies/YachtOS';
import Pathfinder from './pages/case-studies/Pathfinder';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';
import SocialShare from './components/SocialShare';
import SocialPreview from './components/SocialPreview';
import Hello from './pages/Hello';
import Services from './pages/Services';
import AIPlaybook from './pages/AIPlaybook';
import OnePageApp from './pages/OnePageApp';
import OnePager from './pages/OnePager';
import DeliveryPage from './pages/DeliveryPage';
import FounderLaunchPackage from './pages/FounderLaunchPackage';
import ClarityPitchDeck from './components/ClarityPitchDeck';
import VoiceAgentDemo from './pages/VoiceAgentDemo';
import SalesProspectDemo from './pages/SalesProspectDemo';

export default function App() {
  return (
    <RTLWrapper>
      <TrackingProvider>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
            <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/v2" element={<HomeV2 />} />
          <Route path="/v3" element={<HomeV3 />} />
          <Route path="/process" element={<Process />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/projects" element={<CaseStudies />} />
          <Route path="/health" element={<HealthLanding />} />
          <Route path="/services" element={<Services />} />
          <Route path="/website" element={<Website />} />
          <Route path="/fractional-cpo" element={<FractionalCPO />} />
          <Route path="/ai-platform-development" element={<AIPlatformDev />} />
          <Route path="/product-strategy" element={<ProductStrategy />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/content" element={<GuideContent />} />
          <Route path="/guide/content/:id" element={<ChapterContent />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/proposals/documents/work-order-proposal" element={<WorkOrderProposal />} />
          <Route path="/contracts/:id" element={<Contract />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/proposals/generic" element={<GenericProposal />} />
          <Route path="/christmas" element={<ChristmasCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/paulgosnell" element={<PaulGosnell />} />
          <Route path="/why" element={<Why />} />
          <Route path="/proposals/client/:id" element={<ClientProposal />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/retainer" element={<Retainer />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/guide" element={<GuideAdmin />} />
          <Route path="/admin/guide/tokens" element={<TokenManagement />} />
          <Route path="/admin/messages" element={<MessagesAdmin />} />
          <Route path="/admin/contracts" element={<ContractsAdmin />} />
          <Route path="/admin/contracts/new" element={<NewContract />} />
          <Route path="/admin/invoicing" element={<InvoicingAdmin />} />
          <Route path="/admin/invoicing/new" element={<NewInvoice />} />
          <Route path="/admin/invoicing/edit/:id" element={<EditInvoice />} />
          <Route path="/admin/clients" element={<ClientsAdmin />} />
          <Route path="/admin/crm" element={<CRMAdmin />} />
          <Route path="/admin/reports" element={<ReportsAdmin />} />
          <Route path="/case-study/rhythm" element={<Rhythm />} />
          <Route path="/case-study/experience-a-gift" element={<ExperienceGift />} />
          <Route path="/case-study/chilled-crm" element={<ChilledCRM />} />
          <Route path="/case-study/chilled-sites" element={<ChilledSites />} />
          <Route path="/case-study/harmony" element={<Harmony />} />
          <Route path="/case-study/serenity" element={<Serenity />} />
          <Route path="/case-study/fitlink" element={<Fitlink />} />
          <Route path="/case-study/clinic-book" element={<ClinicBook />} />
          <Route path="/case-study/barber-booking" element={<BarberBookingSystem />} />
          <Route path="/case-study/fab-bank" element={<FABBank />} />
          <Route path="/case-study/al-arabiya" element={<AlArabiya />} />
          <Route path="/case-study/etihad-airways" element={<EtihadAirways />} />
          <Route path="/case-study/doh-health" element={<DoHHealth />} />
          <Route path="/case-study/bfit-web3" element={<BFITWeb3 />} />
          <Route path="/case-study/arabian-malls" element={<ArabianMalls />} />
          <Route path="/case-study/arabian-center" element={<ArabianMalls />} />
          <Route path="/case-study/genieology" element={<Genieology />} />
          <Route path="/case-study/mamori-healthos" element={<MamoriHealthOS />} />
          <Route path="/case-study/luxury-travel-sweden" element={<LuxuryTravelSweden />} />
          <Route path="/case-study/coach-os" element={<CoachOS />} />
          <Route path="/case-study/yachtos" element={<YachtOS />} />
          <Route path="/case-study/pathfinder" element={<Pathfinder />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/links" element={<Links />} />
          <Route path="/support" element={<Support />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/training" element={<Training />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/ai-playbook" element={<AIPlaybook />} />
          <Route path="/one-pager" element={<OnePageApp />} />
          <Route path="/pitch" element={<OnePager />} />
          <Route path="/founder-launch-package" element={<FounderLaunchPackage />} />
          <Route path="/clarity" element={<ClarityPitchDeck />} />
          <Route path="/voice-agent-demo" element={<VoiceAgentDemo />} />
          <Route path="/sales-prospect-demo" element={<SalesProspectDemo />} />
          <Route path="/delivery-for/:agencySlug" element={<DeliveryPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/social-share" element={<SocialShare />} />
          <Route path="/social-preview/:platform/:type" element={<SocialPreview />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
        </div>
      </TrackingProvider>
    </RTLWrapper>
  );
}