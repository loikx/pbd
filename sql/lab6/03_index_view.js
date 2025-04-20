const db = db.getSiblingDB("pbd");

db.orders.createIndex({ 
    "status": 1, 
    "user_id": 1 
});


db.createView(
    "order_reviews_view",
    "orders",
    [
        {
        $lookup: {
            from: "review", 
            localField: "id",  
            foreignField: "order_id",
            as: "reviews"
        }
        },
        {
        $project: {
            _id: 0,
            order_id: "$id",
            date: 1,
            price: 1,
            status: 1,
            reviews: { rating: 1, text: 1 }
        }
        }
    ]
);
  