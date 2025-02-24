CREATE TYPE enum_status AS ENUM ('accept', 'deliver', 'done');


CREATE TABLE IF NOT EXISTS users (
    id UUID NOT NULL PRIMARY KEY,
    name TEXT NOT NULL CHECK ( length(name) <= 255 ),
    email TEXT NOT NULL CHECK ( length(email) <= 255 )
);

CREATE TABLE IF NOT EXISTS category (
    id UUID NOT NULL PRIMARY KEY,
    name TEXT NOT NULL CHECK ( length(name) <= 255 ),
    parent_category_id UUID REFERENCES category(id)
);

CREATE TABLE IF NOT EXISTS seller (
    id UUID NOT NULL PRIMARY KEY,
    name TEXT NOT NULL CHECK ( length(name) <= 255 ),
    rating INT NOT NULL CHECK ( rating >= 1 and rating <= 5 )
);


CREATE TABLE IF NOT EXISTS orders (
    id UUID NOT NULL PRIMARY KEY,
    date DATE NOT NULL,
    price MONEY NOT NULL CHECK ( price > MONEY(0) ),
    status enum_status NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS product (
    id UUID NOT NULL PRIMARY KEY,
    name TEXT NOT NULL CHECK ( length(name) <= 255 ),
    description TEXT NOT NULL CHECK ( length(description) <= 10000 ),
    price MONEY NOT NULL CHECK ( price > MONEY(0) ),
    category_id UUID NOT NULL REFERENCES category(id),
    seller_id UUID NOT NULL REFERENCES seller(id)
);

CREATE TABLE IF NOT EXISTS review (
    id UUID NOT NULL PRIMARY KEY,
    rating INT NOT NULL CHECK ( rating >= 1 and rating <= 5 ),
    text TEXT NOT NULL CHECK ( length(text) <= 10000 ),
    user_id UUID NOT NULL REFERENCES users(id),
    product_id UUID NOT NULL REFERENCES product(id)
);

CREATE TABLE IF NOT EXISTS order_product (
    order_id UUID NOT NULL REFERENCES orders(id),
    product_id UUID NOT NULL REFERENCES product(id)
);