import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import CareersPage from "./pages/CareersPage";
import NewsPage from "./pages/NewsPage";
import ContactsPage from "./pages/ContactsPage";
import NearshorePage from "./pages/solutions/NearshorePage";
import OutsourcingPage from "./pages/solutions/OutsourcingPage";
import SoftwarePage from "./pages/solutions/SoftwarePage";
import PrivacyPage from "./pages/PrivPolicyPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Solutions" element={<SolutionsPage />} />
        <Route path="/Careers" element={<CareersPage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/Contacts" element={<ContactsPage />} />
        <Route path="/Nearshore" element={<NearshorePage />} />
        <Route path="/Outsourcing" element={<OutsourcingPage />} />
        <Route path="/Software" element={<SoftwarePage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
