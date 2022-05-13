//importando o express
import express from 'express'; 
import { get } from 'express/lib/response';
const app = express();

app.use(express.json())

app.get('/api/ping', (request, response) => {
    response.send({
        message: 'pong'
    }
    )
});

//ENDPOINTS VEHICLES
app.get('/api/vehicles', (request, response) =>{
    response.send([
        {
            id: 1, 
            name: 'Onix 1.4', 
            owner: 'Marcus Vinicius',
            type: 'car'
        }, 
        {
            id: 2, 
            name: 'Cobalt Cinza', 
            owner: 'Ana Carla',
            type: 'car'
        },
    ])
})


//subir o servidor na porta 8000
app.listen(8000, ()=>{
    console.log("Servidor funcionando na porta 8000...")
})