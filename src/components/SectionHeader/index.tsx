import { Typography } from "@mui/material";

interface IProps {
    heading: string;
    subheading: string;
}

const SectionHeader = ({ heading, subheading }: IProps) => {
    return (
        <>
            <Typography component="p" bgcolor="#E8E8E8" sx={(t) => ({ borderLeft: `4px solid ${t.palette.primary.main}`, fontSize: 14, p: "3px", px: 2, width: 'fit-content', mx: 'auto' })}>
                {heading}
            </Typography>
            <Typography my={3} textAlign="center" variant="h4" component="h4" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                {subheading}
            </Typography>
        </>
    )
}
export default SectionHeader
