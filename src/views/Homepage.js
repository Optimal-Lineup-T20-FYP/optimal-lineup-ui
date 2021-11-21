import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import MainPost from "../components/MainPost";
import MiniPost from "../components/MiniPosts";

import MainPostImage from "./../static/mainpost.jpg";
import StatsImage from "./../static/stats.jpg";

class Homepage extends React.Component {
  state = {
    MainPost: {
      title: "Recommendation System for IPL Cricket System",
      description: "Legendary Title for our Final Year Project!",
      image: MainPostImage,
      imgText: "main image description",
    },
    MiniPost: [
      {
        title: "Player Stats",
        subtitle: "Statistics of Cricket Players",
        description:
          "Monitoring the system and producing some results in the form of Graphs, Charts and Numbers. . . ",
        image: StatsImage,
        imageText: "Image Text",
        ref: "/playerstats/V Kohli",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MainPost post={this.state.MainPost} />
        <Grid
          container
          spacing={2}
          justify="center"
          style={{ padding: "1rem", justifyContent: "center" }}
        >
          {this.state.MiniPost.map((post) => (
            <MiniPost key={post.title} post={post} />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Homepage;
