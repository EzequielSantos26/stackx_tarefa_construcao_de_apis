import { messages } from 'joi-translation-pt-br'
import PessoaSchema from "../schema/PessoaSchema.js"; 

const validatePessoa = (request, response, nexFunction) => {
  const { error } = PessoaSchema.validate(request.body, {messages}); 

    if (error) { 
        return response.status(400).send ( 
            { error: error.details.map(err => err.message) }
        ); 
    
        
    }

    nexFunction();

}; 



export default validatePessoa; 