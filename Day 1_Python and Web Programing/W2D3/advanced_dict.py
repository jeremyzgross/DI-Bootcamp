# zip allows to merge list together

list1 = [1,2,3]
list2 = ['a','b','c']
list3 = [1.1, 2.2, 3.3, 4.4, 5.5]


zipped = zip(list1, list2, list3)

print(zipped)
# can't be seen because you need a for loop 

for item in zipped:
    print(item)

# results:
    # (1, 'a', 1.1)
# (2, 'b', 2.2)
# (3, 'c', 3.3)
    
# ^takes the first element of the first list and makes it first

zipped_list = list(zip(list1, list2, list3))

print(zipped_list)

# ^ makes tupples into list

names = ['Anna', 'Daniel', 'Maria', 'Leo']
scores = [50,55,78,100]

users = dict(zip(names, scores))
print(users)

# ^combines the list and makes them a dictionary

