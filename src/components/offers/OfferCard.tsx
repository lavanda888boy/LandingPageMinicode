import { Offer } from "../../store";
import OfferImage from "../../assets/offers/offer_image.jpg";
import ExpandOffer from "../../assets/offers/expand_offer.svg";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

interface OfferCardProps {
  offer: Offer;
}

function OfferCard({ offer }: OfferCardProps) {
  return (
    <Card sx={{ width: "520px" }}>
      <CardMedia component="img" alt="offer image" image={OfferImage} />
      <CardContent
        sx={{
          "&:last-child": {
            pb: "10px",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontWeight: "bold" }}
          component="div"
        >
          {offer.content}
        </Typography>
        <Typography variant="body2" sx={{ mt: "20px", mb: "10px" }}>
          {offer.content.slice(0, -1)}...
        </Typography>
        <Button
          startIcon={<img src={ExpandOffer} alt="login" />}
          sx={{
            ml: "5px",
            "&:last-child": {
              p: "0px",
            },
          }}
        ></Button>
      </CardContent>
    </Card>
  );
}

export default OfferCard;
