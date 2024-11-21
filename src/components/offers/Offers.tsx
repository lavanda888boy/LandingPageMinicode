import { Box, Typography, Button } from "@mui/material";
import { useOfferStore } from "../../store";
import { useEffect } from "react";
import ExpandOfferList from "../../assets/offers/expand_offer_list.svg";
import OfferCard from "./OfferCard";

function Offers() {
  const offers = useOfferStore((state) => state.offers);
  const fetchOffers = useOfferStore((state) => state.fetchOffers);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "430px",
        pl: "15%",
        pr: "15%",
        pt: "55px",
        pb: "100px",
        backgroundColor: "#f4f9ff",
        color: "black",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Oferte
        </Typography>
        <Button
          startIcon={<img src={ExpandOfferList} alt="expand offers" />}
          sx={{
            "& .MuiButton-startIcon": { marginRight: "0px" },
            "&:last-child": {
              p: "0px",
            },
          }}
        ></Button>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "20px",
          mt: "30px",
        }}
      >
        {offers.slice(0, 3).map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </Box>
    </Box>
  );
}

export default Offers;
