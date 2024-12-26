<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop Management System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        code {
            background: #eaeaea;
            padding: 2px 4px;
            border-radius: 4px;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <h1><img src="https://link-to-your-logo.com/logo.png" alt="Company Logo" style="max-width: 200px;"></h1>
    <h2>Mini Project - Shop Management System</h2>

    <h3>1. Overview</h3>
    <p>This project is a <strong>Shop Management System</strong> that allows users to manage their retail shops, including functionalities for user registration, shop details management, invoice generation, and stock tracking. The application is built using <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, and various front-end technologies.</p>

    <h3>2. Features</h3>
    <ul>
        <li><strong>User Registration and Login</strong></li>
        <li><strong>Shop Details Management</strong></li>
        <li><strong>Invoice Generation and Management</strong></li>
        <li><strong>Stock Tracking and Management</strong></li>
        <li><strong>Contact Form for User Inquiries</strong></li>
        <li><strong>Admin Dashboard for Managing Users and Shops</strong></li>
    </ul>

    <h3>3. Technologies Used</h3>
    <ul>
        <li><strong>Node.js</strong></li>
        <li><strong>Express.js</strong></li>
        <li><strong>MongoDB</strong></li>
        <li><strong>Mongoose</strong></li>
        <li><strong>Handlebars (hbs)</strong></li>
        <li><strong>Bcrypt</strong> for password hashing</li>
        <li><strong>Nodemailer</strong> for email functionality</li>
        <li><strong>HTML5</strong>, <strong>CSS3</strong> for front-end design</li>
    </ul>

    <h3>4. Getting Started</h3>

    <h4>Prerequisites</h4>
    <p>Before you begin, ensure you have met the following requirements:</p>
    <ul>
        <li><strong>Node.js</strong>: Make sure you have Node.js installed on your machine. You can download it from the <a href="https://nodejs.org/" target="_blank">Node.js official website</a>.</li>
        <li><strong>MongoDB</strong>: You need to have MongoDB installed and running. You can download it from the <a href="https://www.mongodb.com/" target="_blank">MongoDB official website</a>.</li>
    </ul>

    <h4>Clone the Repository</h4>
    <ol>
        <li>Open your terminal or command prompt.</li>
        <li>Clone the repository using the following command:
            <br><code>git clone https://github.com/yourusername/Mini-Project-Final-Phase.git</code>
        </li>
        <li>Navigate into the project directory:
            <br><code>cd Mini-Project-Final-Phase</code>
        </li>
    </ol>

    <h4>Install Dependencies</h4>
    <p>Install the required dependencies using npm:</p>
    <code>npm install</code>

    <h4>Environment Variables</h4>
    <ol>
        <li>Create a <code>.env</code> file in the root directory of the project.</li>
        <li>Add the following environment variables to the <code>.env</code> file:
            <pre>
            JWT_SECRET=your_jwt_secret
            EMAIL_USER=your_email@example.com
            EMAIL_PASS=your_email_password
            </pre>
            Replace <code>your_jwt_secret</code>, <code>your_email@example.com</code>, and <code>your_email_password</code> with your actual values.
        </li>
    </ol>

    <h4>Start the Server</h4>
    <p>To start the server, run the following command:</p>
    <code>npm start</code>
    <p>Alternatively, you can use nodemon for automatic server restarts during development:</p>
    <code>npx nodemon src/index.js</code>
    <p>The server will start on <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>. You can access the application by opening this URL in your web browser.</p>

    <h3>5. Usage</h3>
    <ol>
        <li>Navigate to the home page to register or log in.</li>
        <li>After logging in, you can manage your shop details, view invoices, and track stock.</li>
        <li>Admin users can access the admin dashboard to manage users and shops.</li>
    </ol>

    <h3>6. Contributing</h3>
    <p>Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.</p>

    <h3>7. License</h3>
    <p>This project is licensed under the <strong>MIT License</strong> - see the LICENSE file for details.</p>

    <h3>8. Acknowledgments</h3>
    <p>Thanks to the contributors and the open-source community for their support and resources.</p>
</div>

</body>
</html>
