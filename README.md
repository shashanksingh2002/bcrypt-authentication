<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Bcrypt-authentication</h1>
  <p>
    This repository contains a web application with user authentication functionality implemented using the bcrypt library. The backend is built with Node.js and Express.js, and the frontend uses HTML, CSS, and JavaScript. The file system is used as a database to store user details.
  </p>
  <h2>Technologies Used</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Express.js</li>
    <li>Node.js</li>
    <li>bcrypt</li>
    <li>Postman</li>
  </ul>
  <h2>Folder Structure</h2>
  <pre>
  bcrypt-authentication/
  ├── database/
  │   └── userdetails.json
  ├── public/
  │   ├── index.html
  │   ├── mainpage.html
  │   ├── signup.html
  │   ├── style.css
  │   └── script.js
  ├── server.js
  ├── fileop.js
  └── package.json
  </pre>
  <h2>Usage</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre>git clone &lt;repository-url&gt;</pre>

<li>Install dependencies:</li>
<pre>cd bcrypt-authentication
npm install</pre>

<li>Start the server:</li>
<pre>npm start</pre>
  </ol>
  <p>The application will be accessible at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
  <h2>Endpoints</h2>
  <h3>GET /</h3>
  <p>This endpoint is used to check if the server is running. It returns a simple "running" message.</p>
  <h3>POST /signup</h3>
  <p>This endpoint is used for user registration. It requires the following parameters in the request body:</p>
  <ul>
    <li><code>token</code>: A token string used for authentication. The token value should be set to 'qwertyuiop1029384756'.</li>
    <li><code>email</code>: The email address of the user.</li>
    <li><code>password</code>: The password for the user.</li>
  </ul>
  <p>Example Request Body:</p>
  <pre>
{
  "token": "qwertyuiop1029384756",
  "email": "example@example.com",
  "password": "password123"
}
  </pre>
  <p>Functionality:</p>
  <ul>
    <li>The endpoint checks if the provided token matches 'qwertyuiop1029384756' for authentication.</li>
    <li>The password is hashed using bcrypt.</li>
    <li>User details (email and hashed password) are stored in the database.</li>
    <li>If the user already exists in the database, it returns a response indicating that the user already exists.</li>
    <li>If the registration is successful, it redirects to the '/index.html' page.</li>
  </ul>
  <h3>POST /login</h3>
  <p>This endpoint is used for user login. It requires the following parameters in the request body:</p>
  <ul>
    <li><code>email</code>: The email address of the user.</li>
    <li><code>password</code>: The password for the user.</li>
  </ul>
  <p>Example Request Body:</p>
  <pre>
{
  "email": "example@example.com",
  "password": "password123"
}
  </pre>
  <p>Functionality:</p>
  <ul>
    <li>It retrieves user details from the database based on the provided email.</li>
    <li>It compares the provided password with the hashed password stored in the database using bcrypt.</li>
    <li>If the password is correct, it redirects to the '/mainpage.html' page.</li>
    <li>If the password is incorrect, it returns a response indicating that the password is wrong.</li>
    <li>If the user does not exist in the database, it redirects to the '/signup.html' page.</li>
  </ul>
  <h2>Disclaimer</h2>
  <p>
    This is a dummy web application with limited functionality and security measures. It is intended for learning and demonstration purposes only. Do not use this code in production without proper security reviews and enhancements.
  </p>
  <h2>GitHub Repository</h2>
  <p>The source code for this project can be found at: <a href="https://www.google.com/shashanksingh2002">GitHub</a></p>
</body>
</html>










