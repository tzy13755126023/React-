var mysqlConfig =  require('../sql/mysqlConfig');
var  mysql = require('mysql');

var conn = mysql.createConnection(mysqlConfig);


var userCURD = {
    // CURD 代表创建(Create)、读取(Read)更新(Update)和删除(Delete)操作

    //功能：
    sqlFn: function (sql,arr,callback) {
        // query可以接受三个参数
        // 参数1：数据库语句
        // 参数2：数据库语句参数 [Array]
        // 参数3：回调函数
        conn.query(sql,arr,function (error,result) {
            if (error){
                jsonp:{
                    code:1
                    msg:'错误'
                }
            }else{
                callback(result);
            }
        })
    },

}

module.exports = userCURD;