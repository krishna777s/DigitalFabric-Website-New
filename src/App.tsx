import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhyDigitalFabric from "./pages/WhyDigitalFabric";
import TFIFramework from "./pages/TFIFramework";
import AISWITCHFramework from "./pages/AISWITCHFramework";
import AISwitchStoryboards from "./pages/AISwitchStoryboards";
import MarketingSuccessStories from "./pages/MarketingSuccessStories";
import CopygamieFramework from "./pages/CopygamieFramework";
import Insights from "./pages/Insights";
import ISGStudies from "./pages/ISGStudies";
import MindsetMatters from "./pages/MindsetMatters";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-digital-fabric" element={<WhyDigitalFabric />} />
        <Route path="/resources/ti-framework" element={<TFIFramework />} />
        <Route path="/resources/aiswitch-framework" element={<AISWITCHFramework />} />
        <Route path="/resources/aiswitch-storyboards" element={<AISwitchStoryboards />} />
        <Route path="/marketing-success-stories" element={<MarketingSuccessStories />} />
        <Route path="/copygamie-framework-free-use" element={<CopygamieFramework />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/isg-studies-and-brochures" element={<ISGStudies />} />
        <Route path="/mind-matters" element={<MindsetMatters />} />
        <Route path="/mindsetmatters-charts-visuals" element={<MindsetMatters />} />
        <Route path="/resources/mindset-matters" element={<MindsetMatters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
