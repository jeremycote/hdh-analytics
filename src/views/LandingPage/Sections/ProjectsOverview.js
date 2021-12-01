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

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import fivexfive from "assets/img/projects/5x5Icon.png";
import geoswapper from "assets/img/projects/GeoSwapperIcon.png";
import ifavs from "assets/img/projects/iFavsIcon.png";

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
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={geoswapper} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                GeoSwapper
                                <br />
                                <small className={classes.smallTitle}>Tile puzzles</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    You can write here details about one of your team members. You
                                    can give more details about what they do. Feel free to add
                                    some <a href="#pablo">links</a> for people to be able to
                                    follow them outside the site.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-linkedin"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={ifavs} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                iFavs
                                <br />
                                <small className={classes.smallTitle}>File & Link Manager</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    You can write here details about one of your team members. You
                                    can give more details about what they do. Feel free to add
                                    some <a href="#pablo">links</a> for people to be able to
                                    follow them outside the site.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={fivexfive} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                WorkIt - 5x5 Math Puzzles
                                <br />
                                <small className={classes.smallTitle}>Math puzzles</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    You can write here details about one of your team members. You
                                    can give more details about what they do. Feel free to add
                                    some <a href="#pablo">links</a> for people to be able to
                                    follow them outside the site.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={geoswapper} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                GeoSwapper
                                <br />
                                <small className={classes.smallTitle}>Tile puzzles</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    You can write here details about one of your team members. You
                                    can give more details about what they do. Feel free to add
                                    some <a href="#pablo">links</a> for people to be able to
                                    follow them outside the site.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-linkedin"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
