// const express = require('express');
// const mongoose = require('mongoose');
// const Product = require('./models/productmodel'); // Use 'Product' to avoid conflict
// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Middleware tfor urlencoded parameters
// app.use(express.urlencoded({ extended: false }));


// //display on console
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// //display on webpage
// app.get('/', function (req, res) {
//     res.send('Hello world');
// });

// // POST route to create a product
// app.post('/api/products', async (req, res) => {
//     try {
//         const newProduct = await Product.create(req.body); // Changed variable name to avoid conflict
//         res.status(200).json(newProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // Fixed status handling
//     }
// });

// //GET route to get all products
// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({}); // Changed variable name to avoid conflict
//         res.status(200).json(products);
        
//     } catch (error) {
//         res.status(500).json({ message: error.message });
        
//     }
// })

// //GET route to get specified product using ID
// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id); // Fetch the product by its ID

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' }); // Handle case where product doesn't exist
//         }

//         res.status(200).json(product); // Return the fetched product
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // Handle server errors
//     }
// });

// //PUT route to update specified product using ID
// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); // Fetch the product by its ID and update it
//         if (!updatedProduct) {
//             return res.status(404).json({ message: 'Product not found' }); // Handle case where product doesn't exist
//         }
//         res.status(200).json(updatedProduct); // Return the updated product
        
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // Handle server errors
//     }
// });

// //DELETE route to delete specified product using ID
// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedProduct = await Product.findByIdAndDelete(id); // Fetch the product by its ID and delete it
//         if (!deletedProduct) {
//             return res.status(404).json({ message: 'Product not found' }); // Handle case where product doesn't exist
//         }
//         else
//         {
//             return res.status(200).json({ message: 'Product deleted'});
//         }
//         res.status(200).json(deletedProduct); // Return the deleted product
        
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // Handle server errors
//     }
// });






// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sandeepreddi23:root@node.kvfb7.mongodb.net/?retryWrites=true&w=majority&appName=node')
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.log('Connection failed', err);
//     });

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productroute'); // Import the product routes
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Display on the console
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Display on the webpage
app.get('/', function (req, res) {
    res.send('Hello world');
});

// Use the product routes
app.use('/api', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://sandeepreddi23:root@node.kvfb7.mongodb.net/?retryWrites=true&w=majority&appName=node')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Connection failed', err);
    });

