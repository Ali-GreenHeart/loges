import { Box, Button, ButtonBase, Stack } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "./module.css"
import pattern from "../PricingCard"
import MiuButton from "../MiuButton";
const Package: any = [
  {
    id: 0,
    isSpecial:false,
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
    isSpecial:true,
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
    isSpecial:false,
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
          <Box className="main"
            sx={{
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
                color:"white !important"
              },
              "&:hover button":{
                backgroundColor:"#FFB629",
                color:"#091242",
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
            <MiuButton></MiuButton>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default PricingCard;
