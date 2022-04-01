-- insert into products (name, category, price) values 
-- ("Pixel 3", "MobilePhone", 35000);
-- ("Pixel2", "MobilePhone", 35000);
-- ("Sony Bravia", "Television", 40000),
-- ("Dell", "Laptop", 50000);
select * from products;
select * from products group by category, id order by price;