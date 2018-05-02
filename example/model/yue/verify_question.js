/**
 * Created by yuanjianxin on 2018/1/5.
 */

const DB=require('../../../index').instance.DBModel;
const Sequelize=require('../../../index').instance.Sequelize;
const STRING=Sequelize.STRING;
const INTEGER=Sequelize.INTEGER;
module.exports=DB.YUE.define('verify_question', {

    id:{
        type: INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    question:STRING(100),
    answer:STRING(20)
}, {
    paranoid: false,
    tableName: 'verify_question',
    createdAt:false,
    updatedAt:false,
    deletedAt:false
})
