const db = db.getSiblingDB("pbd");

db.createCollection("users");
db.createCollection("category");
db.createCollection("seller");
db.createCollection("product");
db.createCollection("orders");
db.createCollection("review");