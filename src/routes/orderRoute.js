import express from 'express';
import createOrder from '../controllers/orderController.js';
const orderRoute = express.Router();
orderRoute.use('/create-order', createOrder);
export default orderRoute;
