import { Container, IconButton, Stack } from "@mui/material";
import serviceBanner from "../../assets/banner/service-single-banner.png";
import PageContainer from "../../components/PageContainer";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import { useRef, useState } from "react";

const Services = () => {
  const [init, setInit] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <PageContainer
      bannerImage={serviceBanner}
      bannerTitle="Service Details"
      bannerSubtitle="Service Single">
      <Container>
        <Stack
          marginBottom={"40px"}
          flexDirection={"row"}
          justifyContent={"flex-end"}>
          <IconButton
            ref={prevButtonRef}
            className={`button ${isFirstSlide && "disabled"}`}>
            <WestIcon fontSize="small" />
          </IconButton>
          <IconButton
            ref={nextButtonRef}
            className={`button ${isLastSlide && "disabled"}`}>
            <EastIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Swiper
          slidesPerView={2}
          onInit={() => setInit(true)}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onSlideChange={({
            isBeginning,
            isEnd,
          }: {
            isBeginning: boolean;
            isEnd: boolean;
          }) => {
            setIsFirstSlide(isBeginning);
            setIsLastSlide(isEnd);
          }}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Container>
    </PageContainer>
  );
};

export default Services;
