Film Buddy
Film Buddy is a web application designed to assist users in discovering movies and managing their personal watchlists. Users can search for films, view detailed information, and maintain a list of movies they wish to watch.

Features
Movie Search: Users can search for movies by title and view details such as release date, genre, and synopsis.
Watchlist Management: Users can add or remove movies from their personal watchlist.
User Authentication: Secure user registration and login functionality to manage personal watchlists.
Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/kspoojith/Film-Buddy.git
cd Film-Buddy
Install dependencies:

Ensure you have Node.js installed. Then, install the necessary packages:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

env
Copy code
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
Replace your_mongodb_connection_string with your MongoDB connection string and your_session_secret with a secret key for session management.

Start the application:

bash
Copy code
npm start
The application will be accessible at http://localhost:3000.

Technologies Used
Backend: Node.js with Express.js framework
Frontend: EJS templating engine
Database: MongoDB
Authentication: Passport.js
Project Structure
pgsql
Copy code
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
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch:

bash
Copy code
git checkout -b feature-name
Make your changes and commit them:

bash
Copy code
git commit -m 'Add new feature'
Push to the branch:

bash
Copy code
git push origin feature-name
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Special thanks to all contributors and the open-source community for their invaluable resources and support.

Note: This README is based on the structure and information available in the Film Buddy repository. For more details, please refer to the repository.
