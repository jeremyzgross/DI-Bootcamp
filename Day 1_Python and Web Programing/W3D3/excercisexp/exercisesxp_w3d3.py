#Exercise 1

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def __str__(self):
        return f'{self.amount} {self.currency}'

    def __int__(self):
        return(self.amount)
    
    def __repr__(self):
         return(f'{str(self.amount)} {self.currency}')
    

    def __add__(self, other):
        if isinstance(other, Currency): #if the other is is an object of the Currency class do this:
            if self.currency == other.currency:
                    return Currency(self.currency, self.amount + other.amount)
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            return self.amount + other
        
    
    def __iadd__(self, other):
        if isinstance(other, Currency): #if the other is is an object of the Currency class do this:
            if self.currency == other.currency:
                self.amount += other.amount
                return self
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            self.amount += other
            return self
        
    



c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
#'5 dollars'
print(int(c1))
#5
print(repr(c1))
#'5 dollars'

print(c1 + 5)
#10
print('c1 + c2')
print(c1 + c2)
#15

print(c1)
#'5 dollars'

c1 += 5
print(c1)
#10

print('c1 += c2')
c1 += c2
print(c1)
# #'20 dollar'

print('c1 + c3')
print(c1 + c3)
# # TypeError: Cannot add between Currency type <dollar> and <shekel>

# ex3 String Module

import random
import string

def generate_random_string(length):
    random_string = ''
    for _ in range(length):
        random_string += random.choice(string.ascii_letters)
    return random_string

random_string = generate_random_string(6)
print(random_string)

# ex4 Current Date
from datetime import date

current = date.today()
print('Current Date and Time is:', current)

#ex5 Amount Of Time Left Until January 1st

from datetime import date, time

def until_jan():
    today = date.today()
    until_jan = date(2025, 1, 1)
    jan1 = until_jan - today
    print(jan1)



until_jan() #I couldnt understand how to do time


#Ex 6

from datetime import datetime

def minutes_lived(birthdate):
    # Convert birthdate string to datetime object
    birth_datetime = datetime.strptime(birthdate, '%Y-%m-%d')
    current_datetime = datetime.now()
    minutes_difference = (current_datetime - birth_datetime).total_seconds() / 60
    
    return minutes_difference


minutes = minutes_lived('1996-06-06')
print(f"You have lived {minutes} minutes in your life.")






# # #ex 7 Faker
from faker import Faker
from faker.providers import DynamicProvider

fake = Faker() 
#define the language code provider
language_code_provider = DynamicProvider(
     provider_name="language_code",
     elements=["english", "french", "hebrew", "russian"],
)
#register language code provider
fake.add_provider(language_code_provider)

users_list = []

def add_user():
    user_dict = {
    'name': fake.name(),
    'address': fake.address(),
    'language_code': fake.language_code()}
    users_list.append(user_dict)


add_user()
add_user()
add_user()

print(users_list)