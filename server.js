const express = require('express');
const app = express();
const taskRoutes= require('./routes/taskRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tasksDB')

.then(() => console.log('MongoDB connected'))

.catch(err => console.log(err));



// Middleware to parse JSON
app.use(express.json());

//css + html
app.use(express.static('public'));

app.use('/taches', taskRoutes);

app.listen(3000, () => {

    console.log('Server is running on port 3000');
});