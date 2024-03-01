// import Video from '../models/video.js'
import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { responseApi } from '../config/response.js';

const model = initModels(sequelize);

// localhost:8080/video/get-video
const LikeRestaurant = async (req, res) => {
  try {
    const { userId, resId } = req.body;
    let checkLike = await model.like_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    if (checkLike) {
      await model.like_res.destroy({
        where: {
          user_id: userId,
          res_id: resId,
        },
      });
      responseApi(res, 200, '', 'delete like success');
      return;
    } else {
      let like = {
        user_id: userId,
        res_id: resId,
        date_like: new Date(),
      };
      await model.like_res.create(like);
      responseApi(res, 200, like, 'create like success');
    }
  } catch (error) {
    responseApi(res, 500, error, 'create like fail');
  }
};
const getLikesByRestaurant = async (req, res) => {
  try {
    const { resId } = req.params;

    const data = await model.like_res.findAll({
      // attributes: ['user_id', 'res_id', 'date_like'],
      include: ['user', 're'],
      where: { res_id: resId },
    });

    responseApi(res, 200, data, 'Get likes by restaurant id success');
  } catch (error) {
    responseApi(
      res,
      500,
      error,
      'An error occurred while getting likes by restaurant id'
    );
  }
};

const getLikesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const likes = await model.like_res.findAll({
      attributes: ['user_id', 'res_id', 'date_like'],
      where: {
        user_id: userId,
      },
    });

    responseApi(res, 200, likes, 'Get likes by user id success');
  } catch (error) {
    responseApi(
      res,
      500,
      error,
      'An error occurred while getting likes by restaurant id'
    );
  }
};

export { LikeRestaurant, getLikesByRestaurant, getLikesByUser };
