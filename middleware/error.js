

const errorHandler = (err, req, res, next) =>{
    // check the error type for more information on the response
    console.log(err);
    // mongoose Error => CastError 
    if(err.name === 'CastError'){
        err = new Error(`Resource id: ${err.value} is invalid`);
    }
    

    res.status(err.status || 500 ).json({
        success: false,
        error: err.message || 'Server Error'
    })
  }

  module.exports = errorHandler;