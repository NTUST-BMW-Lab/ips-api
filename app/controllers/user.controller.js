const Model = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    console.log("login")
    const {username, password} = req.body;

    try {
        // Find the user by username
        const user = await Model.findOne({username});

        // Check if the user exists
        if (!user) {
            return res.status(401).json({message: "Invalid username or password"});
        }

        // Compare the provided password with the stored password hash
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({message: "Invalid username or password"});
        }

        // Generate a JWT token
        const token = jwt.sign({userId: user._id}, process.env.TOKEN_KEY, {
            expiresIn: "1h", // Token expiration time
        });

        // Send the token in the response
        res.json({token});
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({message: "An error occurred during login"});
    }
};

const register = async (req, res) => {
    const {username, email, type, password} = req.body;

    try {
        // Check if the username or email is already registered
        const existingUser = await Model.findOne().or([{username}, {email}]);
        if (existingUser) {
            return res
                .status(400)
                .json({message: "Username or email already exists"});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new Model({
            username,
            email,
            type,
            password: hashedPassword,
        });

        // Save the user to the database
        const savedUser = await user.save();

        res
            .status(201)
            .json({message: "Registration successful", user: savedUser});
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({message: "An error occurred during registration"});
    }
};

module.exports = {
    login,
    register,
};
