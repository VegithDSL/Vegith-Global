import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import LeadershipPage from "@/pages/LeadershipPage";
import GroupPage from "@/pages/GroupPage";
import ServicesPage from "@/pages/ServicesPage";
import CareersPage from "@/pages/CareersPage";
import ContactPage from "@/pages/ContactPage";

import FinancialDataPages from "@/pages/FinancialDataPages";
import AnnualReturnPage from "@/pages/AnnualReturnPage";
import InvestorEnquiryPage from "@/pages/InvestorEnquiryPage";
import CorporatePoliciesPage from "@/pages/CorporatePoliciesPage"

const queryClient = new QueryClient();

function AppRouter() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* About */}
      <Route path="/about" component={AboutPage} />
      <Route path="/about/leadership" component={LeadershipPage} />
      <Route path="/about/group" component={GroupPage} />

      {/* Services */}
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/:slug" component={ServicesPage} />

      {/* Careers */}
      <Route path="/careers" component={CareersPage} />

      {/* Investor */}
      <Route
        path="/pages/FinancialData"
        component={FinancialDataPages}
      />
      <Route
        path="/investor/annual-return"
        component={AnnualReturnPage}
      />
      <Route
        path="/investor/enquiry"
        component={InvestorEnquiryPage}
      />

      {/* Contact */}
      <Route
  path="/corporate/policies"
  component={CorporatePoliciesPage}
/>

      {/* Contact */}
      <Route path="/contact" component={ContactPage} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <ScrollToTop />
          <AppRouter />
        </WouterRouter>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;