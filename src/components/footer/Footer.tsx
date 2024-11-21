import { Box, Button, Typography } from "@mui/material";
import Logo from "../../assets/Logo.svg";
import Viber from "../../assets/social_media/viber.svg";
import Facebook from "../../assets/social_media/facebook.svg";
import Instagram from "../../assets/social_media/instagram.svg";
import Telegram from "../../assets/social_media/telegram.svg";
import WhatsApp from "../../assets/social_media/whatsapp.svg";
import "./Footer.css";

function Footer() {
  return (
    <Box component="div" className="contacte-container">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "35px",
          alignSelf: "center",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{ width: "163px", height: "35px" }}
        ></Box>
        <Typography sx={{ lineHeight: "27px", maxWidth: "310px" }}>
          Dezvoltarea companiei MINICODE a fost determinată în mare parte de
          flexibilitatea soluțiilor și ofertelor, adaptivitații față de
          cerințele pieții și cerințelor clienților
        </Typography>
        <Button
          sx={{
            width: "176px",
            height: "40px",
            minHeight: "0px",
            minWidth: "0px",
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
            p: "0px 30px 0px 30px",
            borderRadius: "7px",
          }}
        >
          Comandă apel
        </Button>
      </Box>

      <Box component="div" className="contacte-container-enumeration">
        <Typography sx={{ fontWeight: "bold" }}>Companie</Typography>
        <Box component="div" className="contacte-container-items">
          <Typography>Noutăți</Typography>
          <Typography>Carieră</Typography>
          <Typography>Oferte</Typography>
          <Typography>Întrebări</Typography>
        </Box>
      </Box>

      <Box component="div" className="contacte-container-enumeration">
        <Typography sx={{ fontWeight: "bold" }}>Contacte</Typography>
        <Box component="div" className="contacte-container-items">
          <Typography sx={{ flexGrow: 5 }}>+373 69 845 825</Typography>
          <Typography>+373 22 824 825</Typography>
          <Typography>
            mun. Chișinău,
            <br /> str. București, 101
          </Typography>
        </Box>
      </Box>

      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "130px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Social media</Typography>
        <Box component="div" className="social-media-row">
          <Box
            component="img"
            src={Viber}
            alt="viber"
            className="social-media-icon"
          ></Box>
          <Box
            component="img"
            src={WhatsApp}
            alt="whatsapp"
            className="social-media-icon"
          ></Box>
        </Box>
        <Box component="div" className="social-media-row">
          <Box
            component="img"
            src={Facebook}
            alt="facebook"
            className="social-media-icon"
          ></Box>
          <Box
            component="img"
            src={Telegram}
            alt="telegram"
            className="social-media-icon"
          ></Box>
        </Box>
        <Box
          component="img"
          src={Instagram}
          alt="instagram"
          className="social-media-icon"
        ></Box>
      </Box>
    </Box>
  );
}

export default Footer;
