import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const StockInfoCard = (props: any) => {
  return (
    <Card
      sx={{
        width: "300px",
        height: "200px",
        display: "inline-block",
        margin: "20px",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "#f0f2f5",
      }}
    >
      <CardContent>
        <Typography sx={{ textTransform: 'uppercase' }} variant="h5" color="initial">
          {props.label}
        </Typography>
        <Typography variant="h4" color="initial">
          {props.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StockInfoCard;
