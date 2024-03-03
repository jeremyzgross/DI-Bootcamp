user_number = int(input("Feed me a number between 1 and 100: "))

if user_number % 3 == 0 and user_number % 5 == 0:
    print("FizzBuzz")
elif user_number % 3 == 0:
    print("Fizz")
elif user_number % 5 == 0:
    print("Buzz")

