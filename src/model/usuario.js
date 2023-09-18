const mongoose = require("mongoose")

const usuariSchema = new mongoose.Schema({
    nome:{type: String, required:true},
    email:{ype: String, unique:true, required: true},
    senha:{type: String, required:true},
    imagem:{type: String, required:true},
    enderecos:[{
        rua: {type: String, required:true},
        numero:{type: Number, required:true},
        CEP: {type: String, required: true},
        createdAt: {type: Date, required:true},
    }],
    createAt: {createdAt: {type: Date, required:true}},
    produtos_fav: [{
        _id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref:"produtos"},
        createdAt: {type: Date, required:true},
    }],
    admin:{type: Boolean, required:true, default: false},
})

const Usuario = mongoose.model("usuarios", usuariSchema)

module.exports = Usuario