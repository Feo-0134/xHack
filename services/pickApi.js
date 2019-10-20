const styleTrans = require('../imgStyle/cmd2Py.js')

const pickApi = async(ctx) => {
    var p = ctx.params
    var b = ctx.request.body
    try {
        styleTrans('wave', './imgStyle/img/test.jpg');
        // const feedback = await apiFunc()
    }catch(e){
        console.log(e)
    }
    ctx.response.body = "success"
};

module.exports = pickApi;
