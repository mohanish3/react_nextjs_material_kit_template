import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Build from "@material-ui/icons/Build";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Chat from "@material-ui/icons/Chat";
import Computer from "@material-ui/icons/Computer";
import Equalizer from "@material-ui/icons/Equalizer";
import HeadsetMic from "@material-ui/icons/HeadsetMic";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function FeatureSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="features">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Features</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, blandit cursus libero. Curabitur at metus et lacus accumsan interdum facilisis et tortor. Proin accumsan ante ut porttitor vehicula."
              icon={Build}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, blandit cursus libero. Curabitur at metus et lacus accumsan interdum facilisis et tortor. Proin accumsan ante ut porttitor vehicula."
              icon={CalendarToday}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, blandit cursus libero. Curabitur at metus et lacus accumsan interdum facilisis et tortor. Proin accumsan ante ut porttitor vehicula."
              icon={Chat}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, blandit cursus libero. Curabitur at metus et lacus accumsan interdum facilisis et tortor. Proin accumsan ante ut porttitor vehicula."
              icon={Computer}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, blandit cursus libero. Curabitur at metus et lacus accumsan interdum facilisis et tortor. Proin accumsan ante ut porttitor vehicula."
              icon={Equalizer}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 6"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, blandit cursus libero. Curabitur at metus et lacus accumsan interdum facilisis et tortor. Proin accumsan ante ut porttitor vehicula."
              icon={HeadsetMic}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
