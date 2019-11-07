const Joi = require('joi');
const mongoose = require('mongoose');


// name , type , price , rating , warranty_years , available

// to be added some other Types of products
const productSchema = new mongoose.Schema({
    name: {type: String,  required: true,  minlength: 3,  maxlength: 20, unique: true},
    type : {type : String , enum : ['phone' , 'laptop']} ,
    price: {type : Number , maxlength :1,  maxlength :5 ,required: true},
    rating : { type : Number , maxlength :1 ,required: true},
    warranty_years : {type : Number , maxlength :2 ,required: true } ,
    available : {type : Boolean , required: true }
});

const Product = mongoose.model('Products', productSchema);


function validateproduct(product) {
    const schema = Joi.object ( {
        name : Joi.string().min(3).max(20).required(),
        price : Joi.string().min(1).max(5).required(),
        rating : Joi.string().min(1).max(1).required(),
        warranty_years : Joi.NumberFormat().min(1).max(2).required(),
    }) .unknown() ;

    return Joi.validate(product, schema);
}


exports.Product = Product;
exports.validateproduct = validateproduct;