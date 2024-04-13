import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import CareersPage from './pages/CareersPage';
import NewsPage from './pages/NewsPage';
import ContactsPage from './pages/ContactsPage';
import ErrorPage from './ErrorPage';
import NearshorePage from './pages/solutions/NearshorePage'
import OutsourcingPage from './pages/solutions/OutsourcingPage'
import SoftwarePage from './pages/solutions/SoftwarePage'
import PrivacyPage from './pages/PrivPolicyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/About",
    element: <AboutPage />,
  },
  {
    path: "/Solutions",
    element: <SolutionsPage />,
  },
  {
    path: "/Careers",
    element: <CareersPage />,
  },
  {
    path: "/News",
    element: <NewsPage />,
  },
  {
    path: "/Contacts",
    element: <ContactsPage />,
  },
  {
    path: "/Nearshore",
    element: <NearshorePage />,
  },
  {
    path: "/Outsourcing",
    element: <OutsourcingPage />,
  },
  {
    path: "/Software",
    element: <SoftwarePage />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
