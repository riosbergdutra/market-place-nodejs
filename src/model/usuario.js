const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    enderecos: [{
        rua: { type: String, required: true },
        numero: { type: Number, required: true },
        CEP: { type: String, required: true },
        createdAt: { type: Date, required: true },
    }],
    createdAt: { type: Date, required: true }, // Corrigido o nome do campo
    produtos_fav: [{
        _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos" },
        createdAt: { type: Date, required: true },
    }],
    admin: { type: Boolean, required: true, default: false },
});

const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;