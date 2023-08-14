import { Box, Container, Stack } from "@mui/material";
import React from "react";
import mail from "./logo.images/Icon.mail.svg";
import clocks from "./logo.images/Icon.svg";
import phone from "./logo.images/icon.phone.svg";
import "./module.css";
import Button from "../Button";
import { Padding } from "@mui/icons-material";

const Contact = () => {
  return (
    <Container>
      <Box
        className="mainbox"
        sx={{
          padding: "20px",
        }}
      >
        <div className="firstDiv">Contact</div>
        <h1>Get in touch with us</h1>
        <p className="firstP">
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value.
        </p>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          padding={"0px 20px"}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <Box className="parent">
            <div className="image">
              <img src={mail} alt="" />
            </div>
            <p>Contact@logistics.com</p>
          </Box>
          <Box className="parent">
            <div className="image">
              <img src={phone} alt="" />
            </div>
            <p> (00) 112 365 489</p>
          </Box>
          <Box className="parent">
            <div className="image">
              <img src={clocks} alt="" />
            </div>
            <p>Mon - Sat 9.00 - 18.00Sunday Closed</p>
          </Box>
        </Stack>
        <form>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: "40px",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                gap: "20px",
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="text" placeholder="Phone Number*" required />
            </Stack>
            <Stack
              sx={{
                width: "100%",
                gap: "20px",
              }}
            >
              <input type="email" placeholder="Email*" required />
              <input type="text" placeholder="City*" required />
            </Stack>
          </Box>
          <textarea placeholder="Your Message"></textarea>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button type="submit" className="elshad">

            <Button title={"Submit Message"} isPrimary={true}></Button>
            </button>
          </Stack>
          
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
