import { Box, Button, Typography } from "@mui/material";
import Gradient from "../../..//assets/home/gradient.png";
import Arrow from "../../../assets/home/arrow_right.svg";
import { useInsuranceStore } from "../../../store";
import { useEffect } from "react";

function InsuranceSelection() {
  const insuranceTypes = useInsuranceStore((state) => state.insurances);
  const fetchInsurances = useInsuranceStore((state) => state.fetchInsurances);

  useEffect(() => {
    fetchInsurances();
  }, [fetchInsurances]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        p: "30px",
        backgroundImage: `url(${Gradient})`,
        backgroundSize: "cover",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
        Alege tipul de asigurare
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {insuranceTypes.map((insurance) => (
          <Button
            key={insurance.id}
            sx={{
              backgroundColor: "white",
              textTransform: "none",
              pl: "30px",
              pr: "30px",
              pt: "7px",
              pb: "7px",
              borderRadius: "7px",
            }}
          >
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {insurance.title}
            </Typography>
          </Button>
        ))}
        <Button sx={{ background: "none", textTransform: "none" }}>
          <Typography variant="body1" sx={{ color: "white" }}>
            Altele
          </Typography>
          <Box
            component="img"
            src={Arrow}
            alt="arrow"
            sx={{ ml: "15px" }}
          ></Box>
        </Button>
      </Box>
    </Box>
  );
}

export default InsuranceSelection;
