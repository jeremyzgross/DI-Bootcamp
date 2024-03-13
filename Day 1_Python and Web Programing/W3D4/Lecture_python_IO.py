'''
Python file IO meaning 'input' and 'output'
'''

'''
traditional way to open and close the file
'''
#open opens the file in your directory. Stores in a variable. Second string is open reading a as appened. there are other arguments in documentation 
# file_obj = open('text.txt', 'a')
# #content will read or write to the file  the file
# content = file_obj.write('adding this')
# #prints the data it read
# print(content)
# #close the obj when done
# file_obj.close()
'''
the issue with these older practice is that what if you forget to close? 
'''


'''Modern method: 'Context Manager' '''

# with open('text.txt', 'w') as file_obj: #with will open and close the file and save to variable in one line. Use colon
#     file_obj.write(' this is a modern use of write')


'''#Best Practice'''
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(dir_path +'/text.txt', 'r') as file_obj:
    content1 = file_obj.read(10) #reads 20 characters. You are passing in characters
    content = file_obj.readline() #reads as string
    content_list = file_obj.readlines() #reads as list
    print(content1[1:7]) #you can choose the range of characters 
