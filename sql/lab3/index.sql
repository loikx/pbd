CREATE INDEX idx_order_user_id ON orders (user_id);

CREATE INDEX idx_product_category_id ON product (category_id);

EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id='a5d3f7b2-6e8c-4c1a-9d72-bf4e39a8c6e1';
EXPLAIN ANALYZE SELECT * FROM orders WHERE status='done';
EXPLAIN ANALYZE SELECT * FROM product WHERE price > MONEY(50000);
EXPLAIN ANALYZE SELECT * FROM product WHERE category_id='550e8400-e29b-41d4-a716-446655440005'; 