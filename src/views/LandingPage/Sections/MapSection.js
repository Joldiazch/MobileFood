import React from "react";
import {useState} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
// MapBox
import ReactMapGL from 'react-map-gl';
import {GeolocateControl} from 'react-map-gl';
import {Popup} from 'react-map-gl';
import Pins from './pins';
import TruckInfo from './truck-info';
// Apollo
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
// Styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
//Graphql query
const TRUCKS = gql`
{
  allTruck{
    latitude
    longitude
    address
    applicant
    schedule{
      dayofweekstr
      start24
      end24
    }
  }
}
`;
const useStyles = makeStyles(styles);

const geolocateControlStyle = {
  position: 'absolute',
  top: 10,
  left: 0,
  padding: '10px'
};

export default function Map(props) {
  const classes = useStyles();

  // Initializate states
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "75vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10
  });
  const [popupInfo, setPopupInfo] = useState(null)
  const { loading, error, data } = useQuery(TRUCKS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const onClickMarker = truck => {
    /* Fucntion that set and moficate popupInfo state*/
    setPopupInfo(truck);
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
          <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken = 'pk.eyJ1Ijoiam9sZGlhemNoIiwiYSI6ImNrYndpaGJxazAxMmkyc3M1b3Rsbm5pbXIifQ.Ke6UTsdL7T6V4KnVDeXfww'
            mapStyle= 'mapbox://styles/mapbox/streets-v11'>

                {/* render one or all pints */}
                {props.truckSelection
                  ? <Pins data={[props.truckSelection]} onClick={onClickMarker} />
                  : <Pins data={data.allTruck} onClick={onClickMarker} />
                }
                {/* Render popup */}
                {popupInfo && <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={parseFloat(popupInfo.longitude)}
                    latitude={parseFloat(popupInfo.latitude)}
                    closeOnClick={false}
                    onClose={() => setPopupInfo(null)}>
                    <TruckInfo info={popupInfo} setPopupInfo={setPopupInfo}/>
                </Popup>}

                {/* Get UserLocation */}
                <div style={geolocateControlStyle}>
                <GeolocateControl positionOptions={{enableHighAccuracy: true}} trackUserLocation={true}/>
                </div>
          </ReactMapGL>
      </GridContainer>
    </div>
  );
}
