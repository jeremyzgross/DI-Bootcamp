import requests
import json
response = requests.get('https://api.chucknorris.io/jokes/random') #must store in variable

print(response)
#<Response [200]> # this will return a status code to see if it was sucessful

#200 = Success
#300 = redirect
#400 = error/not available
#404 = not founded 

print(response.text) #.text is a json method

# Example use case
jokes = []
for i in range(10):
    response = requests.get('https://api.chucknorris.io/jokes/random')
    data = response.json()
    joke_value = data['value']
    jokes.append(joke_value)

print(jokes)