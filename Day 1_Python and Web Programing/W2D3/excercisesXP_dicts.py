# Exercise 1 : Convert Lists Into Dictionaries

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# new_dict = dict(zip(keys, values))

# print(new_dict)
# Expected output:{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
# Results:{'Ten': 10, 'Twenty': 20, 'Thirty': 30} 


# Exercise 2 : Cinemax

# family = {"rick": 43, 
#           'beth': 13, 
#           'morty': 5, 
#           'summer': 8}
# total_cost = 0

# for value in family.values():
#     if value <= 3:
#         total_cost += 0
#     elif value <= 12 and value > 3:
#         total_cost += 10
#     elif value > 12:
#         total_cost += 15
# # rick pays 15, beth pays 15, morty pays 10, summer pays 10 
# print(total_cost)

# Results: Total: 50


# Exercise 3: Zara

brand = {'name': 'Zara',
'creation_date': 1975,
'creator_name': 'Amancio Ortega Gaona',
'type_of_clothes': ['men', 'women', 'children', 'home' ],
'international_competitors': ['Gap', 'H&M', 'Benetton'],
'number_stores': 7000 ,
'major_color': {
    'France': 'blue',
    'Spain': 'red',
    'US': ('pink', 'green') }
}

brand['number_stores'] = 2
# print(brand) changes to this: 

brand = {'name': 'Zara',
'creation_date': 1975,
'creator_name': 'Amancio Ortega Gaona',
'type_of_clothes': ['men', 'women', 'children', 'home' ],
'international_competitors': ['Gap', 'H&M', 'Benetton'],
'number_stores': 2 ,
'major_color': {
    'France': 'blue',
    'Spain': 'red',
    'US': ('pink', 'green') }
}
# Print a sentence that explains who Zaras clients are
# print(f'Zaras clients are people who are in catagories of {', '.join(brand['type_of_clothes'])}.')

# Add a key called country_creation with a value of Spain.

brand['country_creation'] = 'Spain'
# print(brand) changes to this: 

brand = {'name': 'Zara',
'creation_date': 1975,
'creator_name': 'Amancio Ortega Gaona',
'type_of_clothes': ['men', 'women', 'children', 'home' ],
'international_competitors': ['Gap', 'H&M', 'Benetton'],
'number_stores': 2 ,
'major_color': {
    'France': 'blue',
    'Spain': 'red',
    'US': ('pink', 'green') },
'country_creation': 'Spain'
}

# Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

brand['international_competitors'].append('Desigual')
# print(brand) changes to this: 

brand = {'name': 'Zara',
'creation_date': 1975,
'creator_name': 'Amancio Ortega Gaona',
'type_of_clothes': ['men', 'women', 'children', 'home' ],
'international_competitors': ['Gap', 'H&M', 'Benetton', 'Desigual'],
'number_stores': 2 ,
'major_color': {
    'France': 'blue',
    'Spain': 'red',
    'US': ('pink', 'green') },
'country_creation': 'Spain'
}
# Delete the information about the date of creation.
del brand['creation_date']

# print(brand) changes to this:

brand = {'name': 'Zara',
'creator_name': 'Amancio Ortega Gaona',
'type_of_clothes': ['men', 'women', 'children', 'home' ],
'international_competitors': ['Gap', 'H&M', 'Benetton', 'Desigual'],
'number_stores': 2 ,
'major_color': {
    'France': 'blue',
    'Spain': 'red',
    'US': ('pink', 'green') },
'country_creation': 'Spain'
}
#Print the last international competitor.
# Print(brand['international_competitors'][-1])
# results: Desigual

#  Print the major clothes colors in the US.

# print(brand['major_color']['US'])
# results ('pink', 'green')

# Print the amount of key value pairs (ie. length of the dictionary).

# print(len(brand))

#  Print the keys of the dictionary.

# for key in brand.keys():
#     print(key)

# results: name
# creator_name
# type_of_clothes
# international_competitors
# number_stores
# major_color
# country_creation

#  Create another dictionary called more_on_zara with the following details: creation_date: 1975,  number_stores: 10000

more_on_zara = {'creation_date': 1975,
                'number_stores': 10000}

# Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

brand.update(more_on_zara)
# print(brand)

# Print the value of the key number_stores. What just happened ?
# print(brand['number_stores'])
# what happened was it printed the value of 10000

# Exercise 4 : Disney Characters

# 4.1:
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# values = [0,1,2,3,4]
# disney_user_list = []
# for i in users:
#     disney_user_list.append([i])

# disney_user_A_dict = {}
# for user, value in zip(users, values):
#     disney_user_A_dict[user] = value

# print(disney_user_A_dict)
# results : {'Mickey': 0, 'Minnie': 1, 'Donald': 2, 'Ariel': 3, 'Pluto': 4}


# 4.2

# for i in values:
#     disney_user_list.append([i])

# disney_user_B_dict = {}
# for value, users in zip(values, users):
#     disney_user_B_dict[value] = users

# print(disney_user_B_dict)
# results {0: 'Mickey', 1: 'Minnie', 2: 'Donald', 3: 'Ariel', 4: 'Pluto'}


# 4.3


# for i in users:
#     disney_user_list.append([i])
#     disney_user_list_sorted = sorted(disney_user_list)

# disney_user_C_dict = {}
# for user, value in zip(disney_user_list_sorted, values):
#     user = user[0]
#     disney_user_C_dict[user] = value 

# print(disney_user_C_dict)
# results: {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# 4.4

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# values = [0,1,2,3,4]
# disney_user_list = []
# for i in users:
#     disney_user_list.append([i])

# disney_user_A_dict = {}
# for user, value in zip(users, values):
#     disney_user_A_dict[user] = value


# disney_user_A_dict
# disney_user_A_dict_keys = []
# disney_user_dict_no_i = {}
# for user in disney_user_A_dict:
#     disney_user_A_dict_keys.append([user])

# for key in disney_user_A_dict_keys:
#     user 
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
values = [0,1,2,3,4]

users_no_i = []
last_character_seen = ''
for user in users:
    if user 


# results: {"Mickey": 0, "Minnie": 1, "Ariel": 3,}

