/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import LoginModal from "components/LoginModal/LoginModal.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import Router from "next/router";

const useStyles = makeStyles(styles);

export default function HeaderLinksLoggedIn(props) {
  const classes = useStyles();
  const {email} = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button onClick={() => Router.replace('/landing')} color="transparent" className={classes.navLink}>
          <Icon className={classes.icons}>home</Icon>Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>person</Icon> Welcome {email}
        </Button>
      </ListItem>
    </List>
  );
}
