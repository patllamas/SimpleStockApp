import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const HeaderBar = () => {
  return (
    <Box sx={{ marginBottom: "80px" }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Pat's Simple Stock App</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
