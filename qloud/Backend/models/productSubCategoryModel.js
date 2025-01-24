const mongoose = require('mongoose');

const productSubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        Lowercase: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory'
    }
});

const productSubCategory = mongoose.model('productSubCategory', productSubCategorySchema);

module.exports = { productSubCategory }