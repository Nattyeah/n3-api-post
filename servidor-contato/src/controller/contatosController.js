const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const getById = (request, response) => {
  const id = request.params.id;
  response.status(200).send(contatos.find(tarefa => tarefa.id == id));
};
const add = (request, response) => {
  let contato = request.body
  let baseDados = model.agenda.contatos
  contato.id = Math.random().toString(36).substr(-8)

  if (!contato.nome || !contato.dataNascimento || !contato.celular) {
    response.status(400).send("Dados inválidos");
  }   else {
    if (baseDados.find(dado => dado.nome === contato.nome)) {
      response.status(400).send("Contato já cadastrado")
    } else {
      model.agenda.contatos.push(contato)
      response.status(201).send(contato)
      baseDados.signo = signos(stringParaData(contato.dataNascimento))
      console.log(baseDados)
    }
  }
};

function stringParaData(data){
     const dia = data.split("/")[0];
    const mes = data.split("/")[1]
    const ano = data.split("/")[2];

    const dataFormatada = new Date(dia, mes, ano);
    return dataFormatada;
    }

    function signos(data){
      if (data >= 21 / 03 || data <= 20 / 04){
        return 'Áries'
      } 
    }
    // else if (data >= 21/04 || data <= 20/05){
    //     return 'Touro'
    //   } else if (data >= 21/05 || data <= 20/06){
    //     return 'Gêmeos'
    //   } else if (data >= 21/06 || data <= 20/07){
    //     return 'Câncer'
    //   } else if (data >= 21/07 || data <= 20/08){
    //     return 'Leão'
    //   } else if (data >= 21/08 || data <= 20/09){
    //     return 'Virgem'
    //   } else if (data >= 21/09 || data <= 20/10){
    //     return 'Libra'
    //   } else if (data >= 21/10 || data <= 20/11){
    //     return 'Escorpião'
    //   } else if (data >= 21/11 || data <= 20/12){
    //     return 'Sagitário'
    //   } else if (data >= 21/12 || data <= 20/01){
    //     return 'Capricórnio'
    //   } else if (data >= 21/02 || data <= 20/03){
    //     return 'Peixes'
    //   }
    //   
    //   console.log(add)

module.exports = {
  getAll,
  getById,
  add
}

