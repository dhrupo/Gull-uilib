import * as React from "react";
import { Box, Grid } from "@material-ui/core";
import Dashboard from "../src/components/Dashboard";

export default function Index() {
  return (
    <Grid container spacing={3}>
      <Dashboard></Dashboard>
    </Grid>
  );
}
