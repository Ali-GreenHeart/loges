import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import MainImg from "../../assets/Team-Page/Containers.png";
import SecondImg from "../../assets/Team-Page/Truck.png";
import BannerImg from "../../assets/Team-Page/BannerTeamPage.png";
import Person1 from "../../assets/Team-Page/Person1.png";
import Person2 from "../../assets/Team-Page/Person2.png";
import Person3 from "../../assets/Team-Page/Person3.png";
import Person4 from "../../assets/Team-Page/Person4.png";
import Person5 from "../../assets/Team-Page/Person5.png";
import Person6 from "../../assets/Team-Page/Person6.png";
import PageContainer from "../../components/PageContainer";
import SectionHeader from "../../components/SectionHeader";
import Members from "./Members";
import userIcon from "../../assets/Team-Page/UserIcon.png";
import HourglassIcon from "../../assets/Team-Page/HourglassIcon .png";

function Team() {
  return (
    <PageContainer
      bannerImage={BannerImg}
      bannerTitle="Our Team"
      bannerSubtitle="Team"
    >
      <Container>
        <SectionHeader
          heading={"The Transporters"}
          subheading={"Meet Expert Team"}
        />
        <Stack
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
          gap={5}
        >
          <Members
            imgSrc={Person1}
            name="Jessca Arrow"
            job="Designer"
            facebookLink="guya"
            linkedInLink="guya2"
            twitterLink="sfdg"
          />
          <Members
            imgSrc={Person2}
            name="Kathleen Smith"
            job="Designer"
            facebookLink="guya"
            linkedInLink="guya2"
            instagramLink="sfdg"
          />
          <Members
            imgSrc={Person3}
            name="Rebecca Tylor"
            job="Designer"
            facebookLink="guya"
            linkedInLink="guya2"
          />
          <Members
            imgSrc={Person4}
            name="Rebecca Tylor"
            job="Designer"
            facebookLink="guya"
            linkedInLink="guya2"
          />
          <Members
            imgSrc={Person5}
            name="Rebecca Tylor"
            job="Designer"
            facebookLink="guya"
            linkedInLink="guya2"
          />
          <Members
            imgSrc={Person6}
            name="Rebecca Tylor"
            job="Designer"
            facebookLink="guya"
            linkedInLink="guya2"
          />
        </Stack>

        <Container
          maxWidth="xl"
          sx={{
            padding: "10px 10px 50px 10px",
          }}
        >
          <Grid
            container
            spacing={5}
            justifyContent={{ md: "space-evenly", lg: "center" }}
            alignItems={{ xs: "center", lg: "stretch" }}
          >
            <Grid xs={12} md={5} lg={5} item>
              <Box sx={mainImgContainerStyle}>
                <img src={MainImg} style={{ width: "100%" }} alt="scania TIR" />
                <img
                  className="about_us_texture_img"
                  src={SecondImg}
                  alt="state"
                  style={{
                    position: "absolute",
                    bottom: -40,
                    right: -60,
                    width: "45%",
                    height: "60%",
                    zIndex: 3,
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>
            </Grid>

            <Grid xs={12} md={5} lg={5} item>
              <Container>
                <Stack spacing={2}>
                  <Typography
                    component="p"
                    bgcolor="rgba(9, 18, 66, 0.1)"
                    sx={(t) => ({
                      borderLeft: `4px solid ${t.palette.primary.main}`,
                      fontSize: 14,
                      p: "3px",
                      px: 2,
                      width: "fit-content",
                    })}
                  >
                    About
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontWeight: 700, textTransform: "capitalize" }}
                  >
                    Why Choose Us
                  </Typography>
                  <Typography color={"#666C89"}>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </Typography>
                  <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ marginBottom: { xs: 2, sm: 0 } }}
    >
      <img src={userIcon} alt="UserIcon" />
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: 700, textTransform: "capitalize" }}
      >
        Our Vision
      </Typography>
    </Stack>
    <Typography color="#666C89">
      Leverage agile frameworks to provide a robust synopsis for strategy
      foster.
    </Typography>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ marginBottom: { xs: 2, sm: 0 } }}
    >
      <img src={HourglassIcon} alt="HourglassIcon" />
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: 700, textTransform: "capitalize" }}
      >
        Estimate Shipping
      </Typography>
    </Stack>
    <Typography color="#666C89">
      Leverage agile frameworks to provide a robust synopsis for strategy
      foster.
    </Typography>
  </Grid>
</Grid>

                </Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ marginTop: "20px" }}
                ></Stack>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </PageContainer>
  );
}
const mainImgContainerStyle = {
  position: "relative",
  "&::after": {
    display: { xs: "none", md: "inline" },
    minWidth: 200,
    content: '""',
    width: "45%",
    height: "60%",
    position: "absolute",
    bottom: -15,
    right: -35,
    backgroundColor: "white",
    zIndex: 2,
  },
  "& .about_us_texture_img": {
    display: { xs: "none", md: "inline" },
    minWidth: 200,
  },
};

export default Team;
