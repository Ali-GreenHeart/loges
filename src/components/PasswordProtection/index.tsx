import { Box, Container, Stack, TextField } from "@mui/material";
import React from "react";
import Button from "../Button";
import theme from "../../theme";
import PageContainer from "../PageContainer";
import passwordImg from "../../assets/banner/password-protection.png"

const PasswordProtection = () => {
  return (
    <>
      <PageContainer
        bannerImage={passwordImg}
        bannerTitle="Password Protection"
        bannerSubtitle="Protection"
      >
        <Container>
          <Box sx={{
            fontSize: { sm: "16px", md: "30px" },
            margin: "0",
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            padding: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: 'center',
            alignItems: 'center',

          }}>
            <h1>Enter Password</h1>
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                gap: "20px",
              }}
            >
              <TextField
                label="Enter Your Password"
              />
              <Button title="submit" isPrimary={true}></Button>
            </Stack>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
};

export default PasswordProtection;
