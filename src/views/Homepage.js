import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import MainPost from "../components/MainPost";
import Abstract from "../components/MiniPosts";
import Header from "../components/Header";

class Homepage extends React.Component {
  state = {
    MainPost: {
      title: "Rural Water Supply and Sanitation System",
      description:
        "To improve the quality of lives of people living in rural areas by building a composite and decentralised rural water supply and sanitation system.",
      image: "",
      imgText: "main image description",
    },
    Abstract: [
      {
        title: "Abstract",
        subtitle: "Abstract of the Project",
        description:
          "We strive to improve the quality of lives of people living in rural areas by building some basic facilities. Find more. . . ",
        image: "",
        imageText: "Image Text",
        ref: "/abstract",
      },
      {
        title: "Analytics",
        subtitle: "Analytics of the Project",
        description:
          "Monitoring the system and producing some results in the form of Graphs, Charts and Numbers. . . ",
        image: "",
        imageText: "Image Text",
        ref: "/analytics",
      },
      {
        title: "Emergency",
        subtitle: "Emergency Contacts of Employees",
        description:
          "Know Your Employees at Work. In the case of an Emergency we are always here ready to help. . .",
        image: "",
        imageText: "Image Text",
        ref: "/emergency",
      },
      {
        title: "How to Donate",
        subtitle: "Donation Procedure for this Project",
        description:
          "If You wish to Donate for the cause of enriching the lives of millions in the country, here is what you have to do. . . ",
        image: "",
        imageText: "Image Text",
        ref: "/howtodonate",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <MainPost post={this.state.MainPost} />
        <Grid container justify="center">
          {this.state.Abstract.map((post) => (
            <Abstract key={post.title} post={post} />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Homepage;
