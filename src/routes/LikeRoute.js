// quản lý API
import express from 'express';
import {
  LikeRestaurant,
  getLikesByRestaurant,
  getLikesByUser,
} from '../controllers/likeController.js';

const likeRoute = express.Router();

// middleware
// quyền lấy video
likeRoute.post('/likes', LikeRestaurant);
likeRoute.get('/like-by-restaurent/:resId', getLikesByRestaurant);
likeRoute.get('/like-by-user/:userId', getLikesByUser);

export default likeRoute;
