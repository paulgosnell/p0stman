import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RTLWrapper from './components/RTLWrapper';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import HomeV2 from './pages/HomeV2';
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
import Rhythm from './pages/case-studies/Rhythm';
import ExperienceGift from './pages/case-studies/ExperienceGift';
import ChilledCRM from './pages/case-studies/ChilledCRM';
import Harmony from './pages/case-studies/Harmony';
import Serenity from './pages/case-studies/Serenity';
import Fitlink from './pages/case-studies/Fitlink';
import ClinicBook from './pages/case-studies/ClinicBook';
import BarberBookingSystem from './pages/case-studies/BarberBookingSystem';
import FABBank from './pages/case-studies/FABBank';
import AlArabiya from './pages/case-studies/AlArabiya';
import EtihadAirways from './pages/case-studies/EtihadAirways';
import DoHHealth from './pages/case-studies/DoHHealth';
import BFITWeb3 from './pages/case-studies/BFITWeb3';
import ArabianMalls from './pages/case-studies/ArabianMalls';
import Genieology from './pages/case-studies/Genieology';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';
import SocialShare from './components/SocialShare';
import SocialPreview from './components/SocialPreview';
import Hello from './pages/Hello';

export default function App() {
  return (
    <RTLWrapper>
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/v1" element={<Home />} />
        <Route path="/process" element={<Process />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/projects" element={<CaseStudies />} />
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
        <Route path="/case-study/rhythm" element={<Rhythm />} />
        <Route path="/case-study/experience-a-gift" element={<ExperienceGift />} />
        <Route path="/case-study/chilled-crm" element={<ChilledCRM />} />
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
        <Route path="/case-study/genieology" element={<Genieology />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/links" element={<Links />} />
        <Route path="/support" element={<Support />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/training" element={<Training />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/social-share" element={<SocialShare />} />
        <Route path="/social-preview/:platform/:type" element={<SocialPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </RTLWrapper>
  );
}