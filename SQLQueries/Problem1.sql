CREATE DATABASE ecommerce;
use ecommerce;
CREATE TABLE products(
	id BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price BIGINT NOT NULL,
    createdAt DATETIME DEFAULT NOW()
);
describe products;
insert into products values(1, "abc", "general", 1000, NOW());
insert into products(name, category, price) values("rice", "staple", 2000);
select * from products;


CREATE TABLE users(
	id BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW()
);
describe users;

CREATE TABLE orders(
	id BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	productID BIGINT NOT NULL,
    userID BIGINT NOT NULL,
    quantity INT NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    payment BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (productID) REFERENCES products(id),
    FOREIGN KEY (userID) REFERENCES users(id)
);
describe orders;
