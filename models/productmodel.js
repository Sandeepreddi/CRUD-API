const { number } = require('mathjs');
const mongoose = require('mongoose');
const productschema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"product name is required"],

        },
        age: {
            type: Number,
            required: true,
            min: [18, 'Age must be at least 18 years old'],
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },

        image:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true,

    }
);
const product=mongoose.model("Product",productschema);
module.exports=product;