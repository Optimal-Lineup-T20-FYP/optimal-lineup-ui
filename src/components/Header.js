import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Header() {
  const classes = useStyles();
  let Token = sessionStorage.getItem("Token");
  if (!Token || Token.length === 0) {
    return (
      <React.Fragment>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
              component="a"
              style={{ textDecoration: "none" }}
              href="/"
            >
              Rural Water Supply and Sanitation System
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="/login"
                className={classes.link}
              >
                Login
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
              component="a"
              style={{ textDecoration: "none" }}
              href="/"
            >
              Rural Water Supply and Sanitation System
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="/dashboard"
                className={classes.link}
              >
                Dashboard
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="/abstract"
                className={classes.link}
              >
                Abstract
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="/analytics"
                className={classes.link}
              >
                Analytics
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="/emergency"
                className={classes.link}
              >
                Emergency
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                onClick={(e) => {
                  console.log("Logout");
                  sessionStorage.removeItem("Token");
                  sessionStorage.removeItem("Designation");
                }}
                href="/"
                className={classes.link}
              >
                Logout
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
