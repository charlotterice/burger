var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll:function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insertOne:function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals,function(res){
            cb(res);
        });
    },
    updateOne:function(keyValue, condition, cb){
        orm.updateOne("burgers",keyValue,condition,function(res){
            cb(res);
        })
    }
};
module.exports = burger;