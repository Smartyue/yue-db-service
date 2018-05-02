/**
 * Created by yuanjianxin on 2018/4/30.
 */

const DbService=require('../index');
const DatabaseConf=require('./config/databaseConf');
const RedisConf=require('./config/redisConf');
const MappingConf=require('./config/mappingConf');
DbService.instance.setDatabaseConf(DatabaseConf);
DbService.instance.setRedisConf(RedisConf);
DbService.instance.setMappingConf(MappingConf);
let modulePath='./model';
DbService.instance.setModulePath(modulePath);
DbService.instance.setPort(8030);
DbService.instance.run();