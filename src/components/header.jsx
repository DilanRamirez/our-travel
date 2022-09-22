import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 3 }} style={{}}>
      <AppBar
        position="static"
        style={{
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
          backgroundColor: "#7c8fe8",
        }}
      >
        <b>
          <Typography variant="h5"> &#128156; Our Travel &#128156;</Typography>
        </b>
      </AppBar>
    </Box>
  );
}
