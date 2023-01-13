import boom from "@hapi/boom";
import { Product } from "../db/models/index.js";

class ProductService {
  constructor() {}

  async find() {
    const products = await Product.find();
    return products;
  }

  async findOne(id) {
    const product = await Product.findById(id);
    // console.log(product);
    if (!product) {
      throw boom.notFound("product not found");
    }
    return product;
  }
}

export default ProductService;
