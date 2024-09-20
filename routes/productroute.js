const express = require('express');
const router = express.Router();
const Product = require('../models/productmodel'); // Import your product model

// POST route to create a product
router.post('/products', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to get a product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT route to update a product by ID
router.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE route to delete a product by ID
router.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; // Export the router
