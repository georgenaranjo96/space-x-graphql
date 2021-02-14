import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            mission_name,
            launch_year,
            launch_success,
            rocket {
              rocket_name
                }
    }
}
`;

export class Launches extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">laucnhes</h1>
            </div>
        )
    }
}

export default Launches
