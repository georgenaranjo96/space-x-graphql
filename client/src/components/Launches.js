import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from '../components/LaunchItems'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            mission_name,
            launch_year,
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
                <h1 className="display-4 my-3">launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>loading</h4>;
                            if (error) console.log(error);
                            console.log(data);
                            return <div>
                        {data.launches.map(launch => (
                        <LaunchItem key={launch.flight_number} launch={launch} />
                                ))
                                 }

                            </div>;





                        }
                    }
                </Query>
            </>
        )
    }
}

export default Launches
