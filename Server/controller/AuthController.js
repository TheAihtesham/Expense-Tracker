const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists, you can login", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({ message: 'Signup Successfully', success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(403).json({ message: "Authentication Failed, Email or password wrong", success: false });
        }

        const isEqual = await bcrypt.compare(password, existingUser.password);
        if(!isEqual){
            return res.status(403).json({message: 'Authentication Failed, Email or password wrong', success: false })
        }
        const jwtToken = jwt.sign({email: existingUser.email, _id: existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.status(201).json({ message: 'Login Successfully', success: true, jwtToken, email, name: existingUser.name });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};


module.exports = {
    signup,
    login
};
