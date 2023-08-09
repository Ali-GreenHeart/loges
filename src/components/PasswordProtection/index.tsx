import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Button from "../Button";
import theme from "../../theme";

interface IProps {
  title: string;
}

const PasswordProtection = ({ title }: IProps) => {
  return (
    <>
      <Container style={{padding:"0"}}>
        <Box sx={{
          fontSize:{sm:"16px", md:"30px"},
          margin:"0",
          backgroundColor:theme.palette.secondary.main,
          color:"white",
          padding:"100px",
          display:"flex",
          flexDirection:"column",
          gap:"20px",
          justifyContent:'center',
          alignItems:'center',
          
        }}>
          <h1>{title}</h1>
          <Stack 
          sx={{
            flexDirection:{xs:"column", md:"row"},
            gap:"20px",
          }}
          >
            <input type="password" className="input" placeholder="Enter Your Password"/>
            <Button title="submit" isPrimary={true}></Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default PasswordProtection;
