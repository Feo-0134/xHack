
const pickApi = async(ctx) => {
    var p = ctx.params
    var b = ctx.request.body
    try {
        // const feedback = await apiFunc()
    }catch(e){
        console.log(e)
    }
    ctx.response.body = "hello, world"
};

module.exports = pickApi;
