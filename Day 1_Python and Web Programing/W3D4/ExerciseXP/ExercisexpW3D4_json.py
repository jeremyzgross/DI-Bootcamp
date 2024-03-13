import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)
# print(data['company']['employee']['payable']['salary'])


data['company']['employee']['birth_date']= ['06/06']

new_json = json.dumps(data, indent=2)
with open('new_file.json', 'w') as json_file:
    json_file.write(new_json)