import { Box, Button, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import SectionHeader from "../SectionHeader";
import user1 from "../../assets/Testimonial/user1.png";
import user2 from "../../assets/Testimonial/user2.png";
import user3 from "../../assets/Testimonial/user3.jpg";
import logo from "../../assets/Testimonial/logo.png";
import { useState } from "react";
import WhyUsPriority from "../WhyUsPriority";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const sliders = [
  {
    imgSrc: user1,
    name: "Kathleen Smith",
    job: "Fuel Company",
    description:
      "Leverage frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating:5,
  },
  {
    imgSrc: user2,
    name: "John Martin",
    job: "Restoration Company",
    description:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
      rating:4,
  },
 
  {
    imgSrc: user3,
    name: "Michael Schofield",
    job: "Tech Solutions",
    description:
      "Leverage frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating:3,
  },
  
  
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [content1, setContent1] = useState(sliders[currentIndex]);
  const [content2, setContent2] = useState(sliders[currentIndex+1]);

  const computeIndex = (shiftIndex:number) => {
    const newIndex = currentIndex + shiftIndex;

    if (newIndex >= 0) {
      return newIndex % sliders.length;
    }

    return sliders.length + (newIndex % sliders.length);
  };

  const handlePrevClick = () => {
    setContent2(sliders[currentIndex]); 
    const newIndex = computeIndex(-1);
    setCurrentIndex(newIndex); 
    setContent1(sliders[newIndex]); 
  };

  const handleNextClick = () => {
    setContent1(sliders[currentIndex]);
    const newIndex = computeIndex(1)
    setContent2(sliders[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <Stack
      >
        <Stack flexDirection="row" justifyContent="space-between"  sx={{ "& p": { mx: "0 !important", textAlign: "left !important" } }} flexWrap="wrap">
          <SectionHeader
            heading="Testimonial"
            subheading="What Our Customer Say"
          />
          <Stack pt={{xs:3 , sm:6}} flexDirection="row" sx={{"&>button": {borderRadius:"50%"}}} alignItems="baseline" gap={1}>
            <Button variant="contained" onClick={handlePrevClick} sx={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}} >{<ArrowBack fontSize="small" />}</Button>
            <Button variant="contained" onClick={handleNextClick} color="secondary">{<ArrowForward fontSize="small" />}</Button>
          </Stack>
        </Stack>

        <Grid
          container
          sx={{
            "& img ": {
              borderRadius: "50%",
            },
            "&>div.nth.child(even)":{
                backgroundColor:"rgba(9, 18, 66, 1)"
            }
          }}
        > 
        
          <Grid item md={6} p={5}>
            <Stack gap={3}>
              <Stack flexDirection="row" justifyContent="space-between">
                <Stack flexDirection="row" alignItems="center" gap={2} sx={{"&>img":{width:91 , height:91}}}>
                  <img src={content1.imgSrc} />
                  <Box>
                    <Typography fontWeight={800} component="h4">
                      {content1.name}
                    </Typography>
                    <Typography component="h4">
                      {content1.job}
                    </Typography>
                  </Box>
                </Stack>
                <WhyUsPriority title="" imgSrc={logo} />
                
              </Stack>
              <Typography
                color="rgba(102, 108, 137, 1)"
                component="p"
                fontStyle="italic"
              >
                {content1.description}
              </Typography>
              <Rating name="half-rating-read" value={content1.rating} precision={0.5} size="large" readOnly />
            </Stack>
          </Grid>
          <Grid item md={6} p={5} bgcolor="rgba(9, 18, 66, 1)" sx={{
            color:"white"
          }}>
            <Stack gap={3}>
              <Stack flexDirection="row" justifyContent="space-between">
                <Stack flexDirection="row" alignItems="center" gap={2} sx={{"&>img":{width:91 , height:91}}}>
                  <img src={content2.imgSrc} />
                  <Box>
                    <Typography fontWeight={800} component="h4">
                      {content2.name}
                    </Typography>
                    <Typography component="h4">
                      {content2.job}
                    </Typography>
                  </Box>
                </Stack>
                <WhyUsPriority title="" imgSrc={logo} />
              </Stack>
              <Typography fontStyle="italic" component="p">
                {content2.description}
              </Typography>
              <Rating name="half-rating-read" value={content2.rating} precision={0.5} size="large" readOnly />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Testimonial;
