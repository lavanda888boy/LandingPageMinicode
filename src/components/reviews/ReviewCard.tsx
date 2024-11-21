import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import { Review } from "../../store";
import ClientPhoto from "../../assets/reviews/client_photo.jpg";

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card sx={{ width: "520px", p: "25px" }}>
      <CardContent
        sx={{
          "&:last-child": {
            p: "0px",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Box
            component="img"
            src={ClientPhoto}
            alt="client photo"
            sx={{ maxWidth: "30%", maxHeight: "100px" }}
          ></Box>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {review.author}
            </Typography>
            <Rating name="review-rating" value={review.rating} readOnly />
            <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
              {review.content}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
