import Box from "@mui/material/Box";
import Sidebar from "../../../shared/layout/Sidebar";
import ProductsDashboard from "../components/ProductsItems";

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

        {/* جدول دانشجویان */}
      </Box>
    </Box>
  );
}
