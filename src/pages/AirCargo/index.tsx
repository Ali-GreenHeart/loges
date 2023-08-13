import { Box } from "@mui/material";
import BannerImg from "./../../assets/AriCargo/AirCargo.png";

import PageContainer from "../../components/PageContainer";
import Card from "./cards";

const AirCargo = () => {
  return (
    <PageContainer
      bannerImage={BannerImg}
      bannerTitle="Air Cargo Transportation"
      bannerSubtitle="Warehouse Transportation"
    >
      <Box>
        <Card />
      </Box>
    </PageContainer>
  );
};

export default AirCargo;
