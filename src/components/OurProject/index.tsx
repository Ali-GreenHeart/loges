import { Container, Stack } from "@mui/material";
import img1 from "../../assets/whyUs/img1.png";
import img2 from "../../assets/whyUs/img2.png";
import img3 from "../../assets/whyUs/img3.png";
import img4 from "../../assets/whyUs/img4.png";
import img5 from "../../assets/whyUs/img5.png";
import img6 from "../../assets/whyUs/img6.png";

import WhyInfo from "./ProjectInfo";

const imgPath = [
    {
        key: 0,
        src: img1
    },
    {
        key: 1,
        src: img2
    },
    {
        key: 2,
        src: img3
    }
    , {
        key: 3,
        src: img4
    }
    , {
        key: 4,
        src: img5
    },
    , {
        key: 5,
        src: img6
    },


]

function WhyUs() {
    return (
        <Container sx={{ my: 8 }}>

            <Stack
                flexDirection="row"
                flexWrap="wrap"
                columnGap={4}
                rowGap={4}>
                {
                    imgPath.map((img) => {
                        return (
                            <WhyInfo key={img?.src} imgSrc={img?.src} />
                        )
                    })
                }
            </Stack>

        </Container>
    )
}

export default WhyUs
