let categoryModel = require('./CategoryModel');
let { sendSuccess, sendError } = require('../../util/responseHandler');

let createCategory = async function (req, res) {

    let { name, type, model } = req.body;
    console.log(name, model, type);
    if (!name || !type || !model) return sendError(req,res,{code:400,message:'some required fields not found'})
    let categoryObject = await categoryModel.create({
        name,
        type,
        model
    })
    return sendSuccess(req,res,{
        succeess: true,
        message: 'category created successfully',
        data: categoryObject
    })
    

}

let listCategory = async function (req, res) {

    try {


        let { name, id, model } = req.query
        let query = {}
        if (!!name) query.name = name;
        if (!!id) query._id = id;
        if (!!model) query.model = model;
        let categoryList = await categoryModel.find(query);
        return sendSuccess(req, res, {
            message: 'category listed',
            data: categoryList,
            succeess: true
        })
    } catch (error) {

        console.log(error);
        return sendError(req, res, {
            succeess: false,
            data: null,
            error: error.message
        })

    }


}

module.exports = {
    createCategory,
    listCategory
}