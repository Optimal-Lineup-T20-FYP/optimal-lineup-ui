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
  },
});

function PlayerStats() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={12} md={2}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
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
    </Grid>
  );
}

export default PlayerStats;
