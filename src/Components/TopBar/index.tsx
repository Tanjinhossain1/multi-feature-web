"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Grid,
} from "@mui/material";
import Link from "next/link"; // Import Link from Next.js

function TopNavigation() {
  return (
    <AppBar
      sx={{ m: 0, p: 0, width: "100%" }}
      position="static"
      color="default"
    >
      <Toolbar>
        <Grid container>
          <Grid xs={2}>
            <Typography variant="h6">
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Your Logo
              </Link>
            </Typography>
          </Grid>
          <Grid xs={7.5}> </Grid>
          <Grid xs={1}>
            <Button color="inherit" component={Link} href="/about">
              About Us
            </Button>
          </Grid>
          <Grid xs={1.5}>
            
          <Button color="inherit" component={Link} href="/privacy-policy">
              Privacy Policy
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavigation;
