import { Container, Stack, Typography } from '@mui/material';
import Bannerimg from '../../assets/ChangeLog/Banner.png';
import Banner from '../Banner';

const ChangeLog = () => {
  return (
    <>
      <Stack spacing={4} alignItems="center">
        <Banner src={Bannerimg} alt="Banner" />
        <Container
          sx={{
            bgcolor: "#091242",
            color: "white",
            width: 762,
            height: 251,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "35px",

          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Version 01
          </Typography>
          <Typography
            sx={{
              bgcolor: "rgba(39, 50, 112, 0.6)",
              height: "45px",
              width: "380px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Initial TransitFlow Webflow Template Release
          </Typography>
        </Container>

      </Stack>
    </>
  );
}

export default ChangeLog;
