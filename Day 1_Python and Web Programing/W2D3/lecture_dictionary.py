user_info = ['john', 'john@gmail.com', 77]

user_info_dict = {'name': 'john',
                  'email': 'john@gmail.com',
                  'score': 77,
                  'married': True, 
                  'address': 'Tel Aviv',
                  'pets': ['Caramel', 'Fluffy', 'Gingi', 'Chatuli'],
                  'family': {'name': 'Anna',
                             'relation': 'wife',
                             'age': 72},
                        'hobbies':('football', 'swimming', 'running')}

# # see dictionary
# print(user_info_dict['name'])
# # see nested dictionary
# print(user_info_dict['family']['relation'])
# # see lists indexes in dictionary
# print(user_info_dict['pets'][2])

# Exercise: see nested dictionaries
sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
print(sample_dict['class']['student']['marks']['history'])

# modifying entires
user_info_dict['address'] = 'Ranana'
# creating a new entry
user_info_dict['hair_color'] = 'Blonde'

# print(user_info_dict)

# DELETE entires in dictionary

del user_info_dict['hair_color']

print(user_info_dict)