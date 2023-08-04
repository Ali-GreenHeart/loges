import { Box, Container, Stack, Typography } from "@mui/material";
import PricingInfo from "./PricingInfo";

const prices = [
  {
    key: 0,
    cardType: "Basic",
    cardPrice: 39,
    feature1: "Single Truck",
    feature2: "Full Insurance",
    feature3: "500 Km",
    feature4: "Real-time rate shopping",

  },
  {
    key: 1,
    cardType: "Standart",
    cardPrice: 59,
    feature1: "Single Truck",
    feature2: "Full Insurance",
    feature3: "500 Km",
    feature4: "Real-time rate shopping",
    isSpecial: true

  },
  {
    key: 2,
    cardType: "Premium",
    cardPrice: 89,
    feature1: "Double Truck",
    feature2: "Full Insurance",
    feature3: "Unlimitted",
    feature4: "Real-time rate shopping",

  }
]


function PricingCard() {
  return (
    <Container maxWidth="lg">
      <Stack alignItems={"center"}>
        <Stack flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Box sx={{ height: 23, borderLeft: "4px solid #FFBE34", }}></Box>
          <Typography component="p" sx={{ fontSize: 10, padding: 2 }}>
            Pricing
          </Typography>
        </Stack>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Our Best Pricing
        </Typography>
      </Stack>

      <Stack flexDirection="row" my={8} flexWrap={"wrap"} gap={5}
      >
        {

          prices.map((price) => <PricingInfo {...price} />)
        }
      </Stack>

    </Container>
  );
}

export default PricingCard;
