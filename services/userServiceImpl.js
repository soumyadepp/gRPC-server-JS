const { USER_EXISTS_MESSAGE, USER_NOT_FOUND, INTERNAL_SERVER_ERROR, EDIT_FAILURE } = require('../constants/gRPC_constants');
const User = require('../models/User');


const userServiceImpl = {
    //fetch the list of all users from MongoDB

    getAllUsers: (_, callBack) => {
        console.log("here")
        User.find({}, (err, doc) => {
            if (err) {
                console.log(err);
                callBack(err, null);
            }
            else {
                console.log('runnning')

                callBack(null, { users: doc });
            }
        })
    },
    //create a new user in MongoDB Database

    createUser: async (call, callback) => {
        try {
            const { firstName,
                lastName,
                email,
                designation,
                logins,
                profilePicture } = call.request.user;
                
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                designation: designation,
                logins: logins,
                displayPicture: profilePicture
            });
            await newUser.save()
                .then((res) => {
                    callback(null, { user: newUser });
                })
                .catch(err => {
                    callback(err, {
                        error: {
                            message: USER_EXISTS_MESSAGE
                        }
                    });
                })
        } catch (error) {
            callback(error, {
                error: {
                    message: INTERNAL_SERVER_ERROR
                }
            });
        }
    },
    //fetch a single user by their email

    getUserByEmail: async (call, callback) => {
        try {
            const email = call.request.email;
            const userData = await User.findOne({ email: email });
            if (userData === null)
                callback(null, {
                    null: {
                        message: USER_NOT_FOUND
                    }
                });
            else callback(null, { user: userData });
        } catch (error) {
            callback(error, {
                error: {
                    message: INTERNAL_SERVER_ERROR
                }
            });
        }
    },
    //edit the details of a single user using their email as the key

    editUserByEmail: async (call, callback) => {
        try {
            const email = call.request.email;
            const updatedUser = call.request.user;
            const updatedUserData = await User.findOneAndUpdate({ email }, {
                $set: {
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    email: updatedUser.email,
                    designation: updatedUser.designation,
                    displayPicture: updatedUser.profilePicture,
                    logins: updatedUser.logins
                }
            });
            callback(null, { user: updatedUserData });
        } catch (error) {
            callback(error, {
                error: {
                    message: EDIT_FAILURE
                }
            });
        }
    },
    //delete a user using their email as the key

    deleteUserByEmail: async (call, callback) => {
        try {
            const email = call.request.email;
            const deletedUser = await User.findOneAndDelete({ email });
            callback(null, { user: deletedUser });
        } catch (error) {
            callback(error, {
                error: {
                    message: DELETE_FAILURE
                }
            });
        }
    }
};

module.exports = userServiceImpl;