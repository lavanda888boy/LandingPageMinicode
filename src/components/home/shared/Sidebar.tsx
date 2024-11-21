import { Box, Button, Divider, Typography } from "@mui/material";
import Language from "../../../assets/home/lang.svg";
import Phone from "../../../assets/home/big_phone.svg";
import Messenger from "../../../assets/home/messenger.svg";
import WhatsApp from "../../../assets/home/whatsapp.svg";

function Sidebar() {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        top: "100px",
        left: "0",
        height: "880px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: "35px 18px",
        backgroundColor: "#F9F9F9",
        borderRight: "1px solid #E5E5E5",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: "10px",
        }}
      >
        <Box
          component="img"
          src={Language}
          alt="language"
          sx={{ width: "32px", height: "32px" }}
        ></Box>
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "row", mt: "10px" }}
        >
          <Typography variant="body2" sx={{ color: "#a40731" }}>
            Рус
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ height: "1.5rem", width: "1px", ml: "5px", mr: "5px" }}
          />
          <Typography variant="body2" sx={{ color: "#1B1918" }}>
            Eng
          </Typography>
        </Box>
      </Box>

      <Divider orientation="vertical" sx={{ height: "220px" }} />

      <Button
        startIcon={
          <img
            src={Phone}
            alt="phone"
            style={{ width: "32px", height: "32px", marginLeft: "15px" }}
          />
        }
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: "50px",
            textTransform: "none",
            color: "#1B1918",
          }}
        >
          Sună
        </Typography>
      </Button>

      <Divider orientation="vertical" sx={{ height: "220px", mt: "30px" }} />

      <Button
        startIcon={
          <img
            src={Messenger}
            alt="messenger"
            style={{ width: "32px", height: "32px", marginLeft: "15px" }}
          />
        }
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: "50px",
            textTransform: "none",
            color: "#1B1918",
            mb: "10px",
          }}
        >
          Messenger
        </Typography>
      </Button>

      <Divider sx={{ width: "100%", height: "20px", mb: "-10px" }} />

      <Button
        startIcon={
          <img
            src={WhatsApp}
            alt="whatsapp"
            style={{ width: "32px", height: "32px", marginLeft: "15px" }}
          />
        }
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: "50px",
            textTransform: "none",
            color: "#1B1918",
          }}
        >
          Whatsapp
        </Typography>
      </Button>
      <Box component="div"></Box>
    </Box>
  );
}

export default Sidebar;
