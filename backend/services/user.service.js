import boom from '@hapi/boom';

import { User } from '../db/models/index.js';
import { generateToken } from '../utils/generateToken.js';

class UserService {
  async findUserByEmailPassword(email, password) {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      throw boom.unauthorized('Invalid email or password');
    }
    const registeredUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
    return registeredUser;
  }

  async getUserProfile(id) {
    const user = await User.findById(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    };
  }

  async registerUser(name, email, password) {
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw boom.badRequest('User alredy exists');
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      throw boom.badRequest('Invalid user data');
    }
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
  }
}

export default UserService;
