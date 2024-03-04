# Two types of loops: For loops and while loops

# syntax for <variable_name> in <sequence_name>:
    # CODE
    # CODE

# students = ['john', 'bobby', 'anna', 'lise']
# for each_student in students:
#     if each_student == 'anna':
#         print('hello anna')
#     else:
#         print(each_student)

# cities = ('Tel Aviv', 'New York', 'Moscow', 'Amsterdam')

# for i in cities:
#     print(f'I have been in {i}')

# example
# user_input = int(input('Feed me a number to multiply'))
# for i in range(1,10):
#     print(user_input * i)

# While loop
    
# counter = 0

# while counter <=8:
#     counter += 1
#     print('hello')
    

# password = ''

# while password != '12345':
#     password = input('password?')
#     if password == 'jeremy':
#         break

# print("thank you for the password")

current_num = 0

while current_num <= 10:
    current_num +=1
    if current_num == 5:
        continue
    else:
        print(current_num)
