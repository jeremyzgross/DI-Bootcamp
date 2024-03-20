import config
import psycopg2

class MenuManager:
    conn = psycopg2.connect(
        dbname = config.DATABASE,
        user = config.USERNAME, 
        password = config.PASSWORD,
        host = config.HOSTNAME, 
        port = config.PORT
    )
    @classmethod
    def get_by_name(cls,name):
        cursor = cls.conn.cursor()
        insert_query = """ 
SELECT * From Menu_items WHERE item_name = %s"""
        cursor.execute(insert_query, (name,))
        item = cursor.fetchone()
        if item:
            return item
        else:
            return None 
    @classmethod
    def all_items(cls):
        cursor = cls.conn.cursor()
        insert_query = """ 
SELECT * From Menu_items"""
        cursor.execute(insert_query)
        items = cursor.fetchall()
        return items
    
# print(MenuManager.get_by_name('sandwhich'))

print(MenuManager.all_items())