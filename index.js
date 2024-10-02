
import express from "express"; 
import {loadPessoa} from "./src/utils/load-pessoa.js";

(
    () => { 
        const app = express();
        const port = 3000; 
        
        loadPessoa()
           .then(
            (data) => {
                console.log (data);
            }
           )
           .catch();




        app.listen(
            port , () => {
                console.log(`servidor executando na porta ${port}`);
            }
        )
    }
)()