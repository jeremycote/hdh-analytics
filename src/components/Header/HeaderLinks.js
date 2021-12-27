/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Products"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
              <a href="/#geoswapper" className={classes.dropdownLink}>GeoSwapper</a>,
              <a href="/#iFavs" className={classes.dropdownLink}>iFavs</a>,
              <a href="/#fivexfive" className={classes.dropdownLink}>WorkIt</a>,
              <a href="/#pedalboard" className={classes.dropdownLink}>Pedalboard</a>,
              <a href="/#ttol" className={classes.dropdownLink}>Two Truths One Lie</a>,
              /*
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
            */
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://play.google.com/store/apps/developer?id=HDH+Analytics+Inc"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> PlayStore
        </Button>
      </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="https://apps.apple.com/us/developer/hdh-analytics-inc/id1523364815"
                color="transparent"
                target="_blank"
                className={classes.navLink}
            >
                <CloudDownload className={classes.icons} /> Appstore
            </Button>
        </ListItem>


      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/hdh_analytics/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
              Instagram
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
