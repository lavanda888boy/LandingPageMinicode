import { Drawer, Box, Button, Typography, Divider } from "@mui/material";
import CloseMenu from "../../assets/home/close_menu.svg";
import Home from "../../assets/home/home.svg";
import Users from "../../assets/home/users.svg";
import CheckCircle from "../../assets/home/check_circle.svg";
import Delivery from "../../assets/home/delivery.svg";
import File from "../../assets/home/file_reg.svg";
import Star from "../../assets/home/star.svg";
import Support from "../../assets/home/support.svg";
import Question from "../../assets/home/question.svg";
import BigPhone from "../../assets/home/big_phone.svg";
import SmallPhone from "../../assets/home/small_phone.svg";
import Mail from "../../assets/home/mail.svg";
import Map from "../../assets/home/map.svg";
import Search from "../../assets/home/search.svg";
import Language from "../../assets/home/lang.svg";

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function Menu({ isMenuOpen, toggleMenu }: MenuProps) {
  return (
    <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
          height: "100%",
          p: "20px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pt: "12px",
            pb: "12px",
          }}
        >
          <Button
            startIcon={
              <img
                src={CloseMenu}
                alt="close menu icon"
                style={{ width: "20px", height: "20px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
            onClick={toggleMenu}
          ></Button>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Meniu
          </Typography>
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "10px",
            mb: "30px",
          }}
        >
          <Button
            startIcon={
              <img
                src={Home}
                alt="home"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Pagina Principală
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Users}
                alt="users"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Despre Minicode
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={CheckCircle}
                alt="check circle"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Produse de asigurare
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Delivery}
                alt="delivery"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Caz asigurat
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={File}
                alt="file"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Cariera
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Star}
                alt="star"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Oferte
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Support}
                alt="support"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Noutăți
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Question}
                alt="question"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Întrebări
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={BigPhone}
                alt="phone"
                style={{ width: "24px", height: "24px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Contacte
            </Typography>
          </Button>
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pl: "15px",
            mb: "10px",
          }}
        >
          <Box
            component="img"
            src={Language}
            alt="language"
            sx={{ width: "18px", height: "18px" }}
          ></Box>
          <Typography
            variant="body1"
            sx={{ color: "#a40731", fontWeight: "bold", ml: "10px" }}
          >
            Рус
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ height: "1.5rem", width: "1px", ml: "5px", mr: "5px" }}
          />
          <Typography variant="body1">Ro</Typography>
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "10px",
          }}
        >
          <Button
            startIcon={
              <img
                src={SmallPhone}
                alt="home"
                style={{ width: "18px", height: "18px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography variant="body1" sx={{ textTransform: "none" }}>
              + 373 69 845 845
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Mail}
                alt="home"
                style={{ width: "18px", height: "18px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography variant="body1" sx={{ textTransform: "none" }}>
              office@minicode.md
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Map}
                alt="home"
                style={{ width: "18px", height: "18px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography
              variant="body1"
              sx={{ textTransform: "none", textAlign: "left" }}
            >
              mun. Chisinau, str Bucuresti, 101
            </Typography>
          </Button>
          <Button
            startIcon={
              <img
                src={Search}
                alt="home"
                style={{ width: "18px", height: "18px" }}
              />
            }
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Typography variant="body1" sx={{ textTransform: "none" }}>
              Harta
            </Typography>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Menu;
