import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AvatarUser from "../components/avatars/AvatarUser";
import NewUsers from "../components/newUsers/NewUsers";
import InputFindUsers from "../components/input/InputFindUsers";
import Table from "../components/table/Table";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#F0F1F2", height: "100vh", margin: 0 }}>
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
