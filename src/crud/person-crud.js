import { promises as fs } from "fs";
import { checkExistenceOrCreateFile } from "../utils/check-existence-or-create-file.js";
import { loadPerson } from "../utils/load-person.js";
import { absoluteFilePath } from "../utils/absolute-file-path.js";
import { formatJsonFile } from "../utils/format-json-file.js";

(() => {
  checkExistenceOrCreateFile();
})();

const createPerson = async (request, response) => {
  const { name, gender, ethnicity, nationality, personality } = request.body;
  const person = {
    person_id: Date.now(),
    name: String(name).toLowerCase().trim(),
    gender: String(gender).toLowerCase().trim(),
    ethnicity: String(ethnicity).toLowerCase().trim(),
    nationality: String(nationality).toLowerCase().trim(),
    personality: String(personality).toLowerCase().trim(),
  };
  const data = await loadPerson();

  data.push(person);

  await fs.writeFile(absoluteFilePath, formatJsonFile(data));

  return response
    .status(201)
    .send({ message: "Resgistro criado com sucesso!", person });
};

const readAllPeople = async (request, response) => {
  const data = await loadPerson();
  if (data.lengt === 0) {
    return response
      .status(404)
      .send({ message: "Nenhum registro cadastrado!" });
  }

  return response
    .status(200)
    .send({ message: "Registro(s) Cadastrado(s):", data });
};

const readPersonById = async (request, response) => {
  const id = Number(request.params.id);
  const data = await loadPerson();

  const filteredData = data.filter((item) => item.person_id !== id);

  if (filteredData.length < data.length) {
    const person = data.find((item) => item.person_id === id);

    return response
      .status(200)
      .send({ message: `Dados do registro de id '${id}':`, person });
  }
  return response
    .status(404)
    .send({ message: `Registro de id '${id}' não econtrado!` });
};

const updatePersonById = async (request, response) => {
  const id = Number(request.params.id);

  const { name, gender, ethnicity, nationality, personality } = request.body;
  const updatedPerson = {
    name: String(name).toLowerCase().trim(),
    gender: String(gender).toLowerCase().trim(),
    ethnicity: String(ethnicity).toLowerCase().trim(),
    nationality: String(nationality).toLowerCase().trim(),
    personality: String(personality).toLowerCase().trim(),
  };
  const data = await loadPerson();

  const index = data.findIndex((item) => item.person_id === id);
  if (index !== -1) {
    data[index] = {
      ...data[index],
      ...updatedPerson,
    };
    await fs.writeFile(absoluteFilePath, formatJsonFile(data));
    return response
      .status(200)
      .send({ message: `registro de id '${id}' atualizado` });
  }
  return response
    .status(404)
    .send({ message: `Registro de id '${id}' não encontrado` });
};

const deletePersonById = async (request, response) => {
  const id = Number(request.params.id);
  const data = await loadPerson();

  const filteredData = data.filter((item) => item.person_id !== id);
  if (filteredData.length < data.length) {
    await fs.writeFile(absoluteFilePath, formatJsonFile(filteredData));
    return response
      .status(200)
      .send({ message: `O registro de id '${id} excluido!'` });
  }
  return response
    .status(404)
    .send({ message: `O registro de id '${id} Não encontrado!'` });
};

export {
  createPerson,
  readAllPeople,
  readPersonById,
  updatePersonById,
  deletePersonById,
};
