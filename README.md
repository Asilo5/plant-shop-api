# Plant Shop API


## Created by:
[Amanda Consuelo Sierra](https://github.com/Asilo5)

## View Plant Shop API locally in your computer

Clone the repo to your terminal :``` $ git clone https://github.com/Asilo5/plant-shop-api.git```

Run ``` $ npm install ``` in your terminal

To start your server run ``` $ npm start ```

Make sure that server is running on ``` http://localhost:3001 ```

## What was used to build Plant Shop API

Plant Shop API was built using:
  - Node.js
  - Express
  - MongoDB
  
### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/` | GET | not needed | Array of all existing reservations: `[{"success": true,"plants": [{"_id": "5e16b29d88553086edcddc53","name": "Aloe Queen","description": "Healing plant","care": "Lots of Love","price": 20,"image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg","__v": 0}]}]` |
| `http://localhost:3001/addPlant` | POST | `{"name": <String>, "description": <String>, "care": <String>, "price": <Number>,"image": <String}` | New Plant: `{"name": "Rose", "description": "Moms Roses", "care": "Lots of Love", "price": 100000, "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg"}` |
| `http://localhost:3001/deletePlant/:id` | DELETE | not needed | Array of all remaining reservations: `[{ "success": true,"plants": [{"_id": "5e16b29d88553086edcddc53","name": "Aloe Queen","description": "Healing plant","care": "Lots of Love","price": 20,"image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg", "__v": 0}]}]` |

