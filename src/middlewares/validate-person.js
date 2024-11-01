import { messages } from 'joi-translation-pt-br'
import PersonSchema from "../schema/PersonSchema.js"; 

const validatePerson = (request, response, nexFunction) => {
  const { error } = PersonSchema.validate(request.body, {messages}); 

    if (error) { 
        return response.status(400).send ( 
            { error: error.details.map(err => err.message) }
        ); 
    
        
    }

    nexFunction();

}; 



export default validatePerson; 