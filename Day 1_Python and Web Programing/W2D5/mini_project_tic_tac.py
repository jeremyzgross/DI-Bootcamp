coordinates_dict = {'1': 1, 
              '2': 2, 
              '3': 3, 
              '4': 4, 
              '5': 5, 
              '6': 6, 
              '7': 7, 
              '8': 8, 
              '9': 9} #setting a key as a string and value as an integer

def display_board():
    """diplays tic-tac-toe board"""
    # board = "|1|2|3|\n|4|5|6|\n|7|8|9|"
    board = (f'|{coordinates_dict["1"]}|{coordinates_dict["2"]}|{coordinates_dict["3"]}|\n' #1st row writes out the value followed by a pipe then starts a new line
           f'|{coordinates_dict["4"]}|{coordinates_dict["5"]}|{coordinates_dict["6"]}|\n' #2nd row  writes out the value followed by a pipe then starts a new line
           f'|{coordinates_dict["7"]}|{coordinates_dict["8"]}|{coordinates_dict["9"]}|') #3rd roww rites out the value followed by a pipe then starts a new line
    print(board) #using dictionary.values method the value of each coordinate will be printed. These will be replaced later with the player_sign

#struggle
def board_is_imcomplete(): 
    """Checks if board is complete"""
    global coordinates_dict #imports the dictionary
    for key, value in coordinates_dict.items():
        if isinstance(value, int): #if the value is still an integer and not a str the board is imcomplete
            return True 
    return False #if there are no more int, the board is complete 


def player_input(player_sign):
    """take user input to replace the value with an x or an o. Then print the display board again"""
    global coordinates_dict #imports dictionary
    user_move = input(f'Player {player_sign}: Please choose your quadrant number(1-9) ') #user_move
    if user_move in coordinates_dict and isinstance(coordinates_dict[user_move], int): #checking if the spot is sitll availible
        coordinates_dict[user_move] = player_sign  #the spot is still an integer and will replace with the player sign
        display_board() #display board with player move in spot
    else:
        print("Invalid input. Please enter a number between 1 and 9. In a spot that is not taken") #value is a string and can't be replaced
        display_board() #board displays again
        player_input(player_sign) #function repeats with player sign 
'''
|1|2|3|
|4|5|6|
|7|8|9|
''' 
#struggle
def check_win(player_sign):
    """sees if the player won based on their inputs"""
    global coordinates_dict #imports the spots dictionary
    combonations = [ # the winning combonations
        ['1','4','7'],
        ['1','2','3'],
        ['1','5','9'],
        ['2','5','8'],
        ['3','6','9'],
        ['4','5','6'],
        ['7','8','9'],
        ['3','5','7']
    ]
      #loop through combonations of wins
    for combo in combonations:
        counter = 0 # engaging counter to see if player is winning
        #loop through all of the location in combo
        for location in combo: # loops through numbers in each combo
            #if one of the combonations is the player sign give them a point 
            if coordinates_dict[location] == player_sign: #sees if player sign is in number location
                counter += 1 #gives them a point
                # if they have 3 points they won
                if counter == 3:
                    return True #player wins
    #if we checked all combonations and they dont have any of them they have not won yet
    return False

   

#struggle
def play():
    """main function to play the game."""
    # this displays initial unplayed board
    display_board() # displays board
    player = 'x' # setting we are looking at player x
    while board_is_imcomplete(): # initiates game logic
        if player == 'x': 
            player_input('x') # feeds argument of player x into player_input function (which feeds into replacing corrdinates) 
            if check_win(player): # player_sign is made argument for check win function
                print("game over player x won ") 
                return # loop conditions met and program ends
            player = 'o' # if a win is not established, player o goes
        else:
            player_input('o') # feeds argument of player o into player_input function (which feeds into replacing corrdinates) 
            if check_win(player):  # player_sign is made argument for check win function
                print("game over player o won ")
                return # loop conditions met and program ends
            player = 'x' # if a win is not established, player x goes
    print('game over board is full') #board is complete and play

play()