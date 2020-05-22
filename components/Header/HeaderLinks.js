/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="#home" color="transparent" className={classes.navLink}>
          <Icon className={classes.icons}>home</Icon>Home
        </Button>
        {/*<CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />*/}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#features"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>unarchive</Icon> Features
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#team" color="transparent" className={classes.navLink}>
          <Icon className={classes.icons}>people</Icon> Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#pricing" color="transparent" className={classes.navLink}>
          <Icon className={classes.icons}>euro</Icon> Pricing
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#contactus"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>call</Icon> Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          Register
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          Login
        </Button>
      </ListItem>
    </List>
  );
}
