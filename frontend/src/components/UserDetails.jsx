import React from 'react'
import "../styles/UserDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faEnvelope, faMap, faMapLocation, faMapLocationDot, faPerson, faPersonDress, faPhoneFlip, faPhoneSquare, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


const UserDetails = ({ user }) => {
    const DOB = new Date(user.dob.date).toLocaleDateString();

    return (
        <div className="user-details-container">
            <div className="user-details-section">
                <h3 className="user-details-title"><FontAwesomeIcon icon={faMapLocationDot} />  Address</h3>

                <p className="user-details-text">
                    {user.location.street.number} {user.location.street.name},{" "}
                    {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}
                </p>
            </div>
            <div className="user-details-section">
                <h3 className="user-details-title"><FontAwesomeIcon icon={faPhoneVolume} />  Contact</h3>

                <p className="user-details-text">
                    {user.phone}
                </p>
            </div>
            <div className="user-details-section">
                <h3 className="user-details-title"><FontAwesomeIcon icon={faCake} />  Date Of Birth</h3>

                <p className="user-details-text">
                    {DOB}
                </p>
            </div>

        </div>
    )
}

export default UserDetails