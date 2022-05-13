import sqlite3 from "sqlite3";
import { open } from 'sqlite3'

export const openDatabase = async () => {
    return await open ({
        filename: "./database.db",
        driver: sqlite3.Database
    })
}

//vai abrir a conexão, buscar o arquivo do banco e o drive que ira utilizar