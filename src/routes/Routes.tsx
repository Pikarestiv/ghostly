import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "@pgs/HomePage";
// import ContactPage from "@pgs/ContactPage";
// import NotFoundPage from "@pgs/NotFoundPage";
import HomePage from "../components/pages/HomePage";
import ContactPage from "../components/pages/ContactPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
