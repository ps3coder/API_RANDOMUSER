import React, { useState, useEffect } from "react";
import UserProfileHeader from './UserProfileHeader'
import UserDetails from "./UserDetails";
import UserStatistics from "./UserStatistics";
import SocialLinks from "./SocialLinks";
import '../styles/UserProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser, faSpinner } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
            const data = await response.json();
            setUser(data.results[0]);
        };
        fetchUser();
    }, []);


    if (!user) {
        return <div className="loader">
            <FontAwesomeIcon icon={faSpinner} />
            Loading...</div>;
    }

    return (
        <div className="user-profile-container">
            <div className="user-profile-card">
                <UserProfileHeader
                    picture={user.picture.large}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    email={user.email}
                    gender={user.gender}

                />

                <UserDetails user={user} />
                <UserStatistics
                    dob={user.dob.age}
                    registered={user.registered}
                    username={user.login.username}
                    uuid={user.login.uuid}

                />
                <SocialLinks username={user.login.username} />
            </div>
        </div>
    )
}

export default UserProfile