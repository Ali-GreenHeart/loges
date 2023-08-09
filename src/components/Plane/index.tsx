import { Box, Container, Stack } from "@mui/material";
import "./module.css";
import planephoto from "../../assets/Photo.png";
import icon from "../../assets/moving.png";
import SectionHeader from "../SectionHeader";
import vector from "../../assets/vector.png";
import clock from "../../assets/clock.png";
import transparant from "../../assets/transparant.png";
import qlobus from "../../assets/qlobus.png";
import qutu from "../../assets/qutu.png";
import support from "../../assets/support.png";
import { Height } from "@mui/icons-material";

interface IProps {
  id: number;
  icon: string;
  subtitle: string;
}

const Specifications = [
  { id: 0, icon: `${qutu}`, subtitle: "Safe Package" },
  {
    id: 1,
    icon: `${qlobus}`,
    subtitle: "Global Tracking",
  },
  {
    id: 2,
    icon: `${clock}`,
    subtitle: "In time Delivery",
  },
  {
    id: 3,
    icon: `${vector}`,
    subtitle: "Ship Everyware",
  },
  {
    id: 4,
    icon: `${support}`,
    subtitle: "24/7 Support",
  },
  {
    id: 5,
    icon: `${transparant}`,
    subtitle: "Transparant Pricing",
  },
];

const PlaneSection = () => {
  return (
    <>
      <Container style={{margin:"0", padding:"0"}}>
        <Stack
          flexDirection={"row"}
          sx={{
            width:"100vw",
            Height:"auto",
            flexDirection:{lg:"column", xl:"row"},
          }}
        >
          <Box className="rahib"
            sx={{
              backgroundColor: "#091242",
              padding: "60px 40px",
              left:"-20px",
              width:{xl:"50%", lg:"100%"},
              display: "flex",
              justifyContent: {xl:"flex-end", lg:"center"},
              alignItems: {xl:"flex-end", lg:"flex-end", md:"flex-end"},
              position: "relative",
            }}
          >
            <div className="planePhoto">
              <img src={planephoto} alt="#" />
            </div>
            <aside className="description">
              <main className="icon">
                <img src={icon} alt="icon" />
              </main>
              <main>Moving your products across borders</main>
            </aside>
          </Box>
          <Box
            className="Right"
            sx={{
              backgroundColor: "#F4F4F4",
              width: {xl:"50%", lg:"100%"},
              height: "100%",
              padding: {xl:"60px 0px 60px 160px", lg:"20px 50px", md:"20px 50px", },
              position: "relative",
              textAlign:"center",
              gap:2,
            }}
          >
            <div className="first">
              <SectionHeader
                heading="Why Choose"
                subheading="We create opportunity to reach potential"
              />
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.{" "}
              </p>
            </div>
            <Stack
              sx={{
                height: {xs:"auto", md:"250px"},
                gap: "20px",
                justifyContent:{xs:"center", md:"center"},
                flexWrap: "wrap",
                flexDirection:{xs:"column", lg:"column"}
              }}
            >
              {Specifications.map((obj) => {
                return (
                  <>
                    <Stack
                      flexDirection="row"
                      alignItems="center"
                      key={obj.id}
                      sx={{
                        width:{md:"300px", xs:"300px"},
                        marginTop: "0",
                        justifyContent:{xs:"center", md:"flex-start"},
                        alignItems:{xs:"center", md:"center"},
                        gap: "10px",
                      }}
                    >
                      <Box
                        className="iconparent"
                        sx={{
                          display: "flex",
                          flexDirection:{xs:"column", md:"row"},
                          width: "50px",
                          height: "50px",
                          textAlign:"center"
                        }}
                      >
                        <img src={obj.icon} alt="" className="icons" />
                      </Box>
                      <main>
                        <h3>{obj?.subtitle}</h3>
                      </main>
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default PlaneSection;
