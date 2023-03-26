import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
export default function NewUsers() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "35px",
      }}
    >
      <h1>Users</h1>{" "}
      <Button
        sx={{ height: "35px" }}
        variant="contained"
        startIcon={<AddIcon />}
      >
        New User
      </Button>{" "}
    </div>
  );
}
