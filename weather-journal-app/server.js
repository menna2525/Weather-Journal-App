// Setup empty JS object to act as endpoint for all routes

projectData = {};

const port =process.env.PORT||3000;



// Require Express to run server and routes
const express =require('express');
// Start up an instance of app
const app = express();
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port,()=>console.log(`listening on port ${port} `));
//GET 



//POST

app.post('/weather',(req,res)=>{
 
    if(!req.body)
    {
        res.status(400).send('info doesnt exist');
    }
newEntry={
    date:req.body.date,
    temperature:req.body.temperature,
    ur:req.body.ur

};

//projectData.shift();
projectData=newEntry;
res.send(projectData);
//console.log(projectData);

    
});

app.get ('/all',(req,res)=>{
    res.send(projectData);
    console.log(projectData);

});
