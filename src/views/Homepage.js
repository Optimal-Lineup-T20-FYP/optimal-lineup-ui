import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import MainPost from "../components/MainPost";
import Abstract from "../components/MiniPosts";

import AbstractImage from "./../static/abstract.png";

class Homepage extends React.Component {
  state = {
    MainPost: {
      title: "Recommendation System for IPL Cricket System",
      description: "Legendary Title for our Final Year Project!",
      image: "",
      imgText: "main image description",
    },
    Abstract: [
      {
        title: "Abstract",
        subtitle: "Abstract of the Project",
        description:
          "We strive to improve the quality of lives of people living in rural areas by building some basic facilities. Find more. . . ",
        image: AbstractImage,
        imageText: "Image Text",
        ref: "/abstract",
      },
      {
        title: "Player Stats",
        subtitle: "Statistics of Cricket Players",
        description:
          "Monitoring the system and producing some results in the form of Graphs, Charts and Numbers. . . ",
        image: "",
        imageText: "Image Text",
        ref: "/playerstats",
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
          style={{ padding: "1rem" }}
        >
          {this.state.Abstract.map((post) => (
            <Abstract key={post.title} post={post} />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Homepage;
