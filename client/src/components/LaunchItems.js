import classNames from 'classnames'
import Moment from 'react-moment'

export default function LaunchItems({ 
    launch: { flight_number, mission_name, launch_success, launch_date_local } 
}) {
    return (
        <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-9">
                <h4>Mission: <span className={classNames({
                    'text-success': launch_success,
                    'text-danger': !launch_success
                })}>{mission_name}</span>  </h4>
                <p>date: {launch_date_local} 
                </p>
            


            </div>
            <div className="col-md-3">
                <button className="btn btn-secondary">Details</button>

            </div>

        </div>
        </div>
    )
}
