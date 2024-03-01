import express from 'express';
import {
  addNewRatingRes,
  getRatingByRestaurant,
  getRatingByUser,
} from '../controllers/rateController.js';
const rateRoute = express.Router();
rateRoute.post('/add-new-rating', addNewRatingRes);
rateRoute.get('/get-rating-by-user/:userId', getRatingByUser);
rateRoute.get('/get-rating-by-restaurent/:resId', getRatingByRestaurant);
export default rateRoute;
