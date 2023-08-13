import React from "react";
import PageContainer from "../PageContainer";
import { Box, Container, Grid, Stack } from "@mui/material";
import SectionHeader from "../SectionHeader";
import BasicAccordion from "./accorion";
import "./module.css";
import vector from "../../assets/FAQqaqaw/Vector.png";
import Button from "../Button";
import bcgimage from "../../assets/FAQqaqaw/Photo.svg";
import Sponsores from "../Sponsors";
import Sponsors from "../Sponsors";
const FAQ = () => {
  return (
    <>
      
        <>
        <Stack
          sx={{
            backgroundColor: "#F4F4F4",
            minHeight: "650px",
            flexWrap: "nowrap",
          }}
        >
          <Container>
            <Stack
              sx={{
                position: "relative",
                alignItems: "center",
                gap: "30px",
                padding: "100px 0px ",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", lg: "50%" },
                }}
              >
                <SectionHeader
                  key={""}
                  heading="FAQ"
                  subheading="Frequently Asked Questions"
                ></SectionHeader>
                <BasicAccordion />
              </Box>
              <Stack
                sx={{
                  display: { xs: "none", lg: "block" },
                  position:"relative",
                }}
              >
                <img src={bcgimage} alt="" className="shekil" />
              </Stack>
              <Box
                className="background"
                sx={{
                  width:"100%",
                  display: "flex",
                  flexDirection: { xs: "column", lg: "row" },
                }}
              >
                <Stack
                  sx={{
                    marginTop: "50px",
                    zIndex: 2,
                    width:{xs:"100%", lg:"50%"},
                    padding: "50px",
                    backgroundColor: "#091242",
                  }}
                >
                  <SectionHeader
                    heading="Let's Talk"
                    subheading="You Need Any Help? Get Free Consultation"
                  />
                  <div className="connect">
                    <main className="phone">
                      <img src={vector} alt="" />
                    </main>
                    <aside className="parent">
                      <p>Have Any Questions</p>
                      <p>(00) 112 365 489</p>
                    </aside>
                  </div>
                  <div
                    style={{
                      width: "250px",
                      height: "50px",
                      marginTop: "20px",
                    }}
                  >
                    <Button isPrimary title="Contact us" key={""} />
                  </div>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Stack>
        <Sponsors/>
        </>
      
    </>
  );
};

export default FAQ;
