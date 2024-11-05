import express from "express";
import { loadPerson } from "./src/utils/load-person.js";
import {
  createPerson,
  deletePersonById,
  readAllPeople,
  readPersonById,
  updatePersonById,
} from "./src/crud/person-crud.js";
import validatePerson from "./src/middlewares/validate-person.js";

(() => {
  const app = express();
  const port = 3000;

  const endpoints = {
    createPerson: String("/api/people/create-person"),
    readAllPeople: String("/api/people/read-all-people"),
    readPersonById: String("/api/people/read-person/:id"),
    updatePersonById: String("/api/people/update-person/:id"),
    deletePersonById: String('/api/people/delete-person/:id'),
  };

  loadPerson()
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

  app.post(endpoints.createPerson, validatePerson, createPerson);

  app.get(endpoints.readAllPeople, readAllPeople);

  app.get(endpoints.readPersonById, readPersonById);

  app.put(endpoints.updatePersonById,validatePerson,updatePersonById);

  app.delete ( 
    endpoints.deletePersonById,deletePersonById);


  app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`);
  });
})(); 
