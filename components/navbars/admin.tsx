"use client"
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
export default function AdminLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar variant="elevation" position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}