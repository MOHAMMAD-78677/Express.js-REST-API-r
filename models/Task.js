const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        titre: String,
        description: String,
        estTerminee: Boolean
    });

    module.exports = mongoose.model('Task', taskSchema);