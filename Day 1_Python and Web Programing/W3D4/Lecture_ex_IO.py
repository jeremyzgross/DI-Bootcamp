import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(dir_path +'/starwars.txt', 'r') as file_obj:
    # lines = file_obj.readlines()
    for line in file_obj:
        print(line, end='')
    # read_5_first_characters = file_obj.read(5)
    # print(read_5_first_characters) #Read only the 5 first characters of the file
    # read_all_words = file_obj.readlines()
    # print(read_all_words)
    # darth_counter = 0
    # luke_counter = 0
    # lea_counter = 0
    # read_line_by_line= file_obj.readlines()
    # for line in read_line_by_line:
    #     if line == 'Darth\n' or line == 'Darth':
    #         darth_counter += 1
    #     if line == 'Luke\n' or line == 'Luke':
    #         luke_counter += 1
    #     if line == 'Lea\n' or line == 'Lea':
    #         lea_counter += 1
    # print(f' Darth appears {darth_counter} times')
    # print(f' Luke appears {luke_counter} times')
    # print(f' Lea appears {lea_counter} times')




