import PageContainer from "../../components/PageContainer"
import blogSingleBg from "../../assets/banner/blog-single.png"
import { Box, Container, Stack, Typography } from "@mui/material"
import calendar from "../../assets/calendar.png"


const CustomBanner = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                color: 'white',
                py: 5
            }}>
            <Stack
                flexDirection="row"
                alignItems="center"
                gap={2}
            >
                <img style={{ width: '100%', objectFit: 'cover' }} src={calendar} alt="" />
                <Box>
                    <Typography fontSize={32} fontWeight={700}>12</Typography>
                    March
                </Box>
            </Stack>
            <Typography variant="h4" fontSize={{ xs: 24, sm: 32, md: 42 }} component="h4" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                How technology can help redraw the supply chain map
            </Typography>
        </Container>
    )
}

const BlogSingle = ({ }) => {
    return (
        <PageContainer
            bannerImage={blogSingleBg}
            customizedBanner={<CustomBanner />}
        >
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta esse dolore fuga molestias voluptate vero asperiores ipsam assumenda rem quis quos ratione, quam laboriosam quaerat voluptatem possimus error porro officiis.</Typography>
        </PageContainer>
    )
}
export default BlogSingle
