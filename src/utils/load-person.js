import { promises as fs } from "fs";

import {absoluteFilePath} from "./absolute-file-path.js"; 

export const loadPerson = async () => {
  try {
    const data = await fs.readFile(absoluteFilePath, 'utf-8');
     if (data.length === 0) { return [];

     }

     return JSON.parse(data);
  } 
  catch (error) { 
    console.log ( 'erro ao ler arguivo:', error);
    return [];
  }
    
};