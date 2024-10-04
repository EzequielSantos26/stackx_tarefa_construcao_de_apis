
import{ promises as fs } from "fs";
import { access, constants } from "node:fs";
import { absoluteFilePatch } from "./absolute-file-patch.js";

export function checkExistenceOrCreateFile() {
    access (
        absoluteFilePatch, constants.f_ok, (error) => { 
            if (error) {
                return fs.writeFile(absoluteFilePatch, '[]');
            }
        }
    ); 
}