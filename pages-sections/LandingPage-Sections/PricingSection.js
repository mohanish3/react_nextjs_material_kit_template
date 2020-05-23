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
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function PricingSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} id="pricing">
      <h2 className={classes.title}>Pricing</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h3>
                  <b>Starter</b>
                </h3>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  ₹14.99 <small>/ mo</small>
                </h3>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 1
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 2
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 3
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h3>
                  <b>Premium</b>
                </h3>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  ₹29.99 <small>/ mo</small>
                </h3>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 4
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 5
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 6
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h3>
                  <b>Business</b>
                </h3>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  ₹49.99 <small>/ mo</small>
                </h3>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 1
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 2
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 3
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 4
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 5
                </p>
                <p className={classes.description}>
                  <Icon className={classes.icons}>check</Icon> Feature 6
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
