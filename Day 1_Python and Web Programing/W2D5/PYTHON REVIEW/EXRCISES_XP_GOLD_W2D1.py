# Excersise 1
string = 'Hello world Hello world Hello world Hello world I love python I love python I love python I love python'
print(string)

# Excersise 2

def user_month(user_input):
    if user_input in range(3,6):
        print('Spring')
    elif user_input in range(6,8):
        print('summer')
    elif user_input in range(9,11):
        print('Autum')
    else:
        print('winter')



user_month(2)