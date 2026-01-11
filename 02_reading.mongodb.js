use('ecommerce');
// db.products.find({name:"Wireless Mouse"}
// );
// db.products.find({category:"Electronics"});

db.products.find({ price: { $gt: 1000 } }) 
db.products.find({ price: { $gte: 1000, $lte: 100000 } })


db.products.find({$and:[{price:{$gt:2500}},{stock:{$lt:50}}]})

db.products.find({},{name:1,price:1,_id:0
})

db.products.find().sort({stock:-1}).limit (1).skip(1)


