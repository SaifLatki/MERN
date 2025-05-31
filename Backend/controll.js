import User from './model.js';

// Create a new user
const create = async (req, res) => {
    const { name,email,age } = req.body;
    try {
        const user = new User({ name,email,age });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Failed to create user' });
    }
};

// Get one user by ID
const getone = async (req, res) => {
    try {
        const fuser = await User.findById(req.params.id);
        if (!fuser) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(fuser);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

// Get all users
const getall = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
        
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

// Update a user by ID
const update = async (req, res) => {
    try {
        const { name,email,age } = req.body;
        const updateuser = await User.findByIdAndUpdate(
            req.params.id,
            { name,email,age },
            { new: true } // returns the updated document
        );

        if (!updateuser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User updated', user: updateuser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

export { create, getone, getall, update };
