# exception like a syntax error 
#print('hello')) Syntax Error = specific and clear

    # move = int(input('input your move for the game: '))
    # print(move)

#if you put a str instead of an int, the program will throw an error and the program will crash

#GAME EXAMPLE 
# VALID_MOVES= [i for i in range(1,10)]
#how to navigate through this using try:
def input_ex():
    while True:
        try:
            move = int(input('inpute for your move '))
            if move > 9:
                raise Exception('the move should in range 1-9')
        except Exception as e:
            print(e)
            continue
        finally:
            print('Thank you')

             
            # print('invalid input. I need a number ')
        #     move = int(input('inpute for your move' ))
        #     print(move)
        # finally:
    print('finally')


input_ex()