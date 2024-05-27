const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())





app.get('/', (req, res)=>{
    res.send('Asia tourist sport is running')
})

app.listen(port, ()=>{
    console.log(`Asis tourist sport server in running on port: ${port}`);
})