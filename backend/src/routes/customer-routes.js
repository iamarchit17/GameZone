const express = require('express');

const route = express.Router()

const customerController = require('../controllers/customer-controller')
//const RouteSecurity = require('../services/route-security-service')

//register creator
route.post('/', customerController.registerCustomer)

// //get list of creator
// route.get('/', RouteSecurity.autherizeRouteForAdmin, creatorController.getCreatorList)

// //update creator by Id
// route.put('/:creatorId', RouteSecurity.autherizeRouteForCreator, creatorController.updateCreatorById)

// //get creator by Id
// route.get('/:creatorId', RouteSecurity.autherizeRouteForCreator, creatorController.getCreatorById)

// //delete creator by Id
// route.delete('/:creatorId', RouteSecurity.autherizeRouteForCreator, creatorController.deleteCreatorById)

module.exports = route