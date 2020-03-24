
var mongoose = require('../../db/conexao'); 
console.log()
const userSchema = mongoose.Schema({ 
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
  })
const Adm = mongoose.model('user', userSchema);

module.exports = Adm;

/*
const Adm = {

    id:1,
    nome:"Rosangela",
    senha:"123456",
    todos:()=>[{
        id:1,
        nome:"Rosangela",
        senha:"123456789",
    },
    {
        id:2,
        nome:"Rosangela2",
        senha:"123456789",
    }]

}
*/
