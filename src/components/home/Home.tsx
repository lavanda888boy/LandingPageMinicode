import { Box } from "@mui/material";
import InsuranceSelection from "./shared/InsuranceSelection";
import VehicleSelection from "./VehicleSelection";
import Comments from "./shared/Comments";
import Sidebar from "./shared/Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          height: "750px",
          pl: "10%",
          pr: "10%",
          pt: "100px",
          pb: "100px",
          mt: "100px",
          backgroundColor: "#F9F9F9",
        }}
      >
        <InsuranceSelection />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <VehicleSelection />
          <Comments />
        </Box>
      </Box>
    </>
  );
}

export default Home;
