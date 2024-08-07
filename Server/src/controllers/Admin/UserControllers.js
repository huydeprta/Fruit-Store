const User = require('../../../model/User/UserModel');

const getAllUserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            if (!users) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(users);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Error fetching user list' });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json("Successfully deleted");
        } catch (error) {
            res.status(500).json({ message: "Delete failed" });
        }
    }
};

module.exports = getAllUserController;