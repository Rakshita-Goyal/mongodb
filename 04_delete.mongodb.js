use("ecommerce");

db.products.deleteOne({name:"Wired"})

db.products.createIndex({ name: 1 })
db.products.getIndexes();

