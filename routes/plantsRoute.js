const PlantModel = require('../models/Plant-Model');

module.exports = {
    getPlants: (req, res) => {
       PlantModel.find()
         .then((result) => res.json({ success: true, result: result }))
         .catch((err) => res.status(500).json({ success: false, result: err.message }))
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
        .then(result => res.json({ success: true, result: result }))
        .catch((err) => res.status(500).json({ success: false, result: err.message }))
    },

    findAPlant: (req, res) => {
        findPlantById
    }

};

const findPlantById = (req, res, next) => {
   let plant;
   plant = PlantModel.findById(req.params.id)
   plant
   .then((result) => {
       if (plant == null) {
         return res.json({ success: false, result: 'Plant not found' });
       }
      res.json({ success: true, result: result });
   })
   .catch((err) => res.status(500).json({ success: false, result: err.message }));
   next();
}