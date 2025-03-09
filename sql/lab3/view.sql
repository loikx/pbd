CREATE VIEW UserOrdersView AS
SELECT 
    u.name AS user_name,
    o.date AS order_date,
    p.name AS product_name,
    p.price AS product_price
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_product op ON o.id = op.order_id
JOIN product p ON op.product_id = p.id;
