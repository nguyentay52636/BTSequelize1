// quản lý đối tượng endpoint
import express from 'express';
import likeRoute from './LikeRoute.js';
import rateRoute from './RateRoute.js';
const rootRoute = express.Router();

// rootRoute.use('/auth', authRoute);
rootRoute.use('/like', likeRoute);
rootRoute.use('/rate', rateRoute);
rootRoute.use('/order', rateRoute);
export default rootRoute;
