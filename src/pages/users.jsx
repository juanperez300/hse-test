import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AvatarUser from "../components/avatars/AvatarUser";
import NewUsers from "../components/newUsers/NewUsers";
import InputFindUsers from "../components/input/InputFindUsers";
import Table from "../components/table/Table";
import AppContext from "../context/AppContext";

export default function SimpleContainer() {
  const {filter} = React.useContext (AppContext)
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#F9FAFB", height: "100vh", margin: 0 }}>
        
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "30px",
              }}
            >
              <AvatarUser sx={{}} />
            </Grid>
            <Grid item xs={12}>
              <NewUsers />
            </Grid>
            
            <Grid item xs={12}>
             <Table/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
