import { Box, Button, ButtonBase, Divider, Stack } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "./module.css"
import pattern from "../PricingCard"
import MiuButton from "../MiuButton";
import { Height } from "@mui/icons-material";
const Package: any = [
  {
    id: 0,
    isSpecial:false,
    title: "Basic",
    price: {
      monthlyPrice: "$39",
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
      monthlyPrice: "$59",
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
      monthlyPrice: "$89",
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
        <Stack className="parent" direction="row" spacing={2} style={{backgroundColor:"none",}}
        >
      {Package.map((item: any) => (
        <Box className="main"
        key={item.id}
            sx={{
              backgroundColor: item.isSpecial? "#091242" :"#F4F4F4" ,
              width: 300,
              flexWrap:"wrap",
              color: item.isSpecial?"#F4F4F4" :"#091242", 
              display: "flex",
              gap:"30px",
              padding:"0px 30px 30px 30px",
              flexDirection: "column",
              transition:"0.5s all",
              "&>div>p":{
                color: item.isSpecial?"#F4F4F4" :"#091242",
              },
              "&:hover":{
                backgroundColor:"#091242",
                color:"white"
              },
              "&:hover p":{
                color:"white !important"
              },
              "&>button":{
                backgroundColor: item.isSpecial? "#FFB629": "#091242",
                color:item.isSpecial? "#091242" : "#FFB629"
              },
              "&:hover button":{
                backgroundColor:"#FFB629",
                color:"#091242",
              }
          }}


          >
            <h3 style={{marginTop:"40px"}}>{item.title}</h3>
            <aside style={{display:"flex",  justifyContent:"center", height:"100px"}}>
              <h1 className="price" style={{fontSize:"85px", overflow:"hidden", display:"flex", alignItems:"flex-start"}}>{item.price.monthlyPrice}</h1>
              <p style={{display:"flex", alignItems:"flex-end", fontSize:"22px", fontWeight:"400"}}>{item.price.date}</p>
            </aside>
            <div>
              <Divider/>
              <p className="specification">{item.specifications.truck}</p>
              <Divider/>
              <p className="specification">{item.specifications.insurance}</p>
              <Divider/>
              <p className="specification">{item.specifications.distance}</p> 
              <Divider/>
              <p className="specification">{item.specifications.ratings}</p>
              <Divider/>
            </div>
            <MiuButton title="Choose Plan"></MiuButton>
          </Box>
      ))}
      </Stack>
    </>
  );
};

export default PricingCard;
