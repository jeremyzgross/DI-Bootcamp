-- Select * from customer
-- Select CONCAT_WS(' ',first_name, last_name) AS full_name from customer
-- Select DISTINCT create_date from customer
-- Select * from customer ORDER BY first_name DESC
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC
-- SELECT * from customer INNER JOIN address ON customer.address_id=address.address_id WHERE (district = 
-- 'Texas')
-- SELECT address, phone from customer INNER JOIN address ON customer.address_id=address.address_id WHERE (district = 
-- 'Texas')
-- select * from film where (film_id =150 or film_id=15)
-- select film_id, title, description, rental_rate from film where (title = 'Alien Center')
-- select film_id, title, description, rental_rate from film where (title like 'Al%')
-- select film_id, title, description, rental_rate from film ORDER BY rental_rate ASC LIMIT 10
-- select film_id, title, description, rental_rate from film ORDER BY rental_rate ASC LIMIT 10
-- select * from film order by rental_rate asc offset 10 fetch first 10 rows only
-- select payment.customer_id, first_name, last_name amount, payment_date from customer inner join payment on payment.customer_id = customer.customer_id ORDER BY payment.customer_id
-- select * from film left join inventory on film.film_id = inventory.film_id where inventory_id is null 

-- select * from city inner join country on city.country_id=country.country_id


