import UserService from '../services/user.service.js';

const service = new UserService();

// @desc         Auth user & get token
// @route        POST /api/users/login
// @access      Public
export const authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await service.findUserByEmailPassword(email, password);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
// @desc         Get user profile
// @route        GET /api/users/profile
// @access      Private
export const getUserProfile = async (req, res, next) => {
  try {
    const user = await service.getUserProfile(req.user._id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// @desc         Register a new user
// @route        POST /api/users
// @access      Public
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await service.registerUser(name, email, password);

    res.json(user);
  } catch (error) {
    next(error);
  }
};
