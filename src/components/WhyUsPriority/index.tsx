import { Stack, Typography } from "@mui/material";

interface IProps {
  imgSrc: string;
  title: string;
}

const WhyUsPriority = ({ imgSrc, title }: IProps) => {
  return (
    <Stack flexDirection="row" mt={3} alignItems="center" gap={2}>
      <img src={imgSrc} />
      <Typography variant="h5" component="h3" fontWeight={600}>
        {title}
      </Typography>
    </Stack>
  );
};

export default WhyUsPriority;
