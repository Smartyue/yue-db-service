/**
 * Created by yuanjianxin on 2018/2/2.
 */
const ErrorCode =require('../utils/ErrorCode');
const allowedMethod=require('../config/methods.conf');
module.exports=async (ctx,next)=>{

    //todo verify token



    //todo verify para
    if(!ctx.request.body.project || !ctx.request.body.table || !ctx.request.body.method){
        ctx.error=ErrorCode.INVALID_PARAMETER;
        return ctx.status=400;
    }

    if(!allowedMethod.includes(ctx.request.body.method)){
        ctx.error=ErrorCode.UNKNOWN_METHOD;
        return ctx.status=400;
    }

    let key=ctx.request.body.project +'-'+ctx.request.body.table;

    if(!TableMap.has(key)){
        ctx.error=ErrorCode.INVALID_PARAMETER;
        return ctx.status=400;
    }

    ctx.request.body.database=TableMap.get(key);

    await next();

}