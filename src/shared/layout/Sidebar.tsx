import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LogOut, ShoppingCart, UserPen } from "lucide-react";


const menuItems = [
  { title: "Products", icon: ShoppingCart },
  { title: "Profile", icon: UserPen },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 210,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 210,
          boxSizing: "border-box",
          backgroundColor: "#F4ECE3",
          border: "none",
          padding: "16px",
          position: "static",
          height: "100vh",
        },
      }}
    >
      <Box className="flex h-full flex-col">
        <h2 className="mb-10 text-center text-lg font-bold">CRUD OPERATIONS</h2>

        <Box className="mb-8 text-center">
          <img
            src="/avatar.png"
            alt="Profile"
            className="mx-auto mb-3 h-24 w-24 rounded-full object-cover"
          />
          <p className="font-semibold">Karthi Madesh</p>
          <p className="mt-1 text-sm text-primary">Admin</p>
        </Box>

        <List className="flex-1">
          {menuItems.map(({ title, icon: Icon }) => (
            <ListItem key={title} disablePadding className="mb-2">
              <ListItemButton
                selected={title === "Students"}
                sx={{
                  borderRadius: "4px",
                  "&.Mui-selected": {
                    backgroundColor: "#FFAE00",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#F5A500",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32, color: "inherit" }}>
                  <Icon size={17} />
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  slotProps={{
                    primary: {
                      sx: { fontSize: 13 },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <LogOut size={17} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
