const ApiResponse = require('../utils/api-response')
const UserDb = require('../database/models/userDb');


async function createUser(email, password, contactNo, role){
    let user = await UserDb.findOne({email: email})
    if(user){
        return new ApiResponse(400, 'User Is Already Registered With Provided User Email', null, null)
    }
    const userDb = new UserDb({
        email : email,
        contactNo : contactNo,
        password : password,
        role: role
    })
    console.log(userDb);
    const res = await userDb.save();
    return res;
}

module.exports={
    createUser
}