import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const AreaList = ({ areas }) => (
  <>
    {areas.map((area, index) => (
      <Grid
        container
        justifyContent="space-between"
        key={index}
        sx={{ mt: 2, width: "70%" }}
      >
        <Typography>
          {area.area} ({area.city})
        </Typography>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </Grid>
    ))}
  </>
);

export default AreaList;
