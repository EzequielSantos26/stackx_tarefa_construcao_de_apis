
import{ promises as fs } from "fs";
import { access, constants } from "node:fs";
import { absoluteFilePath } from "./absolute-file-path.js";

export function checkExistenceOrCreateFile() {
    access (
        absoluteFilePath, constants.f_ok, (error) => { 
            if (error) {
                return fs.writeFile(absoluteFilePath, '[]');
            }
        }
    ); 
}