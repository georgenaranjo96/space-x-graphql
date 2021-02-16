import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from '../components/LaunchItems'
import MissionKey from '../components/MissionKey'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            mission_name,
            launch_year,
            flight_number
            launch_success,
            launch_date_local,
            rocket {
              rocket_name
                }
        }
}
`;
export class Launches extends Component {
    render() {
        return (
            <>
            <h1 className="display-4 my-3">Launches</h1>    
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4> </h4>;
                            if (error) console.log(error);
                        return <div>
                    {data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                                ))
                                 }

                 </div>;
                }}
                </Query>
            </>
        )
    }
}

export default Launches
