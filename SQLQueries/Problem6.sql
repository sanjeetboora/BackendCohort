select email, name, category, quantity from orders od 
join products p on od.productID = p.id 
join users u on od.userID = u.id;