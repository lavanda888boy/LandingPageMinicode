import { useEffect } from "react";
import { useReviewStore } from "../../store";
import { Box, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "../../assets/reviews/review_carousel.svg";

function Reviews() {
  const reviews = useReviewStore((state) => state.reviews);
  const fetchReviews = useReviewStore((state) => state.fetchReviews);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "430px",
        pl: "11.5%",
        pr: "11.5%",
        pt: "50px",
        pb: "160px",
        backgroundColor: "#F9F9F9",
        color: "black",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Recenziile clienților
      </Typography>

      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          pt: "30px",
        }}
      >
        {reviews.slice(0, 4).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Box>
      <Box
        component="img"
        src={ReviewCarousel}
        alt="review carousel"
        sx={{ maxWidth: "15%", alignSelf: "center", mt: "10px" }}
      ></Box>
    </Box>
  );
}

export default Reviews;
