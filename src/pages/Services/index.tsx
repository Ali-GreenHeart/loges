import "swiper/css";
import serviceBanner from "../../assets/banner/service-single-banner.png";
import PageContainer from "../../components/PageContainer";
import Slider from "../../components/Slider";

const Services = () => {
  return (
    <PageContainer
      bannerImage={serviceBanner}
      bannerSubtitle="Services"
      bannerTitle="Our Logistics Service">
      <Slider />
    </PageContainer >
  );
};

export default Services;
