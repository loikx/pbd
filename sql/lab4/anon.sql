CREATE EXTENSION anon;

-- testing --
SELECT anon.partial_email('daamien@gmail.com');

CREATE MATERIALIZED VIEW generealized_orders AS
SELECT id, anon.generalize_daterange(date, 'week') AS date FROM orders;

SELECT * FROM generealized_orders;

ALTER DATABASE pbd SET anon.salt = "secret_key";

CREATE MATERIALIZED VIEW pseudomization_users AS
SELECT id, anon.pseudo_first_name(name) AS name, anon.pseudo_email(email) AS email FROM users;

SELECT * FROM pseudomization_users;

CREATE MATERIALIZED VIEW random_rating_seller AS 
SELECT id, name, anon.random_int_between(1, 5) AS rating FROM seller;

SELECT * FROM random_rating_seller;