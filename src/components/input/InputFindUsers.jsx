import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import TextField from "@mui/material/TextField";
export default function InputAdornments() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          label="Search users.."
          sx={{ width: "240px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <SearchIcon />{" "}
              </InputAdornment>
            ),
            sx: { borderRadius: "8px" }
          }}
        />
      </div>
    </Box>
  );
}