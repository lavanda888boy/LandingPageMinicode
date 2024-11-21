import { Box, Button, TextField, Typography } from "@mui/material";

function Consultation() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "200px",
        pl: "15%",
        pr: "15%",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "47%",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Ai nevoie de o consultație?
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Lasă numele și numărul tău de telefon, iar noi te vom contacta în cel
          mai scurt timp posibil.
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mb: "20px",
          }}
        >
          <TextField
            label="Nume/Prenume"
            size="small"
            fullWidth
            sx={{ mr: "20px" }}
          />
          <TextField
            label="(+373) __-___-___"
            size="small"
            fullWidth
            sx={{ ml: "20px" }}
          />
        </Box>

        <Button
          sx={{
            width: "176px",
            height: "40px",
            minHeight: "0px",
            minWidth: "0px",
            alignSelf: "flex-end",
            backgroundColor: "#a40731",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            p: "0px 30px 0px 30px",
            borderRadius: "7px",
          }}
        >
          Trimite
        </Button>
      </Box>
    </Box>
  );
}

export default Consultation;
