
import {  Container, Typography } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

const ChangeLog = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          bgcolor: "#091242",
          color: "white",
          width: 762,
          height: 251,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "35px",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Version 01
        </Typography>
        <Typography
          sx={{
            bgcolor: "rgba(39, 50, 112, 0.6)",
            height: "45px",
            width: "380px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Initial TransitFlow Webflow Template Release
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default ChangeLog;
