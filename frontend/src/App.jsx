import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card sx={{ maxWidth: 400, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Welcome to Multi-Vendor Store
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React + Material UI + Django Backend
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
