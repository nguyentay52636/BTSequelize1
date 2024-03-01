import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { responseApi } from '../config/response.js';
const model = initModels(sequelize);
let { userId, foodId, amount, code, arrSubId } = req.body;
const createOrder = async (req, res) => {
  try {
    let newOrder = {
      user_id: userId,
      food_id: foodId,
      amount: amount,
      code: code,
      arrSubId: arrSubId,
      date_order: new Date(),
    };
    let data = await model.order.create(newOrder);
    responseApi(res, 200, data, 'create order success');
  } catch (error) {
    responseApi(
      res,
      500,
      error,
      'An error occurred while getting likes by restaurant id'
    );
  }
};
export default createOrder;
