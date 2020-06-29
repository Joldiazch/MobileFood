import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// Styles
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function TruckInfo(props) {
  /* Component that render Truck information with Material UI Card */

  const classes = useStyles();
  
  return (
    <Card>
      <CardBody>
        <h4 className={classes.cardTitle}>{props.info.applicant}</h4>

          <p>{props.info.address}</p>

          {/* Condition for show/not-show Schedule */}
          {props.info.schedule[0]
            ? <h5>{props.info.schedule[0].start24} - {props.info.schedule[0].end24}</h5>
            : <h5>No Schedule</h5>
          }

        <Button color="primary" onClick={() => props.setPopupInfo(null)}>Close</Button>
      </CardBody>
    </Card>
  );
}