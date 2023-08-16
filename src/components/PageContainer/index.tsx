import { Box } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";
import Banner from "../Banner";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  bannerImage?: string;
  bannerTitle?: string;
  bannerSubtitle?: string;
}

const PageContainer = ({
  children,
  bannerImage,
  bannerTitle,
  bannerSubtitle,
}: IProps) => {
  return (
    <>
      <Header />
      <Banner
        bannerImage={bannerImage}
        bannerTitle={bannerTitle}
        bannerSubtitle={bannerSubtitle}
      />
      <Box component="main"
        py={10}
      >{children}</Box>
      <Footer />
    </>
  );
};
export default PageContainer;
