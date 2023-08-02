import { Box, Button, ButtonBase, Stack } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "./module.css"
import pattern from "../PricingCard"
const Package: any = [
  {
    id: 0,
    title: "Basic",
    price: {
      monthlyPrice: "$84",
      date: "/ Month",
    },
    specifications: {
      truck: "Single Truck",
      insurance: "Full Insurance",
      distance: "500km",
      ratings: "Real Time Rate Shopping",
    },
  },
  {
    id: 1,
    title: "Standard",
    price: {
      monthlyPrice: "$84",
      date: "/ Month",
    },
    specifications: {
      truck: "Single Truck",
      insurance: "Full Insurance",
      distance: "500km",
      ratings: "Real Time Rate Shopping",
    },
  },
  {
    id: 2,
    title: "Premium",
    price: {
      monthlyPrice: "$84",
      date: "/ Month",
    },
    specifications: {
      truck: "Double Truck",
      insurance: "Full Insurance",
      distance: "Unlimited",
      ratings: "Real Time Rate Shopping",
    },
  },
];

const PricingCard = () => {
  return (
    <>
      {Package.map((item: any) => (
        <Stack className="parent" direction="row" spacing={2}
          key={item.id}
        >
          <Box className="main" sx={{
            
              backgroundColor: "#F4F4F4",
              width: 250,
              display: "flex",
              gap:"20px",
              flexDirection: "column",
              transition:"0.5s all",
              

              "&:hover":{
                backgroundColor:"#091242",
                color:"white"
              },
              "&:hover p":{
                // backgroundColor:"#091242",
                // transform:'translateY(-8%)',
                color:"white !important"
              },
              "&:hover button":{
                // backgroundColor:"#091242",
                // transform:'translateY(-8%)',
                backgroundColor:"#FFB629",
                color:"#091242",
                // backgroundImage:,
              }
          }}

          >
            <h3>{item.title}</h3>
            <aside style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <h1 className="price">{item.price.monthlyPrice}</h1>
              <p>{item.price.date}</p>
            </aside>
            <div>
              <p className="specification">{item.specifications.truck}</p>
              <p className="specification">{item.specifications.insurance}</p>
              <p className="specification">{item.specifications.distance}</p>
              <p className="specification" style={{borderBottom:"1px solid #d6d6d680"}}>{item.specifications.ratings}</p>
            </div>
            <Button className="chooseButton" sx={{
                backgroundColor:"#091242",
                color:"#FFB629",
                transition:"0.5s all",
                fontWeight:600,
        
               
              "&:hover":{
                // backgroundPosition:"inherit"
                backgroundColor:"#091242"
              }
            }}>
              Choose Plan
           
            </Button>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default PricingCard;
