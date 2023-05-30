import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const StockDashboard = (props:any) => {
    return(
        <Box>
            <Typography variant="h2" color="initial">APPL</Typography>
            <Typography variant="h2" color="initial">Apple Inc</Typography>
            <Typography variant="h4" color="initial">Last Month</Typography>
            <Typography variant="h4" color="initial">$160.36</Typography>
            <Divider />
            <Typography variant="h4" color="initial">Last Week</Typography>
            <Typography variant="h4" color="initial">$170.12</Typography>
            <Divider />
            <Typography variant="h4" color="initial">Today's stock price</Typography>
            <Typography variant="h4" color="initial">$175.43</Typography>
            <Divider />
            <Typography variant="h4" color="initial">Net Profit if bought last week and sold today</Typography>
            <Typography variant="h2" color="green">$5.31</Typography>
        </Box>
    )
}

export default StockDashboard;
