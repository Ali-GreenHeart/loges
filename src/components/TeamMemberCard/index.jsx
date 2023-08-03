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

function TeamMemberCard() {
  const cardBackgroundColor = "#1C1F35";
  const mediaBackgroundColor = "linear-gradient(90deg, rgba(255,182,41,1) 0%, rgba(255,218,86,1) 35%, rgba(255,215,166,1) 100%)";

  return (
    <Container>
      <Stack flexDirection={"row"} justifyContent={"center"} gap={5}>
        <Card sx={{ maxWidth: 300, backgroundColor: cardBackgroundColor }}>
          <CardActionArea>
            <CardMedia component="img" image={member1} alt="Jessca Arrow" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff", paddingTop: "8px" }}>
                Jessca Arrow
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "#fff" }}>
                Designer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "center", background: mediaBackgroundColor, position: "relative", top: '-125px', width: '160px', left: "140px" }}>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300, backgroundColor: cardBackgroundColor }}>
          <CardActionArea>
            <CardMedia component="img" image={member2} alt="Kathleen Smith" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff", paddingTop: "8px" }}>
                Kathleen Smith
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "#fff" }}>
                Designer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "center", background: mediaBackgroundColor, position: "relative", top: '-125px', width: '160px', left: "140px" }}>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300, backgroundColor: cardBackgroundColor }}>
          <CardActionArea>
            <CardMedia component="img" image={member3} alt="Rebecca Tylor" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff",  }}>
                Rebecca Tylor
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "#fff" }}>
                Designer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "center", background: mediaBackgroundColor, position: "relative", top: '-125px', width: '160px', left: "140px" }}>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}

export default TeamMemberCard;
