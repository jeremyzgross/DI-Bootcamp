import config
import psycopg2

class MenuItems:
    def __init__(self,name,price):
        self.name = name
        self.price = price


    def save(self):
        conn = psycopg2.connect(
            dbname = config.DATABASE,
            user = config.USERNAME, 
            password = config.PASSWORD,
            host = config.HOSTNAME, 
            port = config.PORT
        )
        cursor = conn.cursor()
        insert_query = """ 
INSERT INTO Menu_items (item_name, item_price) Values (%s, %s)"""
        cursor.execute(insert_query)
        conn.commit()
        cursor.close()
        conn.close()


    def delete(self):
       conn = psycopg2.connect(
            dbname = config.DATABASE,
            user = config.USERNAME, 
            password = config.PASSWORD,
            host = config.HOSTNAME, 
            port = config.PORT
        )
       cursor = conn.cursor()
       insert_query = """ 
 DELETE FROM Menu_items WHERE item_name = %s"""
       cursor.execute(insert_query)
       conn.commit()
       cursor.close()
       conn.close()
    def update(self):
           conn = psycopg2.connect(
            dbname = config.DATABASE,
            user = config.USERNAME, 
            password = config.PASSWORD,
            host = config.HOSTNAME, 
            port = config.PORT
        )
           cursor = conn.cursor()
           insert_query = """ 
 UPDATE Menu_items SET item_name = %s. item_price= %s 
 WHERE item_name = %s"""
           cursor.execute(insert_query)
           conn.commit()
           cursor.close()
           conn.close()

sandwhich= MenuItems('sandwhich', 45)
sandwhich.save()
