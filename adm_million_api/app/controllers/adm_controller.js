const Adm = require('../models/adm');
const TOKEN = "123456";

const AdmController = {
  index: async(req, res, next) => {
    const adm = await Adm.find({})
    return res.status(200).send(adm)
      //if(req.headers.token == TOKEN){
      //Adm.find().then(dado => res.send(dado) );
    //}
   // else{
     // res.status(401).send({error: "Acesso negado a API, Token invalido"});
    //}
    
  },
  create: (req, res, next) => {
    const adm = new Adm({ nome: req.body.nome, senha: req.body.senha, email: req.body.email });
    adm.save(error => {
      if(error){
        res.status(401).send(error)
        return
      }
      
      res.status(201).send({});
    });
  },
  change: async(req, res, next) => {
    console.log(req.params.adm_id)
    const id = req.params.adm_id
    try{
      await Adm.findOneAndUpdate({_id: id}, {nome: req.body.nome, senha: req.body.senha, email: req.body.email})
      res.status(204).send(`Alterado com o id ${req.params.adm_id}`)
    }
    catch(err){
      res.status(401).send(`Erro: ${err}`)
    }
  },
  delete: async(req, res, next) => {
    try{
      await Adm.findByIdAndDelete(req.params.adm_id)
      res.status(204).send({});

    }
    catch(err){
      res.status(401).send({})
    }
  },
  deleteAll: async(req, res)=>{
    await Adm.deleteMany()
    res.send(`Deletando tudo`)
  }
}
module.exports = AdmController;