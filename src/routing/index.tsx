import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Loading from "../components/Loading";
import Project from "../pages/Project";

const HomePage = lazy(() => import("../pages/Home"));


const WebRouting = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<Project/>}/>
                
            </Routes>
        </Suspense>
    );
};

export default WebRouting;
