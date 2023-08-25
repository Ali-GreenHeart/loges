import { Stack } from "@mui/material";
import Truck from "../../assets/banner/Photo.svg";
import PageContainer from "../../components/PageContainer";
import PricingCard from "../../components/PricingCard";
import Slider from "../../components/Slider";
const PricingPage = () => {
  return (
    <>
      <PageContainer
        bannerSubtitle="Pricing"
        bannerTitle="Our Best Price"
        bannerImage={Truck}>
        <Stack gap={10}>
          <PricingCard />
          <Slider />
        </Stack>
      </PageContainer>

    </>
  );
};

export default PricingPage;
