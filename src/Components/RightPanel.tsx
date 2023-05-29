import { Drawer } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import StockCard from "./StockCard";

const RightPanel = () => {
  return (
    <Drawer
      sx={{
        width: 300,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: 300,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
        <SearchBar />
        <StockCard />
    </Drawer>
  );
};

export default RightPanel;
