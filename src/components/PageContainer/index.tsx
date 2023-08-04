import { Box } from "@mui/material"
import Footer from "../Footer"
import Header from "../Header"


interface IProps {
    children: React.ReactElement;
}

const PageContainer = ({ children }: IProps) => {
    return (
        <>
            <Header />
            <Box component="main">
                {children}
            </Box>
            <Footer />
        </>
    )
}
export default PageContainer
