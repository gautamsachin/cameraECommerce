let cartModel = require('./CartModel');
let { sendSuccess, sendError } = require('../../util/responseHandler');
let {findProductById} = require('../products/ProductService');

let addProductToCart = async function (req, res) {

    // get the user from acces token and find its cart //
//    req.userId = user.id;
    let userId = req.userId;
    let productId = req.body.productId;
    let existingCart = await fetchUserCart(userId);
    if(!!existingCart){
        // cart exist //
        console.log('existing cart case');
        existingCart.products.push(productId)
        existingCart =  await cartModel.findOneAndUpdate({_id:existingCart._id},existingCart)
        existingCart = existingCart.toObject()
        existingCart.products = await Promise.all(existingCart.products.map(async(prod)=>{
            return await findProductById(prod)
        }))
    }
    else{
        // create new cart for the user
        console.log('new cart crate case');
        existingCart = await cartModel.create({  userId, products:[productId]})
        console.log(existingCart)
    }
    return sendSuccess(req,res,{
        succeess: true,
        message: 'cart created successfully',
        data: existingCart
    })
    

}


let fetchUserCart = async function(userId){
    
    let cart = await cartModel.findOne({userId})
    if(!!cart) return cart 
    return null
 }

let getCartDetails  = async function(req,res){

    let userId = req.userId;
    console.log(userId)
    let cart = await fetchUserCart(userId);
    cart = cart.toObject();
    cart.products = await Promise.all(cart.products.map(async(prod)=>{
        return await findProductById(prod)
    }))
    return sendSuccess(req,res,{message:'cart listed ',data:cart})


}
module.exports = {
    addProductToCart,
    getCartDetails
}