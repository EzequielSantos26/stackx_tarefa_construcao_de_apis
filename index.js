import express from "express";
import { loadPessoa } from "./src/utils/load-pessoa.js";
import {
  createPessoa,
  deletepessoaById,
  readAllPessoas,
  readPessoaById,
  updatapessoaById,
} from "./src/crud/pessoa-crud.js";
import validatePessoa from "./src/middlewares/validate.pessoa.js";

(() => {
  const app = express();
  const port = 3000;

  const endpoints = {
    createPessoa: String("/api/pessoas"),
    readAllPessoas: String("/api/pessoas"),
    readPessoaById: String("/api/pessoas/:id"),
    updatePessoaById: String("/api/pessoas/:id"),
    deletePessoaById: String('/api/pessoas/:id'),
  };

  loadPessoa()
    .then((data) => {
      if (data.length) {
        //console.log('registro (s)) cadastrado(s)', data);
      } else {
        //console.log('nenhum registro cadastrado!');
      }
    })
    .catch((error) => {
      console.log(error);
    });

  app.use(express.json());

  app.post(endpoints.createPessoa, validatePessoa, createPessoa);

  app.get(endpoints.readAllPessoas, readAllPessoas);

  app.get(endpoints.readPessoaById, readPessoaById);

  app.put(endpoints.updatePessoaById,validatePessoa,updatapessoaById);

  app.delete ( 
    endpoints.deletePessoaById,deletepessoaById,
  );


  app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`);
  });
})();
