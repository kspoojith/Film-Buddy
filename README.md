# Film Buddy

Film Buddy is a web application designed to assist users in discovering movies and managing their personal watchlists. Users can search for films, view detailed information, and maintain a list of movies they wish to watch.

## Features

- **Movie Search**: Users can search for movies by title and view details such as release date, genre, and synopsis.
- **Watchlist Management**: Users can add or remove movies from their personal watchlist.
- **User Authentication**: Secure user registration and login functionality to manage personal watchlists.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kspoojith/Film-Buddy.git
   cd Film-Buddy
   ```

2. **Install dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_session_secret` with a secret key for session management.

4. **Start the application**:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Technologies Used

- **Backend**: Node.js with Express.js framework
- **Frontend**: EJS templating engine
- **Database**: MongoDB
- **Authentication**: Passport.js

## Project Structure

```
Film-Buddy/
├── config/
│   └── db.js               # Database configuration
├── middleware/
│   └── auth.js             # Authentication middleware
├── models/
│   └── User.js             # User model
├── public/
│   ├── css/
│   │   └── styles.css      # CSS styles
│   └── js/
│       └── scripts.js      # Client-side scripts
├── routes/
│   ├── index.js            # Main routes
│   └── users.js            # User-related routes
├── views/
│   ├── partials/
│   │   └── header.ejs      # Header partial
│   └── index.ejs           # Home page
├── .gitignore
├── package.json
└── server.js               # Main server file
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add new feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.


## Acknowledgements

Special thanks to K.satvik kiran, v.vamsi Krishna for contributing in this project

---

*Note: This README is based on the structure and information available in the [Film Buddy repository](https://github.com/kspoojith/Film-Buddy.git). For more details, please refer to the repository.*
