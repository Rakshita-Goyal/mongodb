use("ecommerce");

db.products.updateOne(
{ name: "Wireless Mouse" },
{ $set: { price: 899 } }
)
db.products.updateMany(
{ category:"Electronics" },
{ $set: { price: 899,
    stock:200
 } }
)

db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "new" } }
)

db.products.updateMany(
{ category: "Electronics" },
{ $inc: { stock: 10 } }
)
db.products.updateMany(
  { category:"Computers" },
  { $unset: { category: "" } }
)
db.products.updateOne(
{ name: "Gaming Laptop" },
{ $set: { category:"compu" } }
)

db.products.updateMany(
  {},
  { $rename: { ratings: "review" } }
)

db.products.updateOne(
{ name: "Wired" },
{ $set: { price: 89 }},
 {upsert:true}
)

db.products.deleteOne({name:"Wired"})