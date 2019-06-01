var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll:function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insertOne:function(name,cb){
        orm.insertOne("burgers",["burger_name","devoured"],[name,false],cb);
    },
    updateOne:function(id,cb){
        orm.updateOne("burgers",{devoured:true},condition,cb)
    }
};
module.exports = burger;