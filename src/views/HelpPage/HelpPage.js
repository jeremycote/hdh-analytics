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

export default function HelpPage(props) {
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
                            <h1 className={classes.title}>Help</h1>
                            <h4>
                                Let us help you.
                            </h4>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div className={classes.section}>
                        <h2 className={classes.projectTitle}>Our Products</h2>
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
                                                The goal is to complete puzzles by either correctly placing the puzzle pieces or by spelling out the answer.
                                                <br/><br/>
                                                To repeat the in-game tutorial, tap the settings button in the top left corner of the app&apos;s home page.
                                                Then tap Show Tutorial when I play.
                                                The tutorial will now play the next time you open a level.
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
                                                <a href="https://www.youtube.com/watch?v=aya0gHhPWdo&feature=emb_imp_woyt" target="_blank" rel="noopener noreferrer">Click here for a Video Tutorial</a>
                                                <br/><br/>
                                                Adding a new favorite:<br/>
                                                <ol>
                                                    <li>Click on the star (Top right corner of your screen)</li>
                                                    <li>Click Add to Favorites…</li>
                                                    <li>Enter the name of your link in the Name textbox</li>
                                                    <li>Enter the URL(Link) of the website you wish to save in the URL textbox</li>
                                                    <li>Click the Save button to save your favorite</li>
                                                </ol>
                                                <br/>
                                                Removing a favorite:<br/>
                                                <ol>
                                                    <li>Click on the star (Top right corner of your screen)</li>
                                                    <li>Click Edit Favorites…</li>
                                                    <li>Find the website you wish to delete in the left hand list</li>
                                                    <li>Click the x on the desired website’s row</li>
                                                </ol>
                                                <br/>
                                                Opening a favorite:<br/>
                                                <ol>
                                                    <li>Click on the star (Top right of your screen)</li>
                                                    <li>Once a website is added (See Adding a new website), locate it in the list</li>
                                                    <li>Click on the desired website’s name</li>
                                                </ol>
                                                <br/>
                                                Moving a favorite:<br/>
                                                <ol>
                                                    <li>Click on the star (Top right corner of your screen)</li>
                                                    <li>Click Edit Favorites…</li>
                                                    <li>Drag the website’s name to the desired location<br/>
                                                        (Up arrow moves the favorite up one row)<br/>
                                                        (Down arrow moves the favorite down one row)</li>
                                                </ol>
                                                <br/>
                                                Reset settings:<br/>
                                                <ol>
                                                    <li>Click on the star. (Top right of your screen)</li>
                                                    <li>Click on the Recommended Defaults button</li>
                                                </ol>
                                                <br/>
                                                Settings:<br/>
                                                <ul>
                                                    <li>Launch application at login: Turn on app with your computer.</li>
                                                    <li>Automatically add http://: Highly recommended, increases security.</li>
                                                    <li>iCloud Sync: Synchronize favourites with your other Macs, also serves as backup.</li>
                                                    <li>Enable startup prompt: Show introduction window next time app starts.</li>
                                                    <li>Recommended Defaults: resets settings to recommended settings.</li>
                                                    <li>Sync group: Group where favorites are stored. These are: Favorites, Home, Work, and Other.</li>
                                                    <li>When changed, your favorites will automatically change to display those of the current group.</li>
                                                </ul>
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
                                                Toggle pedals by tapping on the grey stomp buttons.
                                                <br/>
                                                <br/>
                                                Edit pedal parameters by tapping and holding on the pedal&apos;s graphic.
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
                                                To replay tutorial, tap the tutorial button at the app&apos;s main menu.
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
