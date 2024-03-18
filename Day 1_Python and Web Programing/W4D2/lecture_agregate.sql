-- avg(expression) - Returns the average of the expression values from all rows in a group.

--an agregrate function is a special kind of function that operates on several rows 
--of a query at once, returning a single result

-- distinct keyword shows the unique elements

SELECT
   DISTINCT column_1
FROM
   table_name; 

--also we have IN which is similar to python. Will return only rows with those conditions
SELECT * FROM actors WHERE first_name in ('Matt','Lea','Davis');
--in does multiple values whereas = does one value


--also we have BETWEEN which can give us range 
SELECT * FROM actors WHERE age between '1961-01-01' and '1962-01-01';
