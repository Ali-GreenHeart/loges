import { Box, Container, Stack } from '@mui/material';
import Button from "../Button";
import SectionHeader from '../SectionHeader';
import Sponsors from '../Sponsors';
import mail from "../contactUs/logo.images/Icon.mail.svg";
import clocks from "../contactUs/logo.images/Icon.svg";
import phone from "../contactUs/logo.images/icon.phone.svg";
import "./Contact.module.css";

const ContactHomepage = () => {
  return (

    <Container>
      <Box sx={{ backgroundColor: "#091242" }}>

        <Stack sx={{
          flexDirection: { md: "row", xs: "column" },


        }}>
          <SectionHeader heading={'Contact'} subheading={''} />
          <Box sx={{ width: "50%" }}>

            <h1>Get in touch with us</h1>
            <p className="firstP">
              Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.
            </p>
            <Stack
              sx={{
                flexDirection: { xs: "column", 'row': "column" },
                justifyContent: { xs: "space-between", md: "center" },
              }}
            >
              <Stack direction={'row'} className="parent" spacing={3} sx={{ marginBottom: "20px" }}>
                <div className="image">
                  <img src={mail} alt="" />
                </div>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Contact@logistics.com</p>
              </Stack>
              <Stack direction={'row'} className="parent" spacing={3} sx={{ marginBottom: "20px" }}>
                <div className="image">
                  <img src={phone} alt="" />
                </div>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> (00) 112 365 489</p>
              </Stack>
              <Stack direction={"row"} className="parent" spacing={3} >
                <div className="image">
                  <img src={clocks} alt="" />
                </div>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Mon - Sat 9.00 - 18.00Sunday Closed</p>
              </Stack>
            </Stack>
          </Box>
          <form>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: "40px",
              }}
            >


              <Stack
                sx={{
                  width: "100%",
                  gap: "20px",
                }}
              >

                <input type="text" placeholder="Your name*" required />
                <input type="text" placeholder="Phone Number*" required />
              </Stack>
              <Stack
                sx={{
                  width: "100%",
                  gap: "20px",
                }}
              >
                <input type="email" placeholder="Email*" required />
                <input type="text" placeholder="City*" required />
              </Stack>
            </Box>
            <textarea style={{ marginBottom: 20 }} placeholder="Your Message"></textarea>

            <Button type="submit" title={"Submit Message"} isPrimary={true}></Button>


          </form>
        </Stack>


        <Sponsors />
      </Box>
    </Container>

  );
};

export default ContactHomepage
