/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';


// Apollo
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const TRUCKS = gql`
{
  allTruck{
    fooditems
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

const filter = createFilterOptions();

export default function FreeSoloCreateOption(props) {
  const [value, setValue] = React.useState(null);
  const { loading, error, data } = useQuery(TRUCKS);
  const {onClick} = props;

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
          onClick(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            //title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={data.allTruck.map(truck => {
          const { fooditems, latitude, longitude, address, applicant, schedule} = truck
          return {'title': fooditems, 'latitude': latitude, 'longitude': longitude, 'address': address, 'applicant': applicant, 'schedule': schedule}
      })}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="What are you eating today?" variant="outlined" />
      )}
    />
  );
}
