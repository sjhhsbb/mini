const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the current directory
app.use(express.static('.'));

// API endpoint to get all users
app.get('/api/users', (req, res) => {
    try {
        const data = fs.readFileSync('users.json', 'utf8');
        const usersData = JSON.parse(data);
        res.json(usersData);
    } catch (error) {
        console.error('Error reading users file:', error);
        res.status(500).json({ error: 'Failed to read users data' });
    }
});

// API endpoint to add a new user
app.post('/api/users', (req, res) => {
    try {
        // Read the current users data
        const data = fs.readFileSync('users.json', 'utf8');
        const usersData = JSON.parse(data);
        
        // Get the new user data from the request body
        const newUser = req.body;
        
        // Validate required fields
        if (!newUser.cliente_NOMBRE || !newUser.cliente_ID || !newUser.Client_KeyAccecs) {
            return res.status(400).json({ error: 'Missing required fields: cliente_NOMBRE, cliente_ID, Client_KeyAccecs' });
        }
        
        // Generate a new ID (increment the highest existing ID)
        const maxId = Math.max(...usersData.Users.map(user => user.id), 0);
        newUser.id = maxId + 1;
        
        // Set default values if not provided
        newUser.status = newUser.status !== undefined ? newUser.status : 1;
        newUser.cliente_DateStarted = newUser.cliente_DateStarted || new Date().toLocaleDateString('en-GB');
        
        // Set default expiration date if not provided (1 year from now)
        if (!newUser.cliente_DateExpired) {
            const today = new Date();
            const nextYear = new Date(today.setFullYear(today.getFullYear() + 1));
            newUser.cliente_DateExpired = nextYear.toLocaleDateString('en-GB');
        }
        
        // Add the new user to the Users array
        usersData.Users.push(newUser);
        
        // Write the updated data back to the file
        fs.writeFileSync('users.json', JSON.stringify(usersData, null, 4));
        
        // Return success response
        res.json({ success: true, message: 'User added successfully', user: newUser });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Failed to add user' });
    }
});

// API endpoint to validate a user by ID
app.get('/api/validate/:userId', (req, res) => {
    try {
        const userId = req.params.userId;
        const data = fs.readFileSync('users.json', 'utf8');
        const usersData = JSON.parse(data);
        
        const user = usersData.Users.find(u => u.cliente_ID === userId);
        
        if (user) {
            // Check if user account is active
            if (user.status === 1) {
                // Check expiration date
                const currentDate = new Date();
                const expireDate = new Date(user.cliente_DateExpired.split('-').reverse().join('-'));
                
                if (currentDate <= expireDate) {
                    res.json({ 
                        success: true, 
                        message: 'Activation Successful!', 
                        user: user 
                    });
                } else {
                    res.json({ 
                        success: false, 
                        message: 'Activation Failed: Your account has expired' 
                    });
                }
            } else {
                res.json({ 
                    success: false, 
                    message: 'Activation Failed: Account is inactive' 
                });
            }
        } else {
            res.json({ 
                success: false, 
                message: 'Activation Failed: Invalid activation ID' 
            });
        }
    } catch (error) {
        console.error('Validation error:', error);
        res.status(500).json({ error: 'An error occurred during validation' });
    }
});

// Serve the main HTML file for the root route and other paths
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/list', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});