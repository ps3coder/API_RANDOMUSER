import React from 'react'
import "../styles/UserStatistics.css";

const UserStatistics = ({ dob, registered, uuid, username }) => {


    // const age = new Date().getFullYear() - new Date(dob.date).getFullYear();
    const registrationDate = new Date(registered.date).toLocaleDateString();
    // console.log(age)
    // console.log(registrationDate)

    return (
        <div className="user-statistics container">
            <div className="user-statistics-section">
                <h3 className="user-statistics-title">Age</h3>
                <p className="user-statistics-text">
                    {dob} years
                </p>
            </div>
            <div className="user-statistics-section">
                <h3 className="user-statistics-title">Registered On</h3>
                <p className="user-statistics-text">
                    {registrationDate}
                </p>
            </div>
            <div className="user-statistics-section">
                <h3 className="user-statistics-title">User Name</h3>
                <p className="user-statistics-text">
                    {username}
                </p>
            </div>
            <div className="user-statistics-section">
                <h3 className="user-statistics-title">UUID</h3>
                <p className="user-statistics-text">
                    {uuid}
                </p>
            </div>
        </div>
    )
}

export default UserStatistics