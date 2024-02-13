const ApiResponse = require('../utils/api-response')

const Customer = require('../services/customer-services')

function registerCustomer(req, res, next){
    console.log("Controller received request ", req.body);
    Customer.registerCustomer(req.body)
        .then(result=>{
            console.log("Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

// function updateCreatorById(req, res, next){
//     console.log("Controller received request ", req.body, req.params);
    
//     Creator.updateCreatorById(req.params.creatorId, req.body, req.user)
//         .then(result=>{
//             console.log("updateCreatorById  Creator Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function getCreatorList(req, res, next){
//     console.log("Controller received request ", req.body);
//     console.log('request recived',req);
//     //id, payload, user
//     Creator.getCreatorList(req.body)
//         .then(result=>{
//             console.log("getCreatorList  Creator Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function getCreatorById(req, res, next){
//     console.log("Controller received request ", req.params)
//     console.log("CREATOR ID", req.params.creatorId)
//     Creator.getCreatorById(req.params.creatorId, req.user)
//         .then(result=>{
//             console.log("getCreatorById  Creator Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function deleteCreatorById(req, res, next){
//     console.log("Controller received request ", req.body, req.params);
//     Creator.deleteCreatorById(req.params.creatorId, req.user)
//         .then(result=>{
//             console.log("deleteCreatorById  Creator Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

module.exports ={
    registerCustomer //, updateCreatorById,getCreatorList ,getCreatorById ,deleteCreatorById
}