import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SectionHeader from "../SectionHeader";
import ship from "../../assets/wwdicons/Ship.png";
import plane from "../../assets/wwdicons/plane.svg";
import truck from "../../assets/wwdicons/Truck.png";
import tower from "../../assets/wwdicons/Tower.png";
import PageContainer from "../PageContainer";

interface IProps {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

const servisler = [
  {
    id: 0,
    icon: ship,
    title: "Sea Transport Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 1,
    icon: tower,
    title: "Warehousing Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 2,
    icon: plane,
    title: "Air Fright Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 3,
    icon: truck,
    title: "Local Shipping Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
];

function WhatWeDo() {
  return (
    <PageContainer>
      <Container>
        <Stack
          sx={{
            flexDirection: { sx: "column", md: "row" },
            alignItems: { xs: "center", md: "inherit" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              gap: "20px",
            }}
          >
            <SectionHeader 
              heading="What We Do"
              subheading="Safe & Reliable Cargo Solutions"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              // backgroundColor: "red",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              {servisler.map((servis) => {
                return (
                  <>
                    <Stack sx={{
                      flexDirection:{xs:"column", md:"row"},
                      width:{xs:"100%", md:"45%"},
                      // alignItems:"center",
                      // justifyContent:"center",
                      flexWrap:"nowrap",
                    }}>
                      <Box
                        sx={{
                          padding:"0px 20px",
                          // backgroundColor: "blue",
                          
                        }}
                      >
                        <img src={servis.icon} alt="" />
                      </Box>
                      <Stack
                        sx={{
                          borderLeft: {xs:"none", md:"1px solid #D8D8D8"},
                          width: { xs: "96%", md: "100%" },
                          padding:"0px 20px",
                          // margin:"20px"
                        }}
                      >
                        <h2>{servis.title}</h2>
                        <p style={{ color: "#666C89", width: "100%" }}>
                          {servis.subtitle}
                        </p>
                      </Stack>
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </PageContainer>
  );
}

export default WhatWeDo;
