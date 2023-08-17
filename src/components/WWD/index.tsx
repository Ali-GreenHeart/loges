import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SectionHeader from "../SectionHeader";
import ship from "../../assets/wwd icons/Ship.png";
import plane from "../../assets/wwd icons/plane.svg";
import truck from "../../assets/wwd icons/Truck.png";
import tower from "../../assets/wwd icons/Tower.png";
import PageContainer from "../PageContainer";

interface IProps {
  id: {
    icon: string;
    title: string;
    subtitle: string;
  };
}



// const servisler:IProps{
//     0{
//         icon:{ship},
//         title:"Sea Transport Services",
//         subtitle:"Following the quality of our service thus having gained trust of our many clients."
//     },
//     1{
//         icon:{tower},
//         title:"Warehousing Services",
//         subtitle:"Following the quality of our service thus having gained trust of our many clients."
//     },
//     2{
//         icon:{plane},
//         title:"Air Fright Services",
//         subtitle:"Following the quality of our service thus having gained trust of our many clients."
//     },
//     3{
//         icon:{truck},
//         title:"Local Shipping Services",
//         subtitle:"Following the quality of our service thus having gained trust of our many clients."
//     },
// }




function WhatWeDo() {
  return (
    <PageContainer>
      <Container>
        <Stack
          sx={{
            flexDirection: { sx: "column", md: "row" },
            alignItems:{xs:"center", md:"inherit"}
        
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "100%" },
              display: "flex",
              gap: "20px",
            }}
          >
            <SectionHeader
              heading="What We Do"
              subheading="Safe & Reliable Cargo Solutions"
            />
          </Box>
          <Stack
            sx={{
              flexDirection: { sx: "column", md: "row" },
              gap: "50px",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                display: "flex",
                gap: "20px",
              }}
            >
              <Box>
                <img src={ship} alt="Ship" />
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #D8D8D8",
                  paddingLeft: "10px",                   
                }}
              >
                <h3 style={{color:"#1C1F35"}}>Sea Transport Services</h3>
                <p style={{color:"#666C89"}}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </Box>
            </Box>

            {/* Bunnan sonrasi muveqqetidir!!!! */}

            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                display: "flex",
                gap: "20px",
              }}
            >
              <Box>
                <img src={ship} alt="Ship" />
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #D8D8D8",
                  paddingLeft: "10px",
                   
                }}
              >
                <h3 style={{color:"#1C1F35"}}>Sea Transport Services</h3>
                <p style={{color:"#666C89"}}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                display: "flex",
                gap: "20px",
              }}
            >
              <Box>
                <img src={ship} alt="Ship" />
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #D8D8D8",
                  paddingLeft: "10px",
                   
                }}
              >
                <h3 style={{color:"#1C1F35"}}>Sea Transport Services</h3>
                <p style={{color:"#666C89"}}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </Box>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                display: "flex",
                gap: "20px",
              }}
            >
              <Box>
                <img src={ship} alt="Ship" />
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid  #D8D8D8",
                  paddingLeft: "10px",
                   
                }}
              >
                <h3 style={{color:"#1C1F35"}}>Sea Transport Services</h3>
                <p style={{color:"#666C89"}}>
                  
                  the quality of our service thus having gained trust of our
                  many clients.
                </p>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </PageContainer>
  );
}

export default WhatWeDo;
