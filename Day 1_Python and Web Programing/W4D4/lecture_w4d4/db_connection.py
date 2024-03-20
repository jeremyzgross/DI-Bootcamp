import psycopg2
import config

try:
    conn = psycopg2.connect(
        dbname = config.DATABASE,
        user = config.USERNAME, 
        password = config.PASSWORD,
        host = config.HOSTNAME, 
        port = config.PORT
    )
    #to write query tools
    cursor = conn.cursor()

    # insert_query = """
    #     INSERT INTO actors(first_name, last_name, age, number_oscars)
    #     VALUES ('Natalie', 'Portman', '1981-06-09', 1)
    # """

#     insert_query = """
#     CREATE table movie_reviews(
#     review_id int not Null,
#     review varchar(1000),
#     foreign key (review_id) references movies (movie_id)
#     )
# """
    insert_query = """
        INSERT INTO movie_reviews(review_id, review)
        VALUES (2, 'movie may have been without aliens');
    """

    

    # cursor.execute('SELECT * FROM actors') #writting query


    cursor.execute(insert_query)
    conn.commit()

    # Fetch the inserted data

    # cursor.execute('SELECT * FROM movies where fk_director_id = 2')
    print(cursor.fetchall()) #WHEN GETTING DATA FROM DATABAS

except psycopg2.Error as e:
    print('Error connecting', e)

finally:
    if conn:
        cursor.close()
        conn.close()

# Exercise 
        # insert into actors table 2 new actors 
        #select from table movies all the movies from director steven spielberg
        #create a table named movie_reviews(one movies can get many reviews and a review is for one movie)
        #and insert 3 review


