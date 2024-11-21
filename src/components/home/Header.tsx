import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuButton from "../../assets/home/menu.svg";
import Logo from "../../assets/home/logo.svg";
import Login from "../../assets/home/login.svg";
import Register from "../../assets/home/register.svg";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (open: boolean) => () => {
    setIsMenuOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              width: "100%",
              height: "100px",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
            }}
          >
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "row", gap: "50px" }}
            >
              <Button
                startIcon={
                  <img
                    src={MenuButton}
                    alt="menu icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                }
                sx={{ backgroundColor: "white", color: "black" }}
                onClick={toggleMenu(true)}
              ></Button>
              <Box component="img" src={Logo} alt="logo"></Box>
            </Box>

            <Divider sx={{ width: "18%" }} />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Cu siguranță, împreună!
            </Typography>
            <Divider sx={{ width: "18%" }} />

            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<img src={Login} alt="login" />}
                sx={{
                  "&:last-child": {
                    p: "0px",
                  },
                }}
              ></Button>
              <Button
                startIcon={<img src={Register} alt="login" />}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:last-child": {
                    p: "0px",
                  },
                }}
              ></Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu(false)} />
    </>
  );
}

export default Header;
