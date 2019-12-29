const PlantModel = require('../models/Plant-Model');

module.exports = {
    getPlants: (req, res) => {
       PlantModel.find()
         .then((plants) => res.json({ success: true, plants: plants }))
         .catch((err) => res.status(500).json({ success: false, plants: err.message }))
    },

    addPlants: (req, res) => {
      const plant = new PlantModel({
        name: req.body.name,
        description: req.body.description,
        care: req.body.care,
        price: req.body.price,
        image: req.body.image
      });

      plant.save()
        .then(plants => res.json({ success: true, plants: plants }))
        .catch((err) => res.status(500).json({ success: false, plants: err.message }))
    },

    deletePlant: (req, res) => {
       PlantModel.findById(req.params.id)
         .then((plants) => {
             plants.remove();
             res.json({ success: true, plants: plants })
         })
         .catch((err) => res.status(500).json({ success: false, plants: err.message }))
    },

    findAPlant: (req, res) => {
       PlantModel.findById(req.params.id)
         .then((plant) => {
            res.json({ success: true, plants: plant })
         })
         .catch((err) => res.status(500).json({ success: false, plants: err.message }))
    }

};

