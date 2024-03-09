cats = ['Lulu', 'Miau', 'Chatuli']


# list comprehension

num_lists = [] #traditional way
for num in range(6):
    if num % 2 == 0:
        num_lists.append(num)

print(num_lists)

# list comp way to append (only)
num_lists2 = [num for num in range(6) if num % 2 == 0] #looks like a horizontal loop. Appends a list
print(num_lists2)


