let productModel = require('./ProductModel');
let { sendSuccess, sendError } = require('../../util/responseHandler');


let createProduct = async function(req,res){

    let { name, description,price, make,category } = req.body;
    // to be done check if the category is valid or not //

    let productObject = await productModel.create({
        name,
        description,
        price,
        make,
        category
    })
    return sendSuccess(req,res,{
        succeess: true,
        message: 'product created successfully',
        data: productObject
    })
    
}

let listProduct = async function(req,res){

    let {categoryId, name} = req.query;
    let query = {}
    if(!!categoryId) {
         query['category.id'] = categoryId
    }
    if(!!name) query.name = name;
    console.log('query is ------>',query);
    let productResult  = await productModel.find(query);
    return sendSuccess(req,res, {message:'product listed successfully',data:productResult});
}


let getProductDetails = async function(req,res){

    let productId = req.params.id;
    let product = await findProductById(productId);
    return sendSuccess(req,res, {message:'product details fetched',data:product});

}

let findProductById = async function(productId){

    let product = await productModel.findOne({_id:productId});
    // product = product.toObject()
    
    return product;
}

module.exports = {
    createProduct,
    listProduct,
    getProductDetails,
    findProductById

}