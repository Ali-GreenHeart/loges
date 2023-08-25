import { Stack } from "@mui/material";
import Truck from "../../assets/banner/Photo.svg";
import AboutUs from "../../components/AboutUs";
import PageContainer from "../../components/PageContainer";
import WhatWeDo from "../../components/WWD";
import TeamMemberSection from "../../components/TeamMembersSection";
import Slider from "../../components/Slider";
import PricingCard from "../../components/PricingCard";
import FAQ from "../../components/FAQ";
import Sponsors from "../Team-Page/Sponsors";
const AboutUsPage = () => {
  return (
    <>
      <PageContainer
        bannerSubtitle="About Us"
        bannerTitle="About Our Logistics"
        bannerImage={Truck}>
        <Stack gap={10}>
          <AboutUs />
          <WhatWeDo />
          <TeamMemberSection limit />
          <Slider />
          <PricingCard />
          <FAQ />
        </Stack>
      </PageContainer>

    </>
  );
};

export default AboutUsPage;
