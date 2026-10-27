import Box from "@mui/material/Box";
import Sidebar from "../../../shared/layout/Sidebar";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          backgroundColor: "#F8F8F8",
          padding: "24px",
        }}
      >
        <h1 className="text-2xl font-bold">Products List</h1>

        {/* جدول دانشجویان */}
      </Box>
    </Box>
  );
}
