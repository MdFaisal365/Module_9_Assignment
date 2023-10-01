const mongoose = require('mongoose');

require('dotenv').config();
const app = require('./app.js');
const PORT = process.env.RUNNING_PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);

        mongoose.connect('mongodb://127.0.0.1:27017/userDemoDB')
        .then(()=>{
            console.log(`Local database is connected!`);
        })
        .catch((error)=>{
            console.log(error.toString());
            process.exit(1);
        })
})