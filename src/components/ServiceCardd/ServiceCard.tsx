
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import iconn from "../ServiceCardd/iconn.jpg"

export default function ServiceCard() {
  return (
    <Card sx={{ maxWidth: 320, p: 2, width: 270, height: 193 }}>

      <Typography>
        <img style={{ width: 35 }} src={iconn} alt="hip" />
      </Typography>

      <Button size="small" color="primary"
        sx={{
          ":hover": {
            color: "gray",
            backgroundColor: "white"

          }
        }}>
        Sea Transport Services
      </Button>

      <Typography variant="body2" color="text.secondary">
        Following the quality of our service thus having gained trust of our many clients.
      </Typography>


    </Card>
  );
}