import colors from "colors";
import { users, products } from "./data/index.js";
import { User, Order, Product } from "./db/models/index.js";
import { connectDB } from "./db/db.js";

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createUser = await User.insertMany(users);
    const idAdminUser = createUser[0]._id;
    const sampleProduct = products.map((prod) => {
      return { ...prod, userId: idAdminUser };
    });
    await Product.insertMany(sampleProduct);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error:${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error:${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
