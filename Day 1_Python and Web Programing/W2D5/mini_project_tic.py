gui = ['space','space','space','space','space',1,'vert',2,'vert',3,'horiz','vert','horiz','vert', 'horiz',4, 'vert',5,'vert', 6,'horiz','vert','horiz','vert', 'horiz',7, 'vert',8,'vert', 9,'space','space','space','space','space']

# gui_dict = {}

# for index in gui:
#     for element in index:
#         gui_dict[element] = index

# print(gui_dict)

def display_board(gui):
    """Take the 2d array and converts it into a GUI"""
    print("Let's play tic tac toe.\nPlayer 1 is X \nPlayer 2 is O")
    for i in range(1,9,3):
        index = gui.index(i)
        print(f'{gui[index]} | {gui[index+2]} | {gui[index+4]}')
        print('-'*9)

def player_input(player_sign):
    global gui
    "displays the gui and asks player for input to replace items in the board"
    display_board(gui)
    user_move = int(input('Please choose your quadrant number Player 1 (1-9)'))
    index = gui.index(user_move)
    gui[index] = player_sign
    display_board(gui)

            

player_input('X')
            
