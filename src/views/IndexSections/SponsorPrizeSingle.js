import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

//rgb(30,30,30)   #f0f0f0

export default function SponsorPrizeSingle({ img, body, link, style}) {
  return (
    <Card
      sx={{ width: 345, backgroundColor: "rgb(30,30,30)" }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        sx={style}
        image={img}
        alt="logo"
      />
      <CardContent>
        <Typography variant="body2" color="#B0B0B0">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link}>
          learn more
        </Button>
      </CardActions>
    </Card>
  );
}
