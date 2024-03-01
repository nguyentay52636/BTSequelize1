import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { responseApi } from '../config/response.js';

const model = initModels(sequelize);
const addNewRatingRes = async (req, res) => {
  try {
    let { resId, userId, amount } = req.body;
    console.log(resId, userId, amount);
    let checkRating = await model.rate_res.findOne({
      where: {
        res_id: resId,
        user_id: userId,
      },
    });
    if (checkRating) {
      responseApi(res, 200, {}, 'Already rated');
    } else {
      let rating = {
        user_id: userId,
        res_id: resId,
        amount,
        date_rate: new Date(),
      };
      await model.rate_res.create(rating);
      responseApi(res, 200, rating, 'create rating success');
    }
  } catch (error) {
    responseApi(res, 500, '', 'An error occurred while getting');
  }
};
// const editRatingnew = async (req, res) => {
//   try {
//   } catch (error) {
//     responseApi(res, 500, '', 'An error occurred while getting');
//   }
// };
const getRatingByUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let data = await model.rate_res.findAll({
      where: {
        user_id: userId,
      },
      include: ['user', 're'],
    });
    responseApi(res, 200, data, 'callapi success');
  } catch (error) {
    responseApi(res, 500, '', 'An error occurred while getting');
  }
};
const getRatingByRestaurant = async (req, res) => {
  try {
    let { resId } = req.params;
    let data = await model.rate_res.findAll({
      where: {
        res_id: resId,
      },
      include: ['user', 're'],
    });
    responseApi(res, 200, data, 'callapi success');
  } catch {
    responseApi(res, 500, '', 'An error occurred while getting');
  }
};
export { getRatingByUser, addNewRatingRes, getRatingByRestaurant };
