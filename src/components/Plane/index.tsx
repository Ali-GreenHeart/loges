import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import planephoto from "../../assets/Photo.png";
import clock from "../../assets/clock.png";
import icon from "../../assets/moving.png";
import qlobus from "../../assets/qlobus.png";
import qutu from "../../assets/qutu.png";
import support from "../../assets/support.png";
import transparant from "../../assets/transparant.png";
import vector from "../../assets/vector.png";
import WhyUsPriority from "../WhyUsPriority";
import "./module.css";


const Specifications = [
    { id: 0, icon: `${qutu}`, subtitle: "Safe Package" },
    {
        id: 1,
        icon: `${qlobus}`,
        subtitle: "Global Tracking",
    },
    {
        id: 2,
        icon: `${clock}`,
        subtitle: "In time Delivery",
    },
    {
        id: 3,
        icon: `${vector}`,
        subtitle: "Ship Everyware",
    },
    {
        id: 4,
        icon: `${support}`,
        subtitle: "24/7 Support",
    },
    {
        id: 5,
        icon: `${transparant}`,
        subtitle: "Transparant Pricing",
    },
];

const PlaneSection = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid bgcolor="secondary.main" item xs={12} md={6}
                        sx={{
                            pr: { xs: 0, md: "50px" },
                            position: 'relative'
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                position: { xs: 'relative', md: 'absolute' },
                                top: { xs: 0, md: 20 },
                                right: { xs: 0, md: -60 },
                                height: { xs: "100%", md: '90%' }
                            }}
                        >
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'left center'
                                }}
                                src={planephoto} />
                            <Stack
                                flexDirection="row"
                                alignItems="center"
                                maxWidth={300}
                                gap={2}
                                sx={{
                                    p: 2,
                                    background: "linear-gradient(58deg, #FFB629 0%, #FFB629 50%, #FFDA56 59%, #FFD7A6 95%)",
                                    position: 'absolute',
                                    bottom: 0,
                                    left: { xs: 0, sm: "21%" }
                                }}
                            >
                                <img style={{ width: "50px", height: '50px', objectFit: 'cover' }} src={icon} />
                                <Typography>Moving your products across borders</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{
                            pl: { xs: 0, md: "70px" },
                            mt: { xs: 6, md: 0 },
                            pt: 3
                        }}
                    >
                        <Typography
                            component="p"
                            bgcolor="rgba(9, 18, 66, 0.1)"
                            sx={(t) => ({ borderLeft: `4px solid ${t.palette.primary.main}`, fontSize: 14, p: "3px", px: 2, width: 'fit-content' })}>
                            Why Choose
                        </Typography>
                        <Typography my={3} variant="h4" component="h4" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                            We create opportunity to reach potential
                        </Typography>
                        <Typography>
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                        </Typography>
                        <Grid container>
                            {
                                Specifications.map(({ id, icon, subtitle }) => (
                                    <Grid item xs={12} key={id} sm={6}>
                                        <WhyUsPriority imgSrc={icon} title={subtitle} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default PlaneSection;
