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

import styles from "assets/jss/material-kit-react/views/privacyPage.js";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";


import fivexfive from "assets/img/projects/5x5Icon.png";
import geoswapper from "assets/img/projects/GeoSwapperIcon.png";
import ifavs from "assets/img/projects/iFavsIcon.png";
import pedalboard from "assets/img/projects/PedalboardIcon.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function PrivacyPage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

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
            <Parallax filter image={require("assets/img/disk.jpg").default}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Privacy</h1>
                            <h4>
                                How we manage your data.
                            </h4>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div className={classes.section}>
                        <h2 className={classes.projectTitle}>Our Policies</h2>
                        <div>
                            <GridContainer>

                                <GridItem xs={8} sm={8} md={4}>
                                    <Card plain>
                                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                            <img src={geoswapper} alt="..." className={imageClasses} />
                                        </GridItem>
                                        <h4 className={classes.cardTitle}>
                                            GeoSwapper
                                            <br />
                                            <small className={classes.smallTitle}>Tile puzzles</small>
                                        </h4>


                                    </Card>
                                </GridItem>
                                <GridItem xs={16} sm={16} md={8}>
                                    <Card plain>
                                        <CardBody>
                                            <p className={classes.description}>
                                                GeoSwapper is built using Unity. As such, Unity may collect some of your data. Unity’s privacy policy is available at https://unity3d.com/legal/privacy-policy.
                                                <br/>
                                                <br/>
                                                In addition, GeoSwapper uses Unity’s Analytics feature.
                                                This allows us to understand how users interact with GeoSwapper and enhance the user experience.
                                                Unity’s Analytics privacy policy is available at https://unity3d.com/legal/privacy-policy.
                                            </p>
                                        </CardBody>

                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <hr/>
                            <GridContainer>

                                <GridItem xs={8} sm={8} md={4}>
                                    <Card plain>
                                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                            <img src={ifavs} alt="..." className={imageClasses} />
                                        </GridItem>
                                        <h4 className={classes.cardTitle}>
                                            GeoSwapper
                                            <br />
                                            <small className={classes.smallTitle}>File & Link Manager</small>
                                        </h4>
                                    </Card>
                                </GridItem>
                                <GridItem xs={16} sm={16} md={8}>
                                    <Card plain>
                                        <CardBody>
                                            <p className={classes.description}>
                                                We do not collect or make use of any of the information you enter in iFavs.
                                                Your links, their shorthand names, and your preferences are stored locally on your device.
                                                However, your links and their shorthand names are also stored on your iCloud account if iCloud Sync* is enabled.
                                                We do not process any of your information and have no access to it.
                                                <br/><br/>
                                                In addition, if you wish to delete your data, you can navigate to Edit Favorites in iFavs and click delete on each of your links in order to remove them permanently from your device.
                                                This will also delete them from iCloud if iCloud Sync is enabled.
                                                <br/><br/>
                                                *iCloud Sync can be found under Edit Favorites, on the right hand side of the window.
                                                iCloud support was introduced in version 2.0. Prior to this release, your information is only stored locally on your device.
                                            </p>
                                        </CardBody>

                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <hr/>
                            <GridContainer>

                                <GridItem xs={8} sm={8} md={4}>
                                    <Card plain>
                                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                            <img src={pedalboard} alt="..." className={imageClasses} />
                                        </GridItem>
                                        <h4 className={classes.cardTitle}>
                                            Pedalboard
                                            <br />
                                            <small className={classes.smallTitle}>Portable Effects</small>
                                        </h4>


                                    </Card>
                                </GridItem>
                                <GridItem xs={16} sm={16} md={8}>
                                    <Card plain>
                                        <CardBody>
                                            <p className={classes.description}>
                                                HDH Analytics Inc. does not collect any of your data (presets, usage history, etc). All saved data is stored on your device.
                                            </p>
                                        </CardBody>

                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <hr/>
                            <GridContainer>

                                <GridItem xs={8} sm={8} md={4}>
                                    <Card plain>
                                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                            <img src={fivexfive} alt="..." className={imageClasses} />
                                        </GridItem>
                                        <h4 className={classes.cardTitle}>
                                            WorkIt - 5x5 Math Puzzles
                                            <br />
                                            <small className={classes.smallTitle}>Math Puzzles</small>
                                        </h4>
                                    </Card>
                                </GridItem>
                                <GridItem xs={16} sm={16} md={8}>
                                    <Card plain>
                                        <CardBody>
                                            <p className={classes.description}>
                                                5×5 is built using Unity. As such, Unity may collect some of your data.
                                                Unity’s privacy policy is available at https://unity3d.com/legal/privacy-policy.
                                                <br/><br/>
                                                In addition, 5×5 uses Unity’s Analytics feature.
                                                This allows us to understand how users interact with 5×5 and enhance the user experience.
                                                Unity’s Analytics privacy policy is available at https://unity3d.com/legal/privacy-policy.
                                            </p>
                                        </CardBody>

                                    </Card>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
