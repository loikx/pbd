const db = db.getSiblingDB("pbd");

db.orders.createIndex({ 
    "status": 1, 
    "user_id": 1 
});


db.createView(
    "product_reviews_view",
    "product",
    [
        {
          $lookup: {
            from: "review",
            localField: "_id",
            foreignField: "product_id",
            as: "reviews"
          }
        },
        {
          $addFields: {
              avg_rating: {
                $ifNull: [
                  { $avg: "$reviews.rating" },
                  0
                ]
              },
              text: "$reviews.text"
          }
        },
        {
          $project: {
            reviews: 0,
            category_id: 0,
            seller_id: 0
          }
        }
    ]
);