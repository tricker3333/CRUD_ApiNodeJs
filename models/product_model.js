const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        id :{
            type: Number,
            required:true,
        },
        name: {
            type: String,
            required: [true, "Please Provide a Name"],
        },
        
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true, // Fixing the typo
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
