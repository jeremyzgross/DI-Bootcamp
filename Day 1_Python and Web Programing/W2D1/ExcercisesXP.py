# Excersie 1: Hello World

print("Hello world "* 4)
# Results: Hello world Hello world Hello world Hello world

# Exercise 2 : Some Math

print((99**3)*8)
# Results 7762392

# Exercise 3 : What Is The Output ?

# 1) False
# 2) True
# 3) False
# 4) err 
# 5) False

# Exercise 4 : Your Computer Brand

computer_brand = 'Mac'
print(f"I have a {computer_brand} computer")
# Results: I have a Mac computer

# Exercise 5 : Your Information

name = "Jeremy"
age = "27"
shoe_size = "US 12"
info = (f"Hello, I am {name}, I am {age} and I wear New Balances size {shoe_size}.")
print(info)
# Results: Hello, I am Jeremy, I am 27 and I wear New Balances size US 12.

# Exercise 6 : A & B

A = 3
B = 2
if A > B:
    print("Hello World")
# Results: Hello World

# Exercise 7 : Odd Or Even

user_number = int(input("Feed me a number"))
if user_number % 2 == 0:
    print("Thank you, that number was EVEN!")
else:
    print("Ew, that number was ODD")
# Results: 
# input: 3 
    #Output: Ew, that number was ODD
# Input: 2
    #Thank you, that number was EVEN!

# Exercise 8 : What’s Your Name ?

user_name = input("What is your name? ")
if user_name == "Jeremy":
    print("Wow we have the same name!")
else: 
    print(f"Nice to meet you {user_name}")
# Results: 
# Input: Jeremy 
    #O utput: Wow we have the same name!
# Input: Juliana
    # Output: Nice to meet you Juliana

# Exercise 9 : Tall Enough To Ride A Roller Coaster

user_height = int(input("What is your height?"))

if user_height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more")

# Results: Input: 145
    # Output: You need to grow some more
# Input: 146
    # Output: You are tall enough to ride!
# Input: 144
    # Output: You need to grow some more

