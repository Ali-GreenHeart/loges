import { Typography } from "@mui/material";

interface IProps {
    heading: string;
    subheading: string;
    isCentered?: boolean;
}

const SectionHeader = ({ heading, subheading, isCentered = true }: IProps) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", }}>

                <Typography component="p" bgcolor="#E8E8E8" sx={(t) => ({ borderLeft: `4px solid ${t.palette.primary.main}`, fontSize: 14, p: "3px", px: 2, width: 'fit-content', mx: isCentered ? 'auto' : '0' })}>
                    {heading}
                </Typography>
                <Typography my={3} textAlign="center" variant="h4" component="h4" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                    {subheading}
                </Typography>
            </div >
        </>
    )
}
export default SectionHeader
