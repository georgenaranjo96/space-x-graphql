
import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {Link } from 'react-router-dom';
import className from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  } 
`

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
      <Query query={LAUNCH_QUERY} variables={{flight_number}}>
      {
        ({loading, error, data }) => {
          if(loading) return <h4>Loading....</h4>;

          if(error) return console.log(error);

          console.log(data);

          const { 
            mission_name, 
            flight_number, 
            launch_year, 
            launch_success, 
            rocket: { rocket_id, rocket_name, rocket_type } 
          } = data.launch;

          return <div>
          <h1 className="display-4 my-3"><span className="text-dark">Mission:</span>
          {mission_name}</h1>
          </div>;
        }
      }
      
      </Query>
      </Fragment>
    )
  }
}

export default 