import { Box, Container, Stack, Typography } from "@mui/material";
import planeHome from "../../assets/banner/plane_home.png";
import antalya from "../../assets/antalya.png";
import ContainerHomeImg from "../../assets/home.png";
import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import PlaneSection from "../../components/Plane";
import Slider from "../../components/Slider";
import TeamMemberSection from "../../components/TeamMembersSection";
import WhatWeDo from "../../components/WWD";
import WhyUs from "../../components/WhyUs";
import BlogCardSection from "../../components/BlogCardSection";
import TransportingAcross from "../../components/TransportingAcross";
import ContactHomepage from "../../components/ContactHomepage";

const HomeBanner = () => {
  return (
    <Box
      sx={{
        background: `url("${planeHome}") no-repeat`,
        backgroundSize: 'cover',
        py: 10
      }}>
      <Stack justifyContent="center" alignItems="flex-start" maxWidth="lg" mx="auto" sx={{ height: '90vh', }}>
        <Container maxWidth="sm" sx={{ mx: '0', color: 'white' }}>
          <Typography component="p" sx={(t) => ({ backgroundColor: t.palette.secondary.light, borderLeft: `4px solid ${t.palette.primary.main}`, fontSize: 14, p: "3px", px: 2, width: 'fit-content' })}>
            Logistics & Supply Chain Solutions
          </Typography>
          <Typography my={2} variant="h2" fontWeight={700} component="h2" >Your Gateway to any Destination in the World</Typography>
          <Typography mb={3}>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </Typography>
          <Button isPrimary title="Explore More" />
        </Container>
      </Stack>
    </Box>
  )
}

const HomePage = () => {
  return (
    <>
      <PageContainer
        customizedBanner={<HomeBanner />}
      >
        <WhatWeDo />
        <Box sx={{
          height: 340,
          backgroundImage: `url("${ContainerHomeImg}")`,
          backgroundSize: 'cover',
          position: 'relative',
          top: 200,
          zIndex: -1
        }}></Box>
        <WhyUs />
        <TransportingAcross />
        <Slider />
        <PlaneSection />
        <TeamMemberSection limit />

        <ContactHomepage />

        <BlogCardSection limit />
        <Box
          sx={{
            background: `url("${antalya}") center`,
            backgroundSize: 'cover',
            height: 320,
            mb: -10,
            mt: 6
          }}
        ></Box>
      </PageContainer>
    </>
  );
};

export default HomePage;
