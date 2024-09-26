
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., JS and CSS) from the "public" folder
app.use(express.static('public'));

// POST route for the chat page (after login)
app.post('/', (req, res) => {
    const username = req.body.user; // Get username from the login form

    // Send chat page with username (passed to the frontend via a script)
    res.send(`
        <h1>Group Chat Page</h1>
        <br>
        <p>Welcome, ${username}</p>
        <form id="chatForm" action="" method="get">
            <input type="text" id="chatInput" name="chat" placeholder="Enter your message">
            <input type="submit" value="Submit">
        </form>
        <div id="chatBox"></div>

        <script>
            // Store username in localStorage for future messages
            localStorage.setItem('username', "${username}");
        </script>
        <script src="/js/chat.js"></script>
    `);
});

// GET route for the login page
app.get('/login', (req, res) => {
    res.send(`
        <h1>Login Page</h1>
        <br>
        <form action="/" method="post">
            <input type="text" name="user" placeholder="Enter your username">
            <input type="submit" value="Login">
        </form>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`SERVER RUNNING AT.. http://localhost:${PORT}`);
});
