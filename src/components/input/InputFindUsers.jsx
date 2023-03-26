import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import TextField from "@mui/material/TextField";
export default function InputAdornments() {
  const [lookfor, setLookfor] = React.useState({
    name: "",
  });
  const handleSearch = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setLookfor({
      ...lookfor,
      [name]: value,
    });
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          name="name"
          onChange={handleSearch}
          defaultValue="Search users.."
          sx={{ width: "240px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <SearchIcon />{" "}
              </InputAdornment>
            ),
            sx: { borderRadius: "8px" },
          }}
        />
      </div>
      
    </Box>
  );
}
