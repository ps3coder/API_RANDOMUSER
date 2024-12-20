import React from 'react'
import "../styles/UserProfileHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons';
const UserProfileHeader = ({ picture, firstName, lastName, email, gender }) => {
    return (
        <div>
            <div className="user-profile-header">
                <img
                    src={picture}
                    alt="Profile Picture"
                    className="user-profile-image"
                />
            </div>
            <div className="user-profile-name-container">
                <h2 className="user-profile-name">
                    {firstName} {lastName}
                </h2>
            </div>
            <div className="user-profile-gender">
                {gender === "male" ? (
                    <FontAwesomeIcon icon={faPerson} />
                ) : (
                    <FontAwesomeIcon icon={faPersonDress} />
                )}
                <p>{gender}</p>
            </div>
            <div className="user-profile-email">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>{email}</p>
            </div>
        </div>
    );
};
export default UserProfileHeader;