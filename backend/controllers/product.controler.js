import ProductService from '../services/product.service.js';

const service = new ProductService();

// @desc         Fetch all products
// @route        GET /api/products
// @access      Public
export const getProducts = async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// @desc         Fetch single product
// @route        GET /api/products/:id
// @access      Public
export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};
