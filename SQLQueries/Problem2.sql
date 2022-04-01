insert into users (email, password) values 
("abc@relevel.com", "abcPassWord"), 
("xyz@relevel.com", "xyzPassWord");

insert into products (name, category, price) values 
("Pixel 4a", "MobilePhone", 34000), 
("Pixel 4",  "MobilePhone", 30000);

insert into orders (productID, userID, quantity) values 
("1", "1", 2), 
("2",  "1", 3);

select * from users;
select * from products;
select * from orders;

