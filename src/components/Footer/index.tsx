import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material"
import logo from '../../assets/logo.png'
import HeaderInfo from "../Header/HeaderInfo"
import { EmailOutlined, Facebook, LinkedIn, Twitter } from "@mui/icons-material"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <Box bgcolor="secondary.main">

            <Box sx={{ height: 80 }} bgcolor="secondary.light"></Box>
            <Container sx={{ position: 'relative', top: -80 }}>
                <Stack justifyContent="space-between" flexDirection="row" flexWrap="wrap"
                    sx={{
                        "&>div": {
                            maxWidth: 320,
                            color: 'white'
                        }
                    }}
                >
                    <Box>
                        <Box bgcolor="secondary.main" sx={{ p: 4 }}>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </Box>
                        <Typography
                            mb={5}
                            pl={4}
                        > Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</Typography>
                        <Stack
                            pl={4}
                            gap={2}>
                            <HeaderInfo
                                IconElement={EmailOutlined}
                                title1={'Email'}
                                title2={'contact@logistics.com'}
                                link={'mailto:elinemet.isiyev@gmail.com'}
                            />

                            <HeaderInfo
                                IconElement={LocalPhoneOutlinedIcon}
                                title1={'Call Us'}
                                title2={'(00) 112 365 489'}
                                link={'tel:+994709874767'}
                            />
                        </Stack>
                    </Box>
                    <Box>
                        <Box sx={{ p: 4 }}>
                            <Typography variant="h5">Pages</Typography>
                        </Box>
                        <Stack
                            sx={{
                                pl: 4,
                                '&>a': {
                                    color: 'white',
                                    mb: 1
                                }
                            }}
                        >
                            <Typography component="a" href="#">About Us</Typography>
                            <Typography component="a" href="#">Our Team</Typography>
                            <Typography component="a" href="#">Our Project</Typography>
                            <Typography component="a" href="#">Pricing</Typography>
                            <Typography component="a" href="#">Contact</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <Box sx={{ p: 4 }}>
                            <Typography textAlign="left" variant="h5">Utility</Typography>
                        </Box>
                        <Stack
                            sx={{
                                pl: 4,
                                '&>a': {
                                    color: 'white',
                                    mb: 1
                                }
                            }}
                        >
                            <Typography component="a" href="#">Style Guide</Typography>
                            <Typography component="a" href="#">Changelog</Typography>
                            <Typography component="a" href="#">Licenses</Typography>
                            <Typography component="a" href="#">Protected</Typography>
                            <Typography component="a" href="#">Not Found</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <Box sx={{ p: 4 }}>
                            <Typography textAlign="left" variant="h5">Subscribe</Typography>
                        </Box>
                        <Stack pl={4}>
                            <TextField label="Email here*" />
                            <Stack flexDirection="row" alignItems="center">
                                <Button>Send Now</Button>
                                <LinkedIn />
                                <Twitter />
                                <Facebook />
                            </Stack>
                        </Stack>
                    </Box>
                </Stack >
            </Container >
        </Box >
    )
}
export default Footer
