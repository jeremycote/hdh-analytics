// Import critical stuff
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import ProjectsOverviewSection from "./Sections/ProjectsOverview";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  // HTML Stuff
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="HDH Analytics Inc."
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>HDH Analytics</h1>
              <h4>Developing applications to make your life better.</h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="#projects"
                //target="_blank" Makes it open in a new page
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Apps
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <a name="projects" />
          <ProjectsOverviewSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
