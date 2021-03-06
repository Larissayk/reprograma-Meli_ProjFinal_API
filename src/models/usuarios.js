const mongoose = require("mongoose");
const assert = require("assert");

const validacaoEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const usuariosSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    password:{ type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: [validacaoEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    },
    eventos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publicacoes" }],
    comentarios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comentarios" }]
  },
  { versionKey: false, timestamps: true }
);

const Usuarios = mongoose.model("Usuarios", usuariosSchema);

//Validação de campos required
const usuario = new Usuarios();
usuario.save(function(error) {
  // Erro: campo nome do usuário = vazio
  assert.equal(error.errors["nome"].message, "Path `nome` is required.");

  // Erro: campo email do usuário = vazio
  assert.equal(error.errors["email"].message, "Path `email` is required.");

    // Erro: campo password do usuário = vazio
  assert.equal(error.errors["password"].message, "Path `password` is required.");

  error = usuario.validateSync();
  // Erro: campo nome do usuário = vazio
  assert.equal(error.errors["nome"].message, "Path `nome` is required.");

  // Erro: campo email do usuário = vazio
  assert.equal(error.errors["email"].message, "Path `email` is required.");

    // Erro: campo email do usuário = vazio
  assert.equal(error.errors["password"].message, "Path `password` is required.");
});

// Erro: campo email do usuário = vazio

module.exports = Usuarios;
