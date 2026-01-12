use ("car_dealership")
db.dropDatabase();
db.getCollectionNames()


db.cars.updateOne(
    {model:"Nexon"},
    {$push:{features:"Headted seats"}}
)
db.cars.updateOne(
    {model:"Nexon"},
    {$set:{
        fuel_type:"Deisel"}
    }
)

db.cars.updateOne(
    {model:"Nexon"},
    {$pull:{features:"Headted seats"}}
)

db.cars.updateMany(
    {maker:"Hyundai"},
    {$set:{alloy:"yes"}}
)
db.cars.updateMany(
    {maker:"Hyundai"},
    {$push:{insurance:"yes"}}

)
db.cars.updateMany(
    {maker:"Hyundai"},
    {$push:{insurance:"no"}}
)
db.cars.updateMany(
    {maker:"Hyundai"},
    {$pull:{insurance:"yes"}}
)

db.cars.updateMany(
    {model:"Nexon"},
    {$push:{features:{$each:["Turner","Music"]}}}
)

db.cars.updateMany(
    {model:"Nexon"},
    {$unset:{color:""}}
)
db.cars.updateMany(
    {},
    {$set:{color:"green"}}
)

db.cars.updateMany(
    {model:"Venue"},
    {$set:{maker:"Razor",airbags:67,hinderance:"no"}},
    {upsert:true}
    
)
db.order.insertOne(
    {name:"car1"},
    {oderAt:new Date()}
)
db.order.find()

db.cars.find(
    {"engine.cc":{$nin:[1200,1199]}}
)

db.cars.find(
    {$nor:[
        {fuel_type:"Diesel"},
        {"engine.type":"Turbocharged"},
        {sunroof:true}
    ]}
)
db.cars.find(
    {fuel_type:{$exists:true}}
)

db.cars.find(
    {features:{$size:3}}
)

db.cars.find(
    {features:{$all:["Bluetooth","Sunroof"]}}
)

db.cars.find().count();
db.cars.find().sort({model:-1}).limit(2).skip(2);
db.cars.find({fuel_type:"Diesel"}).count();

db.data.insertMany(
    [{"maker":"Hyundai","model":"Creta","fuel_type":"Diesel","transmission":"Manual","engine":{"type":"Naturally Aspirated","cc":1493,"torque":"250 Nm"},"features":["Sunroof","Leather Seats","Wireless Charging","Ventilated Seats","Bluetooth"],"sunroof":true,"airbags":6,"price":1500000,"owners":[{"name":"Raju","purchase_date":"2021-03-15","location":"Mumbai"},{"name":"Shyam","purchase_date":"2023-01-10","location":"Delhi"}],"service_history":[{"date":"2022-04-10","service_type":"Oil Change","cost":5000},{"date":"2023-07-18","service_type":"Brake Replacement","cost":12000}]},{"maker":"Maruti Suzuki","model":"Baleno","fuel_type":"Petrol","transmission":"Automatic","engine":{"type":"Naturally Aspirated","cc":1197,"torque":"113 Nm"},"features":["Projector Headlamps","Apple CarPlay","ABS"],"sunroof":false,"airbags":2,"price":800000,"owners":[{"name":"Baburao","purchase_date":"2020-08-22","location":"Pune"}],"service_history":[{"date":"2021-05-12","service_type":"Tire Rotation","cost":2000},{"date":"2022-11-05","service_type":"Battery Replacement","cost":7000}]},{"maker":"Mahindra","model":"XUV500","fuel_type":"Diesel","transmission":"Manual","engine":{"type":"Turbocharged","cc":2179,"torque":"360 Nm"},"features":["All-Wheel Drive","Navigation System","Cruise Control"],"sunroof":true,"airbags":6,"price":1800000,"owners":[{"name":"Raju","purchase_date":"2019-11-30","location":"Bangalore"},{"name":"Shyam","purchase_date":"2022-02-15","location":"Hyderabad"}],"service_history":[{"date":"2021-02-25","service_type":"Transmission Repair","cost":35000},{"date":"2023-03-10","service_type":"Tire Replacement","cost":15000}]},{"maker":"Honda","model":"City","fuel_type":"Petrol","transmission":"Automatic","engine":{"type":"Naturally Aspirated","cc":1498,"torque":"145 Nm"},"features":["Keyless Entry","Auto AC","Multi-angle Rearview Camera"],"sunroof":false,"airbags":4,"price":1200000,"owners":[{"name":"Baburao","purchase_date":"2020-05-20","location":"Chennai"}],"service_history":[{"date":"2021-08-10","service_type":"Oil Change","cost":5000},{"date":"2022-10-25","service_type":"Brake Replacement","cost":10000}]},{"maker":"Tata","model":"Nexon","fuel_type":"Petrol","transmission":"Automatic","engine":{"type":"Turbocharged","cc":1199,"torque":"170 Nm"},"features":["Touchscreen","Reverse Camera","Bluetooth Connectivity"],"sunroof":false,"airbags":2,"price":1100000,"owners":[{"name":"Raju","purchase_date":"2021-12-05","location":"Kolkata"}],"service_history":[{"date":"2022-12-01","service_type":"Oil Change","cost":6000},{"date":"2023-06-15","service_type":"Tire Rotation","cost":3000}]},{"maker":"Hyundai","model":"Venue","fuel_type":"Petrol","transmission":"Automatic","engine":{"type":"Turbocharged","cc":998,"torque":"172 Nm"},"features":["Sunroof","Touchscreen Infotainment","Keyless Entry","Rear Camera","Cruise Control"],"sunroof":true,"airbags":4,"price":1200000,"owners":[{"name":"Amit","purchase_date":"2020-05-20","location":"Bangalore"},{"name":"Priya","purchase_date":"2022-11-05","location":"Chennai"}],"service_history":[{"date":"2021-07-15","service_type":"Oil Change","cost":4000},{"date":"2023-03-22","service_type":"Tire Replacement","cost":8000}]},{"maker":"Hyundai","model":"i20","fuel_type":"Petrol","transmission":"Manual","engine":{"type":"Naturally Aspirated","cc":1197,"torque":"114 Nm"},"features":["Apple CarPlay","ABS","Projector Headlamps","Wireless Charging"],"sunroof":false,"airbags":2,"price":900000,"owners":[{"name":"Rohit","purchase_date":"2021-06-15","location":"Delhi"}],"service_history":[{"date":"2022-09-10","service_type":"Battery Replacement","cost":7000},{"date":"2023-05-25","service_type":"Tire Rotation","cost":2500}]},{"maker":"Maruti Suzuki","model":"Swift","fuel_type":"Petrol","transmission":"Manual","engine":{"type":"Naturally Aspirated","cc":1198,"torque":"113 Nm"},"features":["Touchscreen Infotainment","ABS","Keyless Entry","Rear Parking Sensors"],"sunroof":false,"airbags":2,"price":750000,"owners":[{"name":"Vijay","purchase_date":"2019-03-20","location":"Hyderabad"}],"service_history":[{"date":"2020-05-18","service_type":"Oil Change","cost":3000},{"date":"2022-08-10","service_type":"Brake Replacement","cost":5000}]},{"maker":"Tata","model":"Harrier","fuel_type":"Diesel","transmission":"Automatic","engine":{"type":"Turbocharged","cc":1956,"torque":"350 Nm"},"features":["Panoramic Sunroof","Leather Upholstery","Terrain Response System","Auto-Dimming IRVM"],"sunroof":true,"airbags":6,"price":2000000,"owners":[{"name":"Deepak","purchase_date":"2022-01-10","location":"Mumbai"}],"service_history":[{"date":"2022-10-15","service_type":"Transmission Repair","cost":45000},{"date":"2023-04-20","service_type":"Brake Replacement","cost":15000}]},{"maker":"Honda","model":"Amaze","fuel_type":"Diesel","transmission":"Manual","engine":{"type":"Naturally Aspirated","cc":1498,"torque":"200 Nm"},"features":["Keyless Entry","Auto AC","Rear Parking Camera","Cruise Control"],"sunroof":false,"airbags":4,"price":1000000,"owners":[{"name":"Anil","purchase_date":"2020-11-25","location":"Kolkata"}],"service_history":[{"date":"2021-12-10","service_type":"Oil Change","cost":4500},{"date":"2022-08-15","service_type":"Tire Rotation","cost":2500}]},{"maker":"Tata","model":"Nexon EV","fuel_type":"Electric","transmission":"Automatic","engine":{"type":"Electric Motor","battery_capacity":"30.2 kWh","torque":"245 Nm"},"features":["Touchscreen Infotainment","Wireless Charging","Connected Car Tech","Sunroof"],"sunroof":true,"airbags":6,"price":1400000,"owners":[{"name":"Vikas","purchase_date":"2021-05-20","location":"Bangalore"}],"service_history":[{"date":"2022-06-10","service_type":"Battery Check","cost":0},{"date":"2023-03-15","service_type":"Tire Rotation","cost":3000}]},{"maker":"Hyundai","model":"Kona Electric","fuel_type":"Electric","transmission":"Automatic","engine":{"type":"Electric Motor","battery_capacity":"39.2 kWh","torque":"395 Nm"},"features":["Wireless Charging","Ventilated Seats","Sunroof","Auto AC"],"sunroof":true,"airbags":6,"price":2300000,"owners":[{"name":"Sneha","purchase_date":"2022-01-15","location":"Mumbai"}],"service_history":[{"date":"2022-09-10","service_type":"Battery Check","cost":0},{"date":"2023-06-05","service_type":"Brake Replacement","cost":8000}]},{"maker":"Maruti Suzuki","model":"WagonR","fuel_type":"CNG","transmission":"Manual","engine":{"type":"Naturally Aspirated","cc":998,"torque":"90 Nm"},"features":["Manual AC","ABS","Power Windows"],"sunroof":false,"airbags":2,"price":600000,"owners":[{"name":"Rahul","purchase_date":"2019-07-22","location":"Delhi"}],"service_history":[{"date":"2020-11-10","service_type":"CNG Kit Checkup","cost":2000},{"date":"2021-08-15","service_type":"Tire Rotation","cost":1500}]},{"maker":"Honda","model":"Amaze","fuel_type":"CNG","transmission":"Manual","engine":{"type":"Naturally Aspirated","cc":1199,"torque":"110 Nm"},"features":["Keyless Entry","Auto AC","Rear Parking Camera","Cruise Control"],"sunroof":false,"airbags":4,"price":800000,"owners":[{"name":"Sanjay","purchase_date":"2021-03-18","location":"Pune"}],"service_history":[{"date":"2021-09-10","service_type":"CNG Kit Checkup","cost":2500},{"date":"2022-05-15","service_type":"Oil Change","cost":3500}]}]
)

db.data.aggregate([
    {
      $match: 
      {
       maker:"Hyundai","engine.cc":{$gt:2000}
      },
    },
    {$group:
        {_id:"$maker",
            totalamount:{$sum:"$price"   },
            averge:{$avg:"$price"},
            mini:{$min:"$price"},
            amountslist:{$push:"$price"},
            totalcar:{$sum:1}
        }    
    },
    {
        $count: 'totalcars'
    },

{
    $project: {
      maker:1,model:1,_id:0

    }},

    {
        $sort:{model:-1}
    },
    {
        $sortByCount:  "$model"
    },

    {
        $unwind: 
        " $owners"
        
    },



    
])

db.data.find();

db.data.aggregate([
    {$match:{maker:"Hyundai"}},
    {$project:
        {
          fullname: {$toLower:{ $concat: ["$maker", " ", "$model"] }},
      model: { $toLower: "$model" },

      is_diesel:{$regexMatch:{
input:"$fuel_type",
regex:"Die"
      }}
        }

    },
    {$out:"hyundai_cars"}    
])


db.data.aggregate([
    {$project: {
      sum:{$add:["$price",50000]},
      price:1
    }},
{$addFields: {
  in_lakhs: {
    $divide:["$price",100]
  }
}},
])


db.data.aggregate([
    {$match: { maker: "Hyundai" }},
    {$set:{total_service_cost:{$sum:"$service_history.cost"}}},
    {$project: {
      model:1,maker:1,total_service_cost:1
    }}
])

db.cars.aggregate([
{ $project: {
id: 0, maker: 1, model: 1,
fuelCategory: {
$cond: {
if: { $eq: ["$fuel_type",7890]},
then: "Petrol Car",
else: "Non-Petrol Car"
}
}}}])


db.cars.aggregate([
{$project: {
_id: 0, maker: 1, model: 1,
priceCategory: {
$switch: {
branches: [
{ case:
     { $lt: ["$price"
, 500000] },
then: "Budget"
 },

{ case: 
    { $and:
         [{ $gte: ["$price"
, 500000] }, { $lt: ["$price"
, 1000000] }] },
then: "Midrange" },

{ case:
     { $gte: ["$price"
, 1000000] },
then: "Premium" }

],///branch closed 
default: "Unknown"
}
}}} ]);


db.collection.aggregate([
{$project: {
    model:1,
    maker:1,
    _id:0,
newDate: {
$dateAdd: {
startDate: new Date("2024-08-29"), 
unit: "day",
amount: 7 }
}
}
}
])

db.cars.aggregate(
{$project:{
_id:0,model:1,date:"$$NOW"}})

db.data.aggregate([
{
  $project: {
    maker: 1,
    model: 1,
    total_service_cost: 1,
    cost_status: {
      $let: {
        vars: {
          totalCost: "$total_service_cost"
        },
        in: {
          $cond: {
            if: { $gte: ["$$totalCost", 10000] },
            then: "High",
            else: "Low"
          }
        }
      }
    }
  }
}
])

db.user.insertMany(
    [
    {
        "_id": "user1",
        "name": "Amit Sharma",
        "email": "amit.sharma@example.com",
        "phone": "+91-987654210",
        "address": "MG Road, Mumbai, Maharashtra"
    },
    {
        "_id": "user2",
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "phone": "+91-987654211",
        "address": "Nehru Place, New Delhi, Delhi"
    },
    {
        "_id": "user3",
        "name": "Rahul Singh",
        "email": "rahul.singh@example.com",
        "phone": "+91-987654212",
        "address": "Sector 18, Noida, Uttar Pradesh"
    },
    {
        "_id": "user4",
        "name": "Anjali Nair",
        "email": "anjali.nair@example.com",
        "phone": "+91-987654213",
        "address": "Marine Drive, Kochi, Kerala"
    },
    {
        "_id": "user5",
        "name": "Vikram Desai",
        "email": "vikram.desai@example.com",
        "phone": "+91-987654214",
        "address": "Park Street, Kolkata, West Bengal"
    }
]

)

db.cart.insertMany(
    [
    {
        "_id": "order1",
        "user_id": "user1",
        "product": "Laptop",
        "amount": 50000,
        "order_date": "2024-08-01"
    },
    {
        "_id": "order2",
        "user_id": "user2",
        "product": "Mobile Phone",
        "amount": 15000,
        "order_date": "2024-08-05"
    },
    {
        "_id": "order3",
        "user_id": "user1",
        "product": "Headphones",
        "amount": 2000,
        "order_date": "2024-08-10"
    },
    {
        "_id": "order4",
        "user_id": "user3",
        "product": "Tablet",
        "amount": 25000,
        "order_date": "2024-08-12"
    },
    {
        "_id": "order5",
        "user_id": "user4",
        "product": "Smart Watch",
        "amount": 8000,
        "order_date": "2024-08-15"
    }
]
)

db.users.aggregate([
{
"$lookup": {
"from": "orders",
"localField": "_id",
"foreignField": "user_id",
"as": "orders" }
}
])

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be name"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be number"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})

db.runCommand({
  collMod: "users",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be name"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be number"
        }
      }
    }
  },
  validationLevel: "moderate",
  validationAction: "warn"
})


db.data.createIndex({ maker: 1 })
db.data.dropIndex(maker)
db.data.getIndexes()



