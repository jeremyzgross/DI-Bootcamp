import config
import psycopg2

class MenuItem:
    def __init__(self,name,price = 0):
        self.name = name
        self.price = price
        self.conn = psycopg2.connect(
            dbname = config.DATABASE,
            user = config.USERNAME, 
            password = config.PASSWORD,
            host = config.HOSTNAME, 
            port = config.PORT
        )


    def save(self):
        cursor = self.conn.cursor()
        insert_query = """ 
INSERT INTO Menu_items (item_name, item_price) Values (%s, %s)"""
        cursor.execute(insert_query,(self.name, self.price))
        # new_item = cursor.fetchone()
        self.conn.commit()
        cursor.close()
        self.conn.close()
        # return new_item



    def delete(self):
       cursor = self.conn.cursor()
       insert_query = """ 
 DELETE FROM Menu_items WHERE item_name = %s RETURNING item_name"""
       cursor.execute(insert_query, (self.name,))
       delete_item = cursor.fetchone()
       self.conn.commit()
       cursor.close()
       self.conn.close()
       return delete_item
    
    def update(self, name, price):
           cursor = self.conn.cursor()
           insert_query = """ 
 UPDATE Menu_items SET item_name = %s, item_price= %s 
 WHERE item_name = %s"""
           cursor.execute(insert_query,(name,price,self.name))
           self.conn.commit()
           cursor.close()
           self.conn.close()
           self.name = name 
           self.price = price

sandwhich= MenuItem('sandwhich', 45)
cookie = MenuItem('cookie', 6)
# sandwhich.save()
# cookie.save()

cookie.update('brownie', 4)
