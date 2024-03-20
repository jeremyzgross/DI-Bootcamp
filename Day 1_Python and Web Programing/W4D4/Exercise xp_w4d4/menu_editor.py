# part 2
from menu_item_2 import MenuItem as mi
from menu_manager import MenuManager as mm

def show_user_menu():
    print(f'View an Item (V)\nAdd an Item (A)\nDelete an Item (D)\nUpdate an Item (U)\nShow the Menu (S)\n')
    user_input = input(f'Welcome, please see the program menu and click the letter that matches ')
    if user_input == 'v' or user_input == 'V':
        user_item_input = input(f'Please input item you would like to see ')
        find_menu_item = mm.get_by_name(user_item_input)
        print(find_menu_item)
    elif user_input == 'a' or user_input == 'A':
        add_item_to_menu()
    elif user_input == 'd' or user_input == 'D':
        remove_item_from_menu()
    elif user_input == 'u' or user_input =='U':
        update_item_from_menu()



def add_item_to_menu():
    user_input = input('Please add the menu item name and the cost separated by comma (e.g., "Item Name,Price"): ')
    name, price = user_input.split(',')
    name = name.strip()  # Remove extra spaces
    price = price.strip()  # Remove extra spaces
    new_item = mi(name,price)
    new_item.save()


def remove_item_from_menu():
    user_input = input('Please input the item name you want to delete ')
    name = user_input.strip()
    deleted_item = mi(name)
    result = deleted_item.delete()
    if result == None:
        print('item does not exist to remove')
    else:
        print('item was deleted')

def update_item_from_menu():
     user_input = input('Please input the item name you want to update and the price (e.g., "Item Name,Price") ')
    name = user_input.strip()
    updated_item = mi(name)
    results == updated_item.update()
    if results == None:
         print('item was not updated')
    else
#continue building this function
    

show_user_menu()