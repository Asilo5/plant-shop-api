const PlantModel = require('../models/Plant-Model');

module.exports = {
    getPlants: async (req, res, next) => {
      // fetching all plants
      try {
        const plants = await PlantModel.find(); 
        res.status(200).json({
          success:true,
          data : plants})
      } catch (error) {
          next(error)
      }

    },

    addPlants: async (req, res, next) => {
      try {
            const {name, description, care, price, image} = req.body;
      
            const plant = await PlantModel.create({
              name,
              description,
              care,
              price,
              image
            });

            res.status(200).json({
              success: true,
              data: plant
            })
        
      } catch (error) {
        next(error)
      }

    },

    deletePlant: async (req, res, next) => {
      try {
          const plant = await PlantModel.findById(req.params.id);
        //  check whether the id exists
          if (!plant){
            return res.status(400).json({success: false, message: `plant does not exist with the id ${req.params.id}`})
          }
          plant.remove();
          res.status(200).json({ 
            success: true, 
            data: {} 
          });
        
      } catch (error) {
        next(error)
      }
    },

    findAPlant: async (req, res, next) => {
      try {
        const plant = await PlantModel.findById(req.params.id);
      //  check whether the id exists
        if (!plant){
          return res.status(400).json({success: false, message: `plant does not exist with the id ${req.params.id}`})
        }
        res.status(200).json({ 
          success: true, 
          plants: plant 
        });
      
    } catch (error) {
      next(error)
    }
    },

    updatePlant: async (req, res, next) => {
      try {
            const plant = await PlantModel.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            })
            // check whether the plants exists or not
            if(!plant){
              return res.status(400).json({success: false, message: `plant does not exist with the id ${req.params.id}`})
            }
            // send the response
            res.status(200).json({
              success: true,
              data: plant
            })
        
      } catch (error) {
            next(error)
      }
    }

};

