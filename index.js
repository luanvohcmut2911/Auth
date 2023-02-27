const cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./controllers/AuthServer.controller');

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api', router)

const port = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connect successfully to Auth Database');
}).catch(()=>{
    console.log('Database unavailable');
})

app.get('/', (req, res)=>{
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})
