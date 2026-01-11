use("ecommerce")
db.products.aggregate({
    $match:{category:"Electronics"}
})

db.products.aggregate({
    $project:{
        name:1,
        price:1,
        _id:0
    }
})


db.products.aggregate({
    $project:{
        name:1,
        price:1,
        _id:0,
        result:{
            $cond:[{$gte:["$stock",50]},"yes","no"]
        }
    }
})


db.products.aggregate({
    $group:{
        _id:"$category",
         totalStudents: { $sum:1 }
    }
})

db.products.aggregate({
    $group:{
        _id:"$category",
         totalStock: { $avg:"$stock" }
    }
})

db.products.aggregate([
   { $sort:{stock:-1}},
   { $limit:3},
    {$skip:1}
])

db.products.aggregate([
    {$unwind:"$category"
}])

db.products.aggregate([
    {$match:{price:{$lt:1000}}},
    {
        $group:{
_id:"$category",
total:{$sum:"$price"},

        }
    },
    {$sort:{price:-1}}
])


db.orders.aggregate([
{
 $lookup: {
from: "products",
 localField: "products.name",
 foreignField: "name",
as: "productDetails"

}
}
])