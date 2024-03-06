# *Args And **Kwargs

## *(the asterik makes this an argument)

# *args is the convention

def welcome(*args): #less specific argument allows to pass multiple arguments as opposed to one. see below
    print(args)

welcome("harry", "ron") #multiple arguments 


# **kwargs is useful when we don’t know in advance how many keyworded arguments we need to pass in a function. A dictionary of arguments

def create_info_dict(**kwargs):
    for key, value in kwargs.items():
        print(f'key:{key}, value: {value}')
    return kwargs

print(create_info_dict(name = 'jeremy', address = 'Tel Aviv'))

list_2d = [["7", 'i', 'i'],
           ['t', 's', 'x'],
           ['h', '%', '?'],
           ['i', ' ', '#'],
           ['s', 'm', ' '],
           ['$', 'a', ' '],
           ['#', 't', '%']
           ['^', 'r', '!']]