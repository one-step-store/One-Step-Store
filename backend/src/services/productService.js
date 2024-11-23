const Product = require('../models/productModel');

exports.createProduct = async (data) => {
    const allowedAttributes = ['name', 'jenis', 'variant', 'category', 'price', 'stock', 'description'];
    const extra1 = {};

    for (const key in data) {
        if (!allowedAttributes.includes(key)) {
            extra1[key] = data[key];
            delete data[key];
        }
    }

    const product = new Product({ ...data, extra1 });
    return await product.save();
};

exports.getAllProducts = async () => {
    return await Product.find();
};

exports.getProductById = async (id) => {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');
    return product;
};

exports.updateProduct = async (id, data) => {
    const allowedAttributes = ['name', 'jenis', 'variant', 'category', 'price', 'stock', 'description'];
    const extra1Updates = {};
    const updates = {};

    for (const key in data) {
        if (allowedAttributes.includes(key)) {
            updates[key] = data[key];
        } else {
            extra1Updates[key] = data[key];
        }
    }

    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');

    Object.assign(product.extra1, extra1Updates);
    Object.assign(product, updates);
    return await product.save();
};

exports.deleteProduct = async (id) => {
    const product = await Product.findByIdAndDelete(id);
    if (!product) throw new Error('Product not found');
    return 'Product deleted successfully';
};
