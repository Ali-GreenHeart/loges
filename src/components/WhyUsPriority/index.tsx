import { Box, Stack, Typography } from "@mui/material";

interface IProps {
  imgSrc: string;
  title: string;
}

const WhyUsPriority = ({ imgSrc, title }: IProps) => {
  return (
    <Stack flexDirection="row" mt={3} alignItems="center" gap={2}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
          width: 50,
          height: 50,
          borderRadius: '50%'
        }}
      >
        <img src={imgSrc} />
      </Stack>
      <Typography variant="h5" component="h3" fontWeight={600}>
        {title}
      </Typography>
    </Stack>
  );
};

export default WhyUsPriority;
