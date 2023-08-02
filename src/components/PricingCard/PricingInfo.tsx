import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

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
  return (
    <Stack
      rowGap={3}
      alignItems={"center"}
      flexGrow={1}
      mx="auto"
      py={6}
      sx={{
        backgroundColor: isSpecial ? "secondary.main" : null,
        "& p,h1": { color: isSpecial ? "white" : null },
        minWidth: 300,
        maxWidth: 320,
        order: { xs: isSpecial ? '3' : 'unset', lg: 'unset' }
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
          <Typography component="p" >{feature1}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />
        <ListItem divider>
          <Typography component="p">{feature2}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />
        <ListItem divider>
          <Typography component="p">{feature3}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />
        <ListItem divider>
          <Typography component="p">{feature4}</Typography>
        </ListItem>
        <Divider sx={{ boxShadow: "0 0 1px #ccc" }} />

      </List>

      <Button variant="contained" color={isSpecial ? "primary" : "secondary"}
        sx={{
          position: "relative",
          background: isSpecial
            ? "linear-gradient(45deg, #FFB629, #FFDA56, #FFD7A6)"
            : "",
        }}
      >
        Choose Plan
        <Box bgcolor={isSpecial ? "#FFFFFF" : "#1F2A69"} sx={{ position: "absolute", right: 0, bottom: "0px", borderRadius: "50%", width: 20, height: 10 }}></Box>
      </Button>
    </Stack>
  )
}

export default PricingInfo
