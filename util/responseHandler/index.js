let sendError =  function(req,res,error){

    if(!!error){
        console.log('error while hitting req',req.originalUrl);
        console.log(' error is',error.message);
        return res.status(error.code || 500).send({
            success: false,
            message:error.message,
            data:null,
            error:error.error || ''
        })

    }   
}


let sendSuccess = function(req,res,successObj){

    if(!!successObj){
        return res.status(200).send({
            success: successObj.success,
            message:successObj.message,
            data:successObj.data 
        })
    }
}

module.exports = {
    sendSuccess,
    sendError
}
