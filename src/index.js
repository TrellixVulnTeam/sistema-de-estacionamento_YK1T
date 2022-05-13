//importando o express
import express from 'express'; 
import { openDatabase } from './database';
const app = express();

app.use(express.json())

app.get('/api/ping', (request, response) => {
    response.send({
        message: 'pong'
    }
    )
});

//ENDPOINTS VEHICLES
app.get('/api/vehicles', async (request, response) =>{
    const db = await openDatabase();
    const vehicles = await db.all(
        `
        SELECT *
        FROM vehicles
        `
    );
    response.send(vehicles)
})

app.post('/api/vehicles', (request, response) => {

})

app.put('/api/vehicles/:id', (request, response) => {
    
})

app.delete('/api/vehicles/:id', (request, response) => {
    
})

//subir o servidor na porta 8000
app.listen(3030, ()=>{
    console.log("Servidor funcionando na porta 3030...")
})