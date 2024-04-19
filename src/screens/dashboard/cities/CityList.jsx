import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const CityList = ({ cities }) => (
  <>
    {cities.map((city, index) => (
      <Grid
        container
        justifyContent="space-between"
        key={index}
        sx={{ mt: 2, width: "70%" }}
      >
        <Typography>{city}</Typography>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </Grid>
    ))}
  </>
);

export default CityList;
