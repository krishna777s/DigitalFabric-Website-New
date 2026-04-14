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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-digital-fabric" element={<WhyDigitalFabric />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/tfi" element={<TFIFramework />} />  
        <Route path="/awswitch" element={<AISWITCHFramework />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
