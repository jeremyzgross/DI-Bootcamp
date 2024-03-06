# Exercise 1 : What Are You Learning ?

def display_message(subject):
    print(f'We are learning {subject}')

display_message('functions')


# Exercise 2: What’s Your Favorite Book ?

def favorite_book(title):
    print(f'One of my favorite books is {title}')

favorite_book('The Shining')

# Exercise 3 : Some Geography

def describe_city(city, country = 'America'):
    print(f'{city} is in {country}')

describe_city('Tel Aviv')

# Exercise 4 : Random

import random
# print(random.choice(range(1,11)))

def guess_the_number(user_num):
    comp_num = random.choice(range(1,11))
    if user_num != comp_num:
        print(f'Fail! Your number {user_num} was not my number {comp_num}')
    else:
        print('Success!')

guess_the_number(5)

# Exercise 5 : Let’s Create Some Personalized Shirts !

def make_shirt(size = "large", text = "I love Python"):
    print(f'The size of the shirt is {size} and the text is {text}')

make_shirt(5,"This is sparta")
make_shirt()
make_shirt("medium",)
make_shirt("small","python is cool")

# Exercise 6 : Magicians 

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# # Create a function called show_magicians(), which prints the name of each magician in the list.
def show_magicians():
    print(magician_names)
show_magicians()


def make_great():
    """adds 'the great' to every element in the magician_names list """
    for i, name in enumerate(magician_names):
        magician_names[i] = f'{name} the great' 
    
    
make_great()
show_magicians()

Exercise 7 : Temperature Advice

import random

def get_random_temp(season):
    '''recieved a season argument of winter or summer and returns a range of temps for each season'''
    if season == 'winter':
        return random.choice(range(-11, 17))
    if season == 'summer':
        return random.choice(range(24, 40))

def main():
    '''use the get random temp function to tell the user what a random temp is in the season of their choosing'''
    season = input('is it summer or winter?')
    # the_temp = get_random_temp()
    the_temp = get_random_temp(season)
    # if the_temp <=0:
    #     print(f'the temperature right now is {the_temp} degrees Celsius. You should get stay inside!')
    if the_temp < 17 and the_temp > -11:
        print(f'You are right, it is winter!T he temperature right now is {the_temp} degrees Celsius. Grab a coat!')
    # elif the_temp < 23 and the_temp > 16:
    #     print(f'the temperature right now is {the_temp} degrees Celsius. Not quite winter not quite spring!')
    # elif the_temp < 32 and the_temp > 24:
    #     print(f'the temperature right now is {the_temp} degrees Celsius. Smells like spring!')
    elif the_temp <= 40 and the_temp >= 24:
        print(f'You are right it is summer!The temperature right now is {the_temp} degrees Celsius. Wear some shorts!')
    # else:
    #     print("Something went wrong, try again!")

    # print(f' the temperature right now is {the_temp} degrees Celsius')


main() 

# Exercise 8 