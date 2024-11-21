import { Box, Button, Typography } from "@mui/material";
import ArrowRight from "../../assets/home/arrow_right.svg";
import ArrowLeft from "../../assets/home/arrow_left.svg";
import Car from "../../assets/home/car.svg";
import Minitruck from "../../assets/home/minitruck.svg";
import Truck from "../../assets/home/truck.svg";
import Minibus from "../../assets/home/minibus.svg";
import Bus from "../../assets/home/bus.svg";
import Trailer from "../../assets/home/trailer.svg";
import Refrigerant from "../../assets/home/refrigerant.svg";
import Technique from "../../assets/home/technique.svg";
import OtherTechnique from "../../assets/home/other_technique.svg";

function VehicleSelection() {
  const items = [
    { icon: Car, text: "Autoturism cu până la 9 locuri" },
    { icon: Minitruck, text: "Camion până la 3,5 tone" },
    { icon: Truck, text: "Camion mai mult de 3,5 tone" },
    { icon: Minibus, text: "Microbus până la 20 locuri" },
    { icon: Bus, text: "Autobuz peste 20 locuri" },
    { icon: Trailer, text: "Remorci, semiremorci" },
    { icon: Refrigerant, text: "Refrigeratoare, cisterne" },
    { icon: Technique, text: "Tehnică specială" },
    { icon: OtherTechnique, text: "Echipament suplimentar" },
  ];

  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
    >
      <Typography variant="h5" sx={{ color: "black", fontWeight: "bold" }}>
        Alege tipul autovehicului
      </Typography>

      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {items.map((item, index) => (
          <Box
            component="div"
            key={index}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "15px 20px",
              backgroundColor: "white",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              component="img"
              src={item.icon}
              alt={item.text}
              sx={{ width: "50px", height: "50px", mb: "7px" }}
            />
            <Typography variant="body2" sx={{ color: "#1B1918" }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "white",
            color: "black",
            border: "1px solid #a40731",
            fontWeight: "bold",
            p: "10px 30px",
            borderRadius: "7px",
          }}
        >
          <Box
            component="img"
            src={ArrowLeft}
            alt="arrow"
            sx={{ mr: "10px" }}
          ></Box>
          <Typography variant="body1">Înapoi</Typography>
        </Button>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "#a40731",
            color: "white",
            fontWeight: "bold",
            p: "10px 30px",
            borderRadius: "7px",
          }}
        >
          <Typography variant="body1">Înainte</Typography>
          <Box
            component="img"
            src={ArrowRight}
            alt="arrow"
            sx={{ ml: "10px" }}
          ></Box>
        </Button>
      </Box>
    </Box>
  );
}

export default VehicleSelection;
