-- Delete Restrict 
CREATE TABLE cars(
car_id SERIAL PRIMARY KEY,
car_color INTEGER REFERENCES colors (color_id) ON DELETE RESTRICT,
car_name TEXT);

--The clause ON DELETE RESTRICT written during the child table’s creation prevents deleting a record from the parent table if there is a foreign key associated with the child table.


--TABLE RELATIONSHIP
--a passport from a passport tabel and a TZ from a TZ table can have one owner which makes them a ONE TO ONE RELATION