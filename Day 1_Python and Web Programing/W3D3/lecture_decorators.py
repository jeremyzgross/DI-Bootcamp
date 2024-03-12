# decorators

#Syntax: 
# @nameoffunction #applying another function to the current function
# def some_function():
#     pass

import time
#create a function that checks the runtime of other functions. Then make it a decorator

def how_much_time(func):
    def wrapper(): #he basic syntax
        t1 = time.time() #11:50:03:5
        func() #function called, executed and returned
        total = time.time() - t1 #11:50:06;:2 is the current time - 11:50:03:5 = 03:3
        print(f'{func.__name__} took {total} seconds') #func.__name__ calls the function it is applying to
        #code to calculate the execution time
    return wrapper


@how_much_time #the decorator function taking when the time of the start of the function and the end of the function
def do_this():
    #code to caluclate teh execution time
    #code of the function
    time.sleep(2)
    pass

@how_much_time
def do_a_thing():
    time.sleep(1.5)
    pass


@how_much_time
def do_something():
    time.sleep(0.5)
    pass

do_this()
do_a_thing()
do_something()

print('finish')