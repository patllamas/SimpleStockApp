import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import StockInfoCard from "./StockInfoCard";

const StockDashboard = (props: any) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div style={{ display: "inline-block" }}>
            <Typography variant="h2" color="initial">
              APPL
            </Typography>
            <Typography variant="h4" color="initial">
              Apple Inc
            </Typography>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div>
            <Typography variant="h5" color="initial">
              Net Profit if bought last week and sold today
            </Typography>
            <Typography variant="h3" color="green">
              $5.31
            </Typography>
          </div>
        </Grid>
      </Grid>

      <StockInfoCard label="Last Month" price="$160.36" />
      <StockInfoCard label="Last Week" price="$170.12" />
      <StockInfoCard label="Today's Price" price="$175.43" />
    </Container>
  );
};

export default StockDashboard;
