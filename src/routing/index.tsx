import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import PasswordProtection from "../components/PasswordProtection";
import Liceses from "../components/licenses";
import ChangeLog from "../pages/ChangeLog";
import Project from "../pages/Project";
import ServiceSingle from "../pages/ServiceSingle";

import WhatWeDo from "../components/WWD";
import AboutUsPage from "../pages/AboutUsPage";
import BlogSingle from "../pages/BlogSingle";
import ContactPage from "../pages/Contact";
import ProjectPage from "../pages/ProjectSingle";
import Services from "../pages/Services";
import TeamPage from "../pages/Team-Page";

const HomePage = lazy(() => import("../pages/Home"));

const WebRouting = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/password-protection" element={<PasswordProtection />} />
        <Route path="/project" element={<Project />} />
        <Route path="/licenses" element={<Liceses />} />
        <Route path="/change-log" element={<ChangeLog />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blogs/:id" element={<BlogSingle />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/project-page" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
};

export default WebRouting;
