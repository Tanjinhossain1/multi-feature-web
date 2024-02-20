"use client";
import { Grid, Paper } from "@mui/material";
import React from "react";
import Editor from "./BlogEditor";

export default function BlogParent() {
  return (
    <div>
      <Grid container sx={{ mt: 1 }}>
        <Grid xs={0} lg={1}></Grid>
        <Grid xs={12} lg={10}>
          <Paper elevation={3} >
          <h1>Welcome to the title</h1>
          <br />
          <Editor onEditorDataChange={(data)=>console.log('data',data)}/>
          </Paper>
        </Grid>
        <Grid xs={0} lg={1}></Grid>
      </Grid>
    </div>
  );
}
