const PlantModel = require('../models/Plant-Model');

module.exports = {
    getPlants: (req, res) => {
       PlantModel.find()
         .then((result) => res.json({ success: true, result: result }))
         .catch((err) => res.status(500).json({ success: false, result: err.message }))
    }

};