# dictionary comprehension

fruits = ['apple', 'banana', 'cherry', 'date']

# make the dict from list

fruit_length= {fruit : len(fruit) for fruit in fruits}

print(fruit_length)

# results {'apple': 5, 'banana': 6, 'cherry': 6, 'date': 4} (why???)