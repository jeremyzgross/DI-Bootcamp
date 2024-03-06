# functions 
'''this is a docstring that contains three sets of quotes.
 If you hover over the function when it is called later, it will show your documentation'''

def say_hello(x):
    '''prints a message to the username'''
    print(f'Hey there {x}')

say_hello('zeep')


def say_hello_language(username:str, language:str):
    '''prints a message to the username in the specific language'''
    if language  == 'EN':
        print(f'Hey there {username}')
    elif language == 'PT':
        print(f'Oi! {username}')
    elif language == "HE":
        print(f'שלום {username}')

username = 'shalom'
say_hello_language(username, 'PT')

def sum(a,b=5):
    print(a+b)

sum(5)

# Scope examples
# global scope
count = 100
def calculation(a,b):
    # local scope
    global count
    result = a + b
    count += result
    return count

print(calculation(5,12))

# Return more than one value 

def country_info(country_name):
    capital = ''
    population = 0
    if country_name == 'Israel':
        capital ='Jerusalem'
        population = '9364000'
    elif country_name == 'Brazil':
        capital ='brazillia'
        population = '21400000'
    return(country_name, capital, population) #uses a tupple to unpack the information in the function

print(country_info('Israel'))
country_name, capital, population = country_info('Israel')

print(f'{country_name} population is {population} and the capital is {capital}')




