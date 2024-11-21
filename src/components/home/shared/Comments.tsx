import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function Comments() {
  const [firstExpanded, setFirstExpanded] = useState(true);
  const [secondExpanded, setSecondExpanded] = useState(false);

  return (
    <Box sx={{ mt: "70px" }}>
      <Accordion
        expanded={firstExpanded}
        onChange={() => setFirstExpanded(!firstExpanded)}
        sx={{
          borderRadius: "7px",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AccordionSummary
          expandIcon={
            firstExpanded === false ? (
              <AddIcon sx={{ fontSize: "2rem", color: "#a40731" }} />
            ) : (
              <CloseIcon sx={{ fontSize: "2rem", color: "#a40731" }} />
            )
          }
          sx={{
            backgroundColor: "#f9f9f9",
            borderBottom: "1px solid #e0e0e0",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#42403F" }}
          >
            Obiectul asigurării
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
            p: "20px",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Autovehicule înmatriculate în Republica Moldova, care aparțin
            persoanelor fizice și juridice.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Echipamentul suplimentar, care nu intră în dotarea autovehiculului
            conform listei de dotări ale uzinei producătoare.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Conducătorul auto și pasagerii, pentru cazuri de accidente care pot
            avea loc în timpul accidentelor rutiere.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        onChange={() => setSecondExpanded(!secondExpanded)}
        sx={{
          borderRadius: "7px",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={
            secondExpanded === false ? (
              <AddIcon sx={{ fontSize: "2rem", color: "#a40731" }} />
            ) : (
              <CloseIcon sx={{ fontSize: "2rem", color: "#a40731" }} />
            )
          }
          sx={{
            backgroundColor: "#f9f9f9",
            borderBottom: "1px solid #e0e0e0",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#42403F" }}
          >
            Riscuri și obligațiuni
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
            p: "20px",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Conținutul detaliat pentru secțiunea Riscuri și obligațiuni poate fi
            adăugat aici.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Comments;
