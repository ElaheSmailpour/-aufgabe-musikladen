/* Router für meine Bestellungen. Basis Pfad /orders/ (aus App.js) */
const express = require('express');
const router = express.Router();

const {
	ordersGetAllController,
	ordersPostController,
	ordersPutController,
	ordersDeleteController,
	ordersGetOneController
} = require('../controller/orders-controller');

router
	.route('/')
	.get(ordersGetAllController)
	.post(ordersPostController);

router

	.route('/:id')
	.get(ordersGetOneController)
	.put(ordersPutController)
	.delete(ordersDeleteController);

module.exports = router;
