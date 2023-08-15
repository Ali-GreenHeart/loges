import { Container, Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import img3 from "./../../assets/AriCargo/cardImg.png";
import img1 from "../../assets/ourProject/img1.png";
import img2 from "../../assets/ourProject/img3.png";

import WhyInfo from "./cardInfo";

const imgPath = [
  { key: 0, src: img1 },
  { key: 1, src: img2 },
  { key: 2, src: img3 },
];

function Card() {
  return (
    <Container sx={{ my: 8 }}>
      <Typography fontSize={35} fontWeight="bold">
        Wharehouse Transportation
      </Typography>
      <Typography component="p">
        Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
        lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
        tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi
        quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
        porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus
        vel elit Integer adipiscing erat eget risus sollicitudin pellentesque
        non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum.
        Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.
      </Typography>

      {[
        "National Customer Service Center – 24 hours a day.",
        "Online shipping navigator lets you quote, book, and track shipments",
        "Your Logistics Needs Are At The Heart Of Our Business",
        "Very careful handling of valuable goods",
        "Time saving and convenient transportation services in your area"
      ].map((item, index) => (
        <Typography key={index} component="p">
          <Stack direction="row" alignItems="center">
            <ArrowRightIcon />
            {item}
          </Stack>
        </Typography>
      ))}
     
      <Typography fontSize={35} fontWeight="bold">
        Related Project
      </Typography>
      <Stack flexDirection="row" flexWrap="wrap" columnGap={4} rowGap={4}>
        {imgPath.map((img) => (
          <WhyInfo key={img.src} imgSrc={img.src} />
        ))}
      </Stack>
    </Container>
  );
}

export default Card;
