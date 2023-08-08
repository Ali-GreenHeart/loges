
import { Box } from '@mui/material'
import PageContainer from '../../components/PageContainer'
import OurProject from '../../components/OurProject'
import FooterInfo from '../../components/OurProject/footerInfo'

const Project = () => {
  return (
    <PageContainer >
      <Box>
        <OurProject />
        <FooterInfo />
      </Box>
    </PageContainer>
  )
}

export default Project
