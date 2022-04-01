--  logged in sucessfully
select case when email is not null then "logged in sucessfully" else "logging unsucessful" end as result 
from users where email = "ab@relevel.com" and password = "abcPassWord";
-- select case when (condition) then " " else " " end as result (where condition)
-- case() then() else() end 

--  incorrect credentials
select if((select email from users where email = "abc@relevel.com" and password = "abc") is null, "incorrect credentials", "logged in successfully") as result;
-- select if(condition, when true, when false) as result;

--  user not found
select if((select email from users where email = "abc@relevel.com") is null, "user not found", "user found") as result;
-- select if(condition, when true, when false) as result;