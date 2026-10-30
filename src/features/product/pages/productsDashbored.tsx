import Box from "@mui/material/Box";
import ProductsDashboard from "../components/Products";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          backgroundColor: "#F8F8F8",
          padding: "24px",
        }}
      >
        

        <ProductsDashboard/>

       
      </Box>
    </Box>
  );
}
