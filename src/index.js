//importando o express
import express from 'express'; 
const app = express();

app.use(express.json())

//subir o servidor na porta 8000
app.listen(8000, ()=>{
    console.log("Servidor funcionando na porta 8000...")
})