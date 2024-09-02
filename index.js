const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product_model.js');
const app = express();

// Apply express.json() middleware correctly
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(3000, () => {
    console.log("Server running on 3000");
});


// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@nodeapidb.71ujv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeApiDB')
    .then(() => {
        console.log('DB Connected');
    })
    .catch((error) => {
        console.error('DB Not Connected', error);
    });

app.get('/', (req, res) => {
    res.send("Hello Dev Yash");
});



// Getting all Products 
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Reading api with their given id 

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // const idprodcuts = await Product.findById(id);
        const products = await Product.findOne({ id: id });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/updateproduct/:id', async (req, res) => {
    try {
        //id from url
        const { id } = req.params;

        //find by id and update body 
        const product = await Product.findByIdAndUpdate(id, req.body);

        // if product not found
        if (!product) {
            res.status(404).json({ message: " Product not found" });
        }
        //create updatedprodcut and retrive 
        const updatedprodcut = await Product.findById(id);

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});