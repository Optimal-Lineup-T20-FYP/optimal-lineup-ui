import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  card: {
    display: "flex",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardDetails: {
    flex: 1,
    display: "flex",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "85%",
    width: "100%",
    paddingBottom: "0px !important",
    margin: 20,
  },
});

function PlayerStats() {
  const classes = useStyles();

  const statCard = (statName, statValue) => {
    return (
      <Grid item xs={12} md={4}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
                {statName}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {statValue}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      style={{ height: "calc(100% - 100px)" }}
    >
      <Grid item xs={12} md={4}>
        <Card className={classes.card} style={{ height: "75%" }}>
          <div className={classes.cardDetails} style={{ height: "100%" }}>
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
                Virat Kohli
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Batsman - India
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Captain
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2} justify="center" alignItems="center">
          {statCard('Run Rate', '110.43')}
          {statCard('Run Rate', '110.43')}
          {statCard('Run Rate', '110.43')}
          {statCard('Run Rate', '110.43')}
          {statCard('Run Rate', '110.43')}
          {statCard('Run Rate', '110.43')}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PlayerStats;
