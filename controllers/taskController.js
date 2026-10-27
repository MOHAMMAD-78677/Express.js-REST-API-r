const Task = require('../models/Task');

// GET ALL TASKS
exports.getTasks = async (req, res) => {

    const tasks = await Task.find();

    res.json(tasks);

};

// GET ONE TASK
exports.getTask = async (req, res) => {

    const id = req.params.id;

    const task = await Task.findById(id);

    if (!task) {

        return res.status(404).json({

            message: 'Tâche non trouvée'

        });

    }

    res.json(task);

};

// CREATE TASK
exports.createTask = async (req, res) => {

    const {

        titre,
        description

    } = req.body;

    // VALIDATION
    if (

        !titre ||
        !description ||
        !titre.trim() ||
        !description.trim()

    ) {

        return res.status(400).json({

            message: 'Champs invalides'

        });

    }

    const newTask = await Task.create({

        titre,

        description,

        estTerminee: false

    });

    res.status(201).json(newTask);

};

// UPDATE TASK
exports.updateTask = async (req, res) => {

    const id = req.params.id;

    const {

        titre,
        description,
        estTerminee

    } = req.body;

    // VALIDATION
    if (

        !titre ||
        !description ||
        !titre.trim() ||
        !description.trim()

    ) {

        return res.status(400).json({

            message: 'Champs invalides'

        });

    }

    const updatedTask = await Task.findByIdAndUpdate(

        id,

        {

            titre,
            description,
            estTerminee

        },

        { new: true }

    );

    if (!updatedTask) {

        return res.status(404).json({

            message: 'Tâche non trouvée'

        });

    }

    res.json(updatedTask);

};

// DELETE TASK
exports.deleteTask = async (req, res) => {

    const id = req.params.id;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {

        return res.status(404).json({

            message: 'Tâche non trouvée'

        });

    }

    res.status(204).send();

};