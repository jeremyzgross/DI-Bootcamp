-- select name from language
-- SELECT film.title, film.description, language.name from film left join language on film.language_id = language.language_id;
--they all have a language and are english

-- create table new_film(
-- id serial primary key,
-- film_name varchar(50)
-- );

-- insert into new_film(film_name)
-- values
-- ('prometheus'),
-- ('alien'),
-- ('alien 2'),
-- ('aliens vs predetors');


-- create table customer_review(
-- review_id serial primary key not null,
-- film_id int not null,
-- language_id int not null,
-- title varchar(100),
-- score int not null,
-- review_text varchar,
-- last_update timestamp default current_timestamp, 

-- constraint fk_language_id foreign key (language_id) references language(language_id),
-- constraint fk_film_id foreign key (film_id) references new_film(id) on delete cascade,
-- constraint score_value check (score > 0 and score <= 10)
-- );


-- insert into customer_review(film_id, language_id, title, score, review_text)
-- values
-- (1,1,'Go see it',5,'was pretty fire'),
-- (2,1,'Scarrrrrry', 7, 'crying');

-- select * from customer_review

-- delete from new_film where film_name = 'alien'
-- update customer_review
-- set language_id = 2
-- where film_id = 1;

-- film_id, language_id, are the foreign keys. when you insert they get language and film id references
-- it requires the syntax DROP TABLE

-- select * from rental where return_date = null

--they have all be returned
-- select * from film
-- select * from actor where first_name = 'Penelope' and last_name = 'Monroe'
select film.film_id, film.title, film.fulltext from film_actor
inner join film on film.film_id=film_actor.film_id
where (actor_id = (select actor_id from actor where (first_name = 'Penelope' and last_name = 'Monroe'))
	  and film.fulltext @@ to_tsquery('english', 'sumo'))
;