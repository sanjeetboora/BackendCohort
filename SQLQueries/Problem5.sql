select * from products 
where category = "MobilePhone" and 
price in (
select max(price) from products where category = "MobilePhone"
);
-- delete from products where name = "Pixel 3";