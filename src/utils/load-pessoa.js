import { promises as fs } from "fs";

import {absoluteFilePeth} from "./absolute-file-path.js"; 

export const loadPessoa = async () => {
  try {
    const data = await fs.readfile(absoluteFilePeth, 'utf-8');
     if (data.length === 0) { return [];

     }

     return JSON.parse(data);
  } 
  catch (error) { 
    console.log ( 'erro ao ler arguivo:', error);
    return [];
  }
    
};