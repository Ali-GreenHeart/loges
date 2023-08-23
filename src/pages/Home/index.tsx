import { Box, Container, Stack, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import PlaneSection from "../../components/Plane";
import planeHome from "../../assets/banner/plane_home.png"
import Button from "../../components/Button";

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
          <Typography variant="h2" component="h2" >Your Gateway to any Destination in the World</Typography>
          <Typography>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </Typography>
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
      </PageContainer>
    </>
  );
};

export default HomePage;
