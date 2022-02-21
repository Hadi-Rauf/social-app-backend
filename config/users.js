const moongose = require("mongoose");



const Users = moongose.Schema({
    name:{
    type: String,
    required: true
    },

    email : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    date : {
        type : Date,
        required: true,
        default: Date.now
    }
})

module.exports = moongoose.model('user', UserSchema);