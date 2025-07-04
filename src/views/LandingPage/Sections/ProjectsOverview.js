import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/projectsStyle.js";

import fivexfive from "assets/img/projects/5x5Icon.png";
import geoswapper from "assets/img/projects/GeoSwapperIcon.png";
import ifavs from "assets/img/projects/iFavsIcon.png";
import displayArranger from "assets/img/projects/DisplayArranger.png";
import pedalboard from "assets/img/projects/PedalboardIcon.png";
import ttol from "assets/img/projects/TTOLIcon.png";

import downloadiOS from "assets/img/download-buttons/DownloadAppStore.svg";
import downloadmacOS from "assets/img/download-buttons/DownloadMacAppStore.svg";
import downloadGoogle from "assets/img/download-buttons/DownloadGoogle.png";

const pedalboardLink =
  "https://apps.apple.com/app/apple-store/id1584890462?pt=121840887&ct=HDHAnalyticsWebsite&mt=8";
const iFavsLink =
  "https://apps.apple.com/app/apple-store/id1523364813?pt=121840887&ct=iFavsHDHAnalyticsWebsite&mt=8";
const fxfLinkApple =
  "https://apps.apple.com/app/apple-store/id1551729886?pt=121840887&ct=WorkItHDHAnalyticsWebsite&mt=8";
const geoswapperLinkApple =
  "https://apps.apple.com/us/developer/hdh-analytics-inc/id1523364815";
const displayArrangerLink =
  "https://apps.apple.com/us/app/display-arranger/id6475056370?pt=121840887&ct=WorkItHDHAnalyticsWebsite&mt=8";

const useStyles = makeStyles(styles);

export default function ProjectsOverviewSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Products</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <a name="DisplayArranger" />
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={displayArranger}
                  alt="Display Arranger App Icon"
                  className={classes.imgFluid}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Display Arranger
                <br />
                <small className={classes.smallTitle}>
                  Easily arrange your displays
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Easily rearrange your displays with an intuitive UI and save
                  your favourite arrangements for easy access.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a
                  href={displayArrangerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img style={styles.download} src={downloadmacOS} />
                </a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <a name="iFavs" />
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={ifavs}
                  alt="iFavs App Icon"
                  className={classes.imgFluid}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                iFavs
                <br />
                <small className={classes.smallTitle}>
                  File & Link Manager
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Organise and use all of your links, files, and apps using
                  iFavs. With quick and convenient access from the menubar, your
                  favorites are a click away.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a href={iFavsLink} target="_blank" rel="noopener noreferrer">
                  <img style={styles.download} src={downloadmacOS} />
                </a>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <a name="fivexfive" />
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={fivexfive}
                  alt="5x5 Math Puzzles App Icon"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                WorkIt - 5x5 Math Puzzles
                <br />
                <small className={classes.smallTitle}>Math puzzles</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  5x5 Math Puzzles puts your arithmetic skills to the test with
                  grid based puzzles. Multiple difficulty levels allows anyone
                  to get started.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a
                  href={fxfLinkApple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img style={styles.download} src={downloadiOS} />
                </a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <a name="pedalboard" />
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={pedalboard}
                  alt="Pedalboard App Icon"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Pedalboard
                <br />
                <small className={classes.smallTitle}>Portable Effects</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Plug in an instrument and your ready to jam. Pedalboard allows
                  you to play in realtime with various effects. Looking for a
                  little customization? Every pedal is adjustable using
                  intuitive knobs.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a
                  href={pedalboardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img style={styles.download} src={downloadiOS} />
                </a>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <a name="ttol" />
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={ttol}
                  alt="Two Truths One Lie App Icon"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Two Truths One Lie
                <br />
                <small className={classes.smallTitle}>iMessage game</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Play Two Truths One Lie on iMessage with your friends.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a
                  href={fxfLinkApple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img style={styles.download} src={downloadiOS} />
                </a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <a name="geoswapper" />
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={geoswapper}
                  alt="GeoSwapper App Icon"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                GeoSwapper
                <br />
                <small className={classes.smallTitle}>Tile puzzles</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Guess animals, food, and landmarks from all over the world!
                  <br />
                  Not sure what it is? Complete the puzzle to reveal a beautiful
                  image.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a
                  href={geoswapperLinkApple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img style={styles.download} src={downloadiOS} />
                </a>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
