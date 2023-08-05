import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const infos = [
  {
    key: 0,
    count: 24,
    possession: "Our Location",
  },
  {
    key: 1,
    count: 1294,
    possession: "Delivered Packages",
  },
  {
    key: 2,
    count: 3594,
    possession: "Satisfied Clients",
  },
  {
    key: 3,
    count: "24+",
    possession: "Owned Vehicles",
  },
];

const FooterInfo = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 20, mb: 3 }}>
      <Grid container>
        {infos.map((info) => {
          return (
            <Grid
              key={info.key}
              sx={{
                p: 2,
                borderTop: "1px solid #ddd",
                borderRight: "1px solid #ddd",
              }}
              item
              xs
            >
              <Stack flexDirection="row" alignItems="center" gap={2}>
                <Typography fontWeight={800} variant="h3" component="h3">
                  {info.count}
                </Typography>
                <Box
                  sx={{  

                    width: 17,
                    height: 17,
                    background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
                  }}
                ></Box>
                <Typography component="p">{info.possession}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FooterInfo;
