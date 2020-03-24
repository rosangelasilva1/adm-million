const Adm = require('../../app/models/adm');

Adm.deleteMany({email: /testeapi/}).then(error => {});

describe('Modelo Adm', () => {

  // beforeEach(function() {
  // });

  it('Deve retornar o modelo de Adm', () => {
    Adm.find().then(dado => {
      expect(dado !== undefined).toBe(true);
    });

  });

  it('Deve incluir um administrador', () => {
    let nome = `testeaaa ${new Date().getTime()}`;
    const adm = new Adm({ nome: nome, senha: '123456', email: nome + '@testeapi.com.br' });
    adm.save(error => {
      expect(error == undefined || error == null).toBe(true);
    });
  });

  it('Não deve incluir um administrador repetido', () => {
    let nome = `testebbb${new Date().getTime()}`;
    const adm = new Adm({ nome: nome, senha: '123456', email: nome + '@testeapi.com.br' });
    adm.save(error => {
      const adm2 = new Adm({ nome: nome, senha: '123456', email: nome + '@testeapi.com.br' });
      adm2.save(error => {
        expect(error == undefined || error == null).toBe(false);
      });
    })
  });

  it('Não deve incluir um administrador sem nome', () => {
    let nome = `testeccc ${new Date().getTime()}`;
    const adm = new Adm({ nome: null, senha: '123456', email: nome + '@testeapi.com.br' });
    adm.save(error => {
      expect(error == undefined || error == null).toBe(false);
    })
  });

  it('deve alterar um registro', () => {
    let nome = `testeddd ${new Date().getTime()}`;
    const adm = new Adm({ nome: nome, senha: '123456', email: nome + '@testeapi.com.br' });
    adm.save(error => {
      let novoNome = "Rosangela" + new Date().getTime();
      adm.nome = novoNome
      adm.save(error => {
        expect(error == undefined || error == null).toBe(true);
        Adm.find({nome: novoNome}).then(dado => {
          expect(dado.length > 0).toBe(true);
        });
      });
    })
  });
});