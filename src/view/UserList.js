var m= require("mithril")
var User= require("../model/User")

module.exports={
    oninit: User.loadList,
    view: function(){
        return m(".user-list", User.list.map(function(user){
            return m (".user.list-item", user.firstName + " " + user.lastName)
        }))
    }
}