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
    const { id } = request.query;
    const vehicles = [
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
    ]

    if(id){
        response.send(vehicles.filter(vehicles => vehicles.id ==id));
        return;
    }
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