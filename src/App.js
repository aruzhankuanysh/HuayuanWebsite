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
        <Route path="about" element={<AboutPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="nearshore" element={<NearshorePage />} />
        <Route path="outsourcing" element={<OutsourcingPage />} />
        <Route path="software" element={<SoftwarePage />} />
        <Route path="privacyPolicy" element={<PrivacyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
