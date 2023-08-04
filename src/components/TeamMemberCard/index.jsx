import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Stack, IconButton, CardActions } from "@mui/material";
import { LinkedIn, Instagram, Twitter } from "@mui/icons-material";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import MemberCard from "./MemberCard"

function TeamMemberCard() {

  return (
    <Container>
      <Stack flexDirection={"row"} justifyContent={"center"} gap={5}>
        <MemberCard
          imgSrc={member1}
          name="Jessca Arrow"
          job="Designer"
          facebookLink="guya"
          linkedInLink="guya2"
          twitterLink="sfdg"
        />
        <MemberCard
          imgSrc={member2}
          name="Kathleen Smith"
          job="Designer"
          facebookLink="guya"
          linkedInLink="guya2"
          instagramLink="sfdg"
        />
        <MemberCard
          imgSrc={member3}
          name=" Rebecca Tylor"
          job="Designer"
          facebookLink="guya"
          linkedInLink="guya2"
        />
      </Stack>
    </Container>
  );
}

export default TeamMemberCard;
