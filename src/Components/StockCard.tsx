import { Card, CardHeader, Typography } from "@mui/material";
import React from "react";

const StockCard = (props: any) => {
  return (
    <Card
      sx={{
        marginBottom: "20px",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "#f0f2f5",
        width: '250px'
      }}
    >
      <Typography variant="h6" color="black">
        APPL
      </Typography>
      <Typography variant="body2" color="black">
        Apple Inc
      </Typography>
      <Typography variant="body2" color="black">
        Last Week's Price: $178.18
      </Typography>
      <Typography variant="body2" color="black">
        Today's Price: $175.43
      </Typography>
    </Card>
  );
};

export default StockCard;
