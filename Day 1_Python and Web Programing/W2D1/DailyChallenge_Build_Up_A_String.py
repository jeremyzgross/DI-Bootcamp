user_string = input("Please write a string that is 10 characters long: ")


#1)
if len(user_string) == 10:
    print('perfect string')
elif len(user_string) > 10:
    print("String too long")
else:
    print('String too short')


# 2)
string_as_list = (list(user_string))
First_and_Last = {string_as_list[0], string_as_list[-1]}
print(First_and_Last)

# 3)


for i in range(1, len(user_string) + 1):
    print(user_string[:i])

# ^this one was a steep inclind from what we learned today. But after research I understand what it is doing. 
# It loops though each character. i becomes the first character and prints then the loop tells it to print i plus the next one until the length of the world is looped through.
# [:1] is related to slicing in python which i do not fully understand.