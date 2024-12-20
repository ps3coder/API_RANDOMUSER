import React from 'react'
import '../styles/SocialLinks.css'

const SocialLinks = ({ username }) => {
    return (
        <div className="social-links-container">
            <a
                href={`https://www.linkedin.com/in/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-link-gray"
            >
                <i className="fab fa-github fa-lg"></i>
            </a>
            <a
                href={`https://twitter.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <i className="fab fa-twitter fa-lg"></i>
            </a>
        </div>
    )
}

export default SocialLinks