import { Box, Typography } from "@mui/material"
import MuiButton from "@mui/material/Button"

interface IProps {
    title: string;
    isPrimary: boolean;
}


const Button = ({ title, isPrimary = false }: IProps) => {
    return (
        <MuiButton variant="contained" color={isPrimary ? "primary" : "secondary"}
            sx={{
                position: "relative",
                overflow: 'hidden',
                background: isPrimary ?
                    "linear-gradient(45deg, #FFB629, #FFDA56, #FFD7A6)" : "",
                "&>div": {
                    transition: "all 0.5s",
                },
                "&:hover>div": {
                    transform: "scale(4)",
                    bottom: 5,
                    right: 10,
                },
                "&>p": {
                    color: isPrimary ? "black" : "white"
                }

            }}
        >
            <Typography component="p" sx={{ zIndex: 2 }}>{title}</Typography>.
            <Box bgcolor={isPrimary ? "#FFFFFF" : "#1F2A69"} sx={{ position: "absolute", right: -10, bottom: -10, borderRadius: "50%", width: 30, height: 30, zIndex: 1 }}></Box>
        </MuiButton>
    )
}
export default Button
