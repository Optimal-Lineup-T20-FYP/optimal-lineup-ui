import React from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
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
    flexDirection: "column",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: 20,
    boxSizing: "border-box",
  },
});

async function fetchPlayerData(name) {
  let resdata = [];
  await axios
    .get(`http://localhost:3000/profile/${name}`)
    .then((res) => {
      resdata = res.data.results;
      if(!resdata) throw new Error("Player Not Found")
    })
    .catch((err) => {
      console.log(err);
      return;
    });
  return resdata;
}

function PlayerStats(props) {
  const name = props.match.params.name || "all";
  const classes = useStyles();
  const [imageData, setImageData] = React.useState(
    "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
  );
  const [batterData, setBatterData] = React.useState(null);
  const [bowlerData, setBowlerData] = React.useState(null);

  React.useEffect(async () => {
    console.log("name", name);
    if (name !== "all") {
      let results = await fetchPlayerData(name);
      if(!results) props.history.goBack();
      if (results.batter) setBatterData(results.batter);
      if (results.bowler) setBowlerData(results.bowler);
      if (results.image)
        setImageData(
          `http://localhost:3000/static/${name} cricket player/Image_1.jpg`
        );
    } else {
      props.history.pop();
    }
  }, []);

  const statCard = (statName, statValue, key) => {
    return (
      <Grid item xs={12} md={4} key={key}>
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
    <Card
      className={classes.card}
      style={{
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "grey",
      }}
    >
      <Typography variant="h2">Player Statistics</Typography>
      <Card className={classes.card} style={{ width: "fit-content" }}>
        <div className={classes.cardDetails}>
          <CardMedia
            component="img"
            height="250"
            image={imageData}
            alt="Player Image"
            style={{ objectFit: "contain", paddingTop: 20 }}
          />
          <CardContent className={classes.cardContent}>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography variant="h7">India</Typography>
          </CardContent>
        </div>
      </Card>
      {batterData !== null && (
        <Card
          className={classes.card}
          style={{
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: "dimgray",
          }}
        >
          <Typography variant="h3" style={{ margin: "2rem" }}>
            Batting Statistics
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {Object.entries(batterData).map(([k, v], i) => {
              return statCard(k, v, i);
            })}
          </Grid>
        </Card>
      )}
      {bowlerData !== null && (
        <Card
          className={classes.card}
          style={{
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: "dimgray",
          }}
        >
          <Typography variant="h3" style={{ margin: "2rem" }}>
            Bowling Statistics
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {Object.entries(bowlerData).map(([k, v], i) => {
              return statCard(k, v, i);
            })}
          </Grid>
        </Card>
      )}
    </Card>
  );
}

export default PlayerStats;
