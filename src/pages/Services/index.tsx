import "swiper/css";
import serviceBanner from "../../assets/banner/service-single-banner.png";
import PageContainer from "../../components/PageContainer";
import Slider from "../../components/Slider";

const Services = () => {
  return (
    <PageContainer
      bannerImage={serviceBanner}
      bannerTitle="Service Details"
      bannerSubtitle="Service Single">
      <Slider />
    </PageContainer >
  );
};

export default Services;
