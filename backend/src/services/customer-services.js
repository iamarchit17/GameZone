const ApiResponse = require('../utils/api-response')
const CustomerDb = require('../database/models/customerDb');
const UserService = require('./user-services')

async function registerCustomer(payload){
    try{
        console.log(payload.email, payload.password)
        console.log(payload)
        user = await UserService.createUser(payload.email, payload.password, payload.contactNo, "Customer");

        if(user.statusCode == 400){
            console.log("ERRRRRROOOORRRR", user)
            return user
        }
        console.log(user);
        payload.uid = user._id
        payload.myBookings = []
        payload.amount = 0
        
        const customer = new CustomerDb(payload)
        console.log(customer);
        const res = await customer.save();
        console.log('res',res);
        return new ApiResponse(201, 'Creator Registered', null, res)
    } catch(error){
        return new ApiResponse(500, 'Exception While Creating Creator!.', null, error)
    }
}

// //requires authorisation for same user
// async function updateCreatorById(creatorId, payload, user){
//     try {
        
//         let creator = await CreatorDb.findOne({_id:{$eq: creatorId}})
//         if(!creator)
//             return new ApiResponse(400, 'Creator Not Registered', null, null)

//         if(creator._id != user._id){
//             return new ApiResponse(401, "Unauthorised: You cannot update other creator details!")
//         }

//         payload.creatorId = creatorId
//         delete payload._id
//         delete payload.email
//         console.log("PAYLOAD", payload);
        

//         await CreatorDb.findOneAndUpdate({_id:creatorId}, payload)
//         return new ApiResponse(200, "Creator Updated Successfully.", null, payload)  
//     } catch (error) {
//         return new ApiResponse(500, 'Exception While Updating Creator!.', null, error)
//     }
// }

// //requires authorisation for admin
// async function getCreatorList(user){ 
//     try {
//         result = await CreatorDb.find({})
//     } catch (error) {
//         return new ApiResponse(500, 'Exception While Fetching Creator List!.', null, err.message)
//     }
    
//     let listData = {count: result.length, data: result} 
//     return new ApiResponse(200, "Fetched Creator List", null, listData)
// }

// //requires authorisation for same creator and admin
// async function getCreatorById(creatorId, user){
//     try {
//         let creator = await CreatorDb.findOne({_id:{$eq: creatorId}})
        
//         if(!creator)
//             return new ApiResponse(400, 'Creator Not Found.', null, null)

//         if(creator._id != user._id){
//             return new ApiResponse(401, "Unauthorised: You cannot access other creator details!")
//         }
        
//         return new ApiResponse(200, "Creator Fetched Successfully.", null, creator)  
//     } catch (error) {
//         return new ApiResponse(500, 'Exception While Fetching Creator!', null, error)
//     }
// }

// async function deleteCreatorById(creatorId, user){
//     try {
//         let creator = await CreatorDb.findOne({_id:{$eq: creatorId}})
        
//         if(!creator)
//             return new ApiResponse(400, 'Creator Not Found', null, null)
        
//         if(creator._id != user._id){
//             return new ApiResponse(401, "Unauthorised: You cannot delete other creator details!")
//         }

//         await CreatorDb.deleteOne({_id:{$eq: creatorId}})
//         await UserDb.deleteOne({_id:{$eq: creator.uid}})
//         return new ApiResponse(200, "Creator Deleted Successfully.", null, null)  
//     } catch (error) {
//         return new ApiResponse(500, 'Exception While Deleting Creator!', null, error)
//     }
// }

module.exports={
    registerCustomer//, updateCreatorById, getCreatorList, getCreatorById, deleteCreatorById
}