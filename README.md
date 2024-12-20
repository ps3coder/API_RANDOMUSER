# User Profile App

This is a simple React application that fetches and displays user information from the [Random User API](https://randomuser.me/api/?page=1&results=1&seed=abc).

## Features

- Fetches random user data from the Random User API.
- Displays user information in a visually appealing card layout.
- Includes user details like name, email, address, and phone number etc.
- Links to social profiles based on the username.

## Components

The application is built using the following reusable components:

1. **UserProfile**: Main component that fetches user data and assembles the profile.
2. **UserProfileHeader**: Displays the user's profile picture and name.
3. **UserDetails**: Shows additional details such as address and phone number.
4. **SocialLinks**: Displays social media links based on the username.

## Demo

![Demo Screenshot](https://github.com/ps3coder/Project_images_url/blob/main/Screenshot%202024-12-20%20232654.png)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ps3coder/API_RANDOMUSER
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

```
user-profile-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── UserProfile.js
│   │   ├── UserProfileHeader.js
│   │   ├── UserDetails.js
│   │   └── SocialLinks.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── tailwind.config.js
├── package.json
└── ...
```

## API Reference

This project uses the [Random User API](https://randomuser.me/api/?page=1&results=1&seed=abc) to fetch user data. Example API request:

```
https://randomuser.me/api/?page=1&results=1&seed=abc
```



## Technologies Used

- **Frontend**: React, TailwindCSS , FontAwesomeIcon(For Icon) , GoogleFonts(for fonts)
- **API**: Random User API

## Customization

Feel free to extend the application by:
- Adding more components for additional user details.
- Styling components using TailwindCSS or another library.
- Integrating with other APIs to enrich user data.

## Acknowledgments

- [Random User API](https://randomuser.me/) for providing the sample user data.
- React community for providing excellent tools and documentation.

---
