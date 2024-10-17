import { promises as fs } from "fs";
import { checkExistenceOrCreateFile } from "../utils/check-existence-or-create-file.js";
import { loadPessoa } from "../utils/load-pessoa.js";
import { absoluteFilePatch } from "../utils/absolute-file-patch.js";
import { formatjsfile } from "../utils/format-json-file.js";

(() => {
  checkExistenceOrCreateFile();
})();
const createPessoa = async (request, response) => {
  const { name, gender, ethnicity, nationality, personality } = request.body;
  const pessoa = {
    pessoa_id: Date.now(),
    name: String(name).toLowerCase().trim(),
    gender: String(gender).toLowerCase().trim(),
    ethnicity: String(ethnicity).toLowerCase().trim(),
    nationality: String(nationality).toLowerCase().trim(),
    personality: String(personality).toLowerCase().trim(),
  };
  const data = await loadPessoa();

  data.push(pessoa);

  await fs.writeFile(absoluteFilePatch, formatjsfile(data));

  return response
    .status(201)
    .send({ message: "Resgistro criado com sucesso!", pessoa });
};

const readAllPessoas = async (request, response) => {
  const data = await loadPessoa();
  if (data.lengt === 0) {
    return response
      .status(404)
      .send({ message: "Nenhum registro cadastrado!" });
  }

  return response
    .status(200)
    .send({ message: "Registro(s) Cadastrado(s):", data });
};

const readPessoaById = async (request, response) => {
  const id = Number(request.params.id);
  console.log(id);
};

export { createPessoa, readAllPessoas, readPessoaById };
