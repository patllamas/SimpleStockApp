import { Drawer } from "@mui/material";
import { useState } from "react";
import SearchBar from "./SearchBar";
import StockCard from "./StockCard";

const RightPanel = (props:any) => {
  const [stockList, setStockList] = useState([]);

  return (
    <Drawer
      sx={{
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 300,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <SearchBar setCurrentStock={props.setCurrentStock} setStockList={setStockList} />
      <StockCard stockList={stockList} />
      <StockCard stockList={stockList} />
      <StockCard stockList={stockList} />
    </Drawer>
  );
};

export default RightPanel;
