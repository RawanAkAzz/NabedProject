const express = require('express');
const app = express();


const port = 5000;



app.get('/', (req , res)=>{
    const doctor = [
        {firstName:"ali", lastName:"ahmad"},
        {firstName:"raa3", lastName:"awehmad"},
        {firstName:"ttali", lastName:"rtr"}
    ];
    res.json(doctor);//sending response
} );
app.listen(5000 , () => console.log('server started on port 5000'));