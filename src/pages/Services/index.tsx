import "swiper/css";
import serviceBanner from "../../assets/banner/service-single-banner.png";
import PageContainer from "../../components/PageContainer";
import Slider from "../../components/Slider";
import { Grid, Stack } from "@mui/material";
import WhatWeDo from "../../components/WWD";
import HowWeWork from "../../components/HowWeWork";
import WhyUsPriority from "../../components/WhyUsPriority";
import StatisticFooter from "../../components/StatisticFooter";

const Services = () => {
  return (
    <PageContainer
      bannerImage={serviceBanner}
      bannerSubtitle="Services"
      bannerTitle="Our Logistics Service">
      <Stack gap={10}>
        <WhatWeDo />
        <HowWeWork />
        <Slider />
        <Grid container mt={3}>
          <Grid item md={6} sm={6} xs={12}>
            <StatisticFooter count={1294} info="Delivered Packages" />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <StatisticFooter count={3594} info="Satisfied Clients" />
          </Grid>
        </Grid>
      </Stack>
    </PageContainer >
  );
};

export default Services;
