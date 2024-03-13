'''
JSON stands for “JavaScript Object Notation” .

In short, it is a text file that stores a python dictionary.
'''

import json
import os
dir_path = os.path.dirname(os.path.realpath(__file__))


'''
writting a json file
'''
my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

json_file = 'family.json'

#create a json file adding it to a python dictionary
with open (dir_path+ '/family.json', 'w') as file_obj:
    json.dump(my_family, file_obj, indent =2, sort_keys=True) #name of the dic you want to but in the file and the obj to put it in
#indent and sort keys makes it look better


#convert dict to a json string and printing it to the file
json_str = json.dumps(my_family)# the s at the end of dumps means string
print(json_str)

'''
Reading json data
'''

with open (dir_path+ '/family.json', 'r') as file_obj:
    


