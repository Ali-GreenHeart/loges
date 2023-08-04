import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

interface IPrice {
  cardType: string,
  cardPrice: number,
  feature1: string
  feature2: string
  feature3: string
  feature4: string
  isSpecial?: boolean
}




function PricingInfo({ cardType, cardPrice, feature1, feature2, feature3, feature4, isSpecial = false }: IPrice) {
  const [screenWidth , setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Stack
      rowGap={3}
      alignItems={"center"}
      flexGrow={1}
      mx="auto"
      py={6}
      sx={{
        backgroundColor: isSpecial ? "secondary.main" : "#F4F4F4",
        "& h1": { color: isSpecial ? "white" : null },
       minWidth: 270,
       maxWidth:310,
        order: { xs: (isSpecial &&  screenWidth>627) ? '3' : "unset"  , md: (isSpecial && screenWidth<=937)? "3" :"unset" ,lg:"unset" }
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{ fontWeight: 600 }}>
        {cardType}
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 700 }}>
        ${cardPrice}<span style={{ fontSize: 16, fontWeight: "500" }}>/month</span>
      </Typography>
      <List component="nav" aria-label="mailbox folders">
        <ListItem divider>
          <Typography sx={{color:isSpecial?"white":null }} component="p" >{feature1}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />
        <ListItem divider>
          <Typography sx={{color:isSpecial?"white":null }} component="p">{feature2}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />
        <ListItem divider>
          <Typography sx={{color:isSpecial?"white":null }} component="p">{feature3}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />
        <ListItem divider>
          <Typography sx={{color:isSpecial?"white":null }} component="p">{feature4}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />

      </List>

      <Button variant="contained" color={isSpecial ? "primary" : "secondary"}
        sx={{
          position: "relative",
         
          background: isSpecial?
             "linear-gradient(45deg, #FFB629, #FFDA56, #FFD7A6)"
            : "",
            "&>div":{
              transition: "all 0.5s",
            },
            "&:hover" : {
            
              "&>div":{
                width:"50%",
                height:"100%",
                borderTopLeftRadius: "30%",
                borderBottomLeftRadius:"30%",
                zIndex:"1",
              }
            },
            "&>p":{
              color:isSpecial ? "black" : "white"
            }
            
        }}
      >
        <Typography component="p" sx={{zIndex:2}}>Choose Plan</Typography>.
        <Box bgcolor={isSpecial ? "#FFFFFF" : "#1F2A69"} sx={{ position: "absolute", right: 0, bottom: "0px", borderTopLeftRadius: "50%", borderBottomLeftRadius:"50%" , width: 15, height: 15 , zIndex:0 }}></Box>
      </Button>
    </Stack>
  )
}

export default PricingInfo
