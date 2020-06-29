import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// React Scroll-To
import { ScrollTo } from "react-scroll-to";


// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import {useState} from 'react';

// Sections for this page
import Map from "./Sections/MapSection.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [truckSelection, SetTruckSelection] = useState(null)

  
  const onClickAutocompleteField = truck => {
    /* handle the selection for display only one truck selected */
    SetTruckSelection(truck);
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Mobile Food"
        rightLinks={<HeaderLinks onClick={onClickAutocompleteField}/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>You're Free to Eat whatever You Want.</h1>
              <h3>Your food is the most important thing for us!</h3>
              <h4>
                We show you the food trucks closest to you. You can see their
                schedule, type of menu and rating of each one, so you can choose
                the best option.
              </h4>
              <br />
              <ScrollTo>
              {({ scroll }) => (
                <Button
                  color="danger"
                  size="lg"
                  onClick={() => scroll({ x: 20, y: 500, smooth: true})}
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-map-signs"></i>
                  Go to map
                </Button>)}
              </ScrollTo>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Map truckSelection={truckSelection}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
