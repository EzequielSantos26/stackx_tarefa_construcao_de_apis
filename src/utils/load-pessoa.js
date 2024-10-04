import { promises as fs } from "fs";

import {absoluteFilePatch} from "./absolute-file-patch.js"; 

export const loadPessoa = async () => {
  try {
    const data = await fs.readFile(absoluteFilePatch, 'utf-8');
     if (data.length === 0) { return [];

     }

     return JSON.parse(data);
  } 
  catch (error) { 
    console.log ( 'erro ao ler arguivo:', error);
    return [];
  }
    
};