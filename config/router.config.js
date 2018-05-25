/**
 * Created by yuanjianxin on 2018/2/13.
 */
const Service=require('../utils/Service');
const router=require('koa-router')();

router.post('/',async (ctx,next)=>{
    let data=ctx.$body;

    data.database=data.database.toLowerCase();
    data.table=data.table.toLowerCase();
    try{

        ctx.result=await Service(data.database,data.table,data.method,data.where || null,data.paras || null, data.result || null);

    }catch (e){

        ctx.$logger.error(`==Something is Error!error:${e.error},code:${e.code}==`);

        ctx.error={
            code:'REQUEST_ERROR',
            error: e.code
        }
    }
    await next();
});


module.exports=router