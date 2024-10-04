
import { checkExistenceOrCreateFile} from '../utils/check-existence-or-create-file.js'

(() => {
  checkExistenceOrCreateFile();
})();
const createPessoa = ( request, response) => {
   const {
    name ,
    gender,
    ethnicity,
    nationality,
     personality,

    } =request.body;
    const pessoa ={ 
      pessoa_id: Date.now(),
      name: String( name).toLowerCase().trim(),
      gender: String(gender).toLowerCase().trim(),
      ethnicity: String(ethnicity).toLowerCase().trim(),
      nationality: String(nationality ).toLowerCase().trim(),
      personality: String( personality ).toLowerCase().trim(),
      
      
    }
    console.log(pessoa);
};
export { 
    createPessoa, 

};
