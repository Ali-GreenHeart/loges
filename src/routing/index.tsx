import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import PasswordProtection from "../components/PasswordProtection";
import Project from "../pages/Project";
import Liceses from "../components/licenses";
import ServiceSingle from "../pages/ServiceSingle";
import ChangeLog from "../pages/ChangeLog";

import TeamPage from "../pages/Team-Page";
import BlogSingle from "../pages/BlogSingle";

const HomePage = lazy(() => import("../pages/Home"));


const WebRouting = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/password-protection" element={<PasswordProtection />} />
        <Route path="/project" element={<Project />} />
        <Route path="/licenses" element={<Liceses />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/change-log" element={<ChangeLog />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blogs/:id" element={<BlogSingle />} />
      </Routes>
    </Suspense>
  );
};

export default WebRouting;
