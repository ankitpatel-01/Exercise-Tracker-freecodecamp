const express = require('express');
const UserModel = require('../models/user');

const UserList = async () => {
    const list = await User.find()
        .select("-authKey -__v");
    return list;
};

exports.addNewUser = async (req, res) => {
    try {
        console.log(req.body)
        const user = req.body.username;

        const foundUser = await UserModel.findOne({ username: user });

        if (foundUser) {
            res.json({
                "username": foundUser.username,
                "_id": foundUser._id,
                "Status": "Existing User Found"
            });
        } else {
            const newUser = new UserModel({ username: user });

            const savedUser = await newUser.save();

            res.json({
                "username": savedUser.username,
                "_id": savedUser._id,
                "AuthKey": savedUser.authKey,
                "Status": "New User Created! Save your AuthKey! Currently there is no way to retrieve your AuthKey!"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("An error has occurred!");
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.send(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).send("An error has occurred!");
    }
};
