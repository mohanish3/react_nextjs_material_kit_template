import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import FeatureSection from "pages-sections/LandingPage-Sections/FeatureSection.js";
import PricingSection from "pages-sections/LandingPage-Sections/PricingSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="home">
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material tech"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eu pharetra eros, blandit cursus libero. Curabitur at
                metus et lacus accumsan interdum facilisis et tortor. Proin
                accumsan ante ut porttitor vehicula. Nulla facilisi. Donec
                libero lacus, bibendum at aliquam ullamcorper, viverra et
                lectus.
              </h4>
              <br />
              <Button
                color="white"
                size="lg"
                href="https://github.com/mohanish3/react_nextjs_material_kit_template"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code" />
                Open github page
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <FeatureSection />
          <TeamSection />
          <PricingSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
