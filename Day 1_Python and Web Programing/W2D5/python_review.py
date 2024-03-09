# Python Basic Value Types

# strings: 
# integers : whole numbers
# floats : decimals
# booleans: True or False

greeting = 'Hello, welcome' #string
age = 3 #integer
height = 1.8 #float
is_female = True #boolean

# Python Data Collections/structures
#1 - Sequences:
#list: Ordered and mutable
#tupples: ordered and un-mutable

#2 - Collections:
#dictionary 
#set


some_list = ['harry', 'ron'] # lists

print(some_list[-1]) #access a list item

some_dict = {} #dictionary

# List Methods:
some_list.append('some string') #append adds item to list at the end
some_list.clear #makes the list empty 
some_list.insert(2, 'Malfoy') #inserts where index specifies 
some_list.pop() #removes the last item in the list
some_list.pop(1) #specifies which index to remove

# Tupples: 
some_tupple = ('harry', 'ron') #an ordered data structure

print(some_tupple[0]) #locate location of tupple

# Unpacking Tupples

country, capital, bigest_city = ('brazil', 'brazila', 'sao paulo') #each tupple item is being unpacked into the variables
print(country)
print(capital)
print(bigest_city)

# you cant change a tuple like you change a list because it is unmutable. 
# if you want to change, you would have to make a new tupple.

item = ('test', 'test1')
new_tupple = some_tupple + item
print(new_tupple)

# max value
print(max(some_tupple))
print(min(some_tupple))
# print(sum(some_tupple))

# Sets : unordered
set1 = {1,2,3,4, "hi", "world", 'python'}
print('python' in set1)
set1.remove('world') #have to specify the element, not the index 


# Dictionary: Unordered and mutable

data = {
    'first name' : 'Jeremy',
    'last name' : 'Gross',
    'age' : 27,
    'address' : 'tel aviv',
    'family': [('jessica', 34),('tommy', 12)],
    }

print(data['family'][1][0]) #access items within items in dictionary 

for key, items in data.items(): #looping through keys in dict
    print(key)

for key, value in data.items(): #looping through values in dict
    print(key, value)


# Two ways to adding entires (key:value) in dicts 

data['profession'] = 'student' #option 1

dict_to_add = {'profession': 'student', #dictionary info to update
               'ID': 12345678,
               'car_brand': 'Acura'} 

data.update(dict_to_add) #adds new dictionary data to existing dictionary




