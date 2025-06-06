const User = require("../models/user.model");

async function getAllUsers(request, reply) {
  try {
    const users = await User.find();//get all users
    reply.send(users);
  } catch (error) {
    console.log("error==>",error)
    reply.status(500).send(error);//automatically sends error.message
  }
}
async function getUserById(request, reply) {
  try {
    const user = await User.findById(request.params.id); //get user by id
    reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
}
async function createUser(request, reply) {
  try {
    const user = new User(request.body);// create user
    const result = await user.save();
    reply.send(result);
  } catch (error) {
    reply.status(500).send(error);
  }
}
async function updateUser(request, reply) {
  try {
    const user = await User.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });//update user
    reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
}
async function deleteUser(request, reply) {
  try {
    await User.findByIdAndDelete(request.params.id);//delete
    reply.status(203).send("");
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};