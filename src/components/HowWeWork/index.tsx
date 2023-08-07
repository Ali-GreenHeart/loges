import MainImg from "../../assets/HowWeWork/mainImg.png";
import SecondImg from "../../assets/HowWeWork/secondImg.png";
import { CardMedia, Container, Box, Typography } from "@mui/material";
import SectionHeader from "../SectionHeader";
import Icon1 from "../../assets/HowWeWork/logos/Icon.png";
import Icon2 from "../../assets/HowWeWork/logos/Sheild Icon.png";
import Icon3 from "../../assets/HowWeWork/logos/Environment Icon.png";

const HowWeWork = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F4F4F4" }}>
        <Container sx={{ maxWidth: "800px", padding: "10px 10px 50px 10px" }}>
          <SectionHeader heading={"Our Goodness"} subheading={"How We Works"} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >

            <Box sx={mainImgContainerStyle}>
              <CardMedia component="img" image={MainImg} alt="worker" />
              <CardMedia component="img" image={SecondImg} alt="state" sx={secondImgStyle} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginLeft: "40px" }}>
              <Box display="flex" alignItems="center">
                <Typography>
                  <img style={{ width: 35 }} src={Icon1} alt="Box Icon" />
                </Typography>
                <Typography variant="h5">Warehousing Services</Typography>
              </Box>
              <Typography variant="body1">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking
              </Typography>

              <Box display="flex" alignItems="center">
                <Typography>
                  <img style={{ width: 35 }} src={Icon2} alt="Sheild Icon" />
                </Typography>
                <Typography variant="h6">Safety & Quality</Typography>
              </Box>
              <Typography variant="body1">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking
              </Typography>

              <Box display="flex" alignItems="center">
                <Typography>
                  <img style={{ width: 35 }} src={Icon3} alt="Environment Icon" />
                </Typography>
                <Typography variant="h6">Care for Environment</Typography>
              </Box>
              <Typography variant="body1">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

const mainImgContainerStyle = {
  position: "relative",
  width: "650px",
};

const secondImgStyle = {
  position: "absolute",
  bottom: -40,
  right: -60,
  width: "300px",
  height: "270px",
  border: "25px solid white",
};

export default HowWeWork;
