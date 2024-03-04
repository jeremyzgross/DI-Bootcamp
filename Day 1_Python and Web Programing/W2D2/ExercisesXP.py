# Exercise 1 : Set

my_fav_numbers = {420, 22, 6}
my_fav_numbers.add(1)
my_fav_numbers.add(2)
my_fav_numbers.pop()
# # RESULTS discard 1

friends_fav_numbers = {421, 23, 7}
our_fav_numbers = my_fav_numbers.union(friends_fav_numbers)
print(our_fav_numbers)
# RESULTS {2, 420, 23, 6, 22, 421, 7}

# Exercise 2: Tuple
some_tupple= (1)
some_tupple.add(2)
print(some_tupple)
# RESULTS can't add or change to a tupple because it is immutable


# Exercise 3: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("kiwi")
basket.insert(0, "Apples")

apple_count = 0
for i in basket:
    if i == "Apples":
        apple_count += 1
    else:
        continue
print(apple_count)

basket.clear()
print(basket)

# Exercise 4: Floats
# a float is a decimal whereas an integers is a whole number

a_list_to_create = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

generated_list = []
for i in range(1, 6):
    # generated_list.append(i/2)
    generated_list.append(i)
    generated_list.append(i+0.5)
print(generated_list[1:9])

# Exercise 5: For Loop

list_of_numbers = []
for i in range(1,21):
    list_of_numbers.append(i)
print(list_of_numbers)
# RESULTS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

list_of_numbers = []
for i in range(1,21):
    list_of_numbers.append(i)
print(list_of_numbers[0::2])
# list becomes every even index [1, 3, 5, 7, 9, 11, 13, 15, 17, 19,]


# Exercise 6 : While Loop
password = ''
while password != 'jeremy':
    password = input('password? ')


# Exercise 7: Favorite Fruits


user_favorite_fruits = input('What are your favorite fruit(s)? Please seperate the fruit with a space ')

fruit_list = user_favorite_fruits.split()

print(fruit_list)

user_second_input = input("what is your favorite fruit again?")

if user_second_input in fruit_list:
    print('Your favorite fruit! Enjoy!')
else:
    print('New fruit. I hope you enjoy')

# Exercise 8: Who Ordered A Pizza ?

pizza_toppings =[]
toppings =()
toppings_total = 0
while toppings != "quit":
    toppings = input('What pizza toppings would you like? Type Quit when you are done ')
    if toppings != "quit":
        pizza_toppings.append(toppings)
        toppings_total+= 2.5
        print(f'{toppings} was added to your pizza.')

toppings_string = ", ".join(pizza_toppings)
pizza_total = 10 + toppings_total 
print(f'You ordered a pizza with {toppings_string} and your total for the pizza is $ {pizza_total}')


# Excercise 9: Cinemax

total = 0
response = ""
while response != 'done':
    response = input("What is the age of the person? If done, write done ")
    if response != 'done':
        response = int(response)
        if response <= 3:
            total += 0
        elif response <= 12 and response > 3:
            total += 10
        elif response > 12:
            total += 15
print(f'Your total for tickets is ${total}.')

list_of_people =[]
response = ""
while response != 'done':
    response = input("What is the name for the list? If done, write done ")
    if response != 'done':
        age = int(input("What is your age? "))
        if age >= 16 and age <= 21:
            list_of_people.append(response)
        else:
            print("You cannot watch this movie")
print(list_of_people)
    
    
# Exercise 10 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []
while sandwich_orders != []:
    first_sandwhich = sandwich_orders[0]
    if first_sandwhich != "Pastrami sandwich":
        finished_sandwiches.append(first_sandwhich)
    sandwich_orders.pop(0)
print(finished_sandwiches)
print(sandwich_orders)











