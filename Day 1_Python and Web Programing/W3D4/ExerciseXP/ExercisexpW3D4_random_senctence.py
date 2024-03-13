import os
import random
dir_path = os.path.dirname(os.path.realpath(__file__))

def get_words_from_file():
    with open(dir_path +'/sowpods.txt','r') as word_list:
        read_all_words = word_list.readlines()
        read_all_words_format = []
        for word in read_all_words:
            read_all_words_format.append(word.strip('\n'))
        return read_all_words_format
# get_words_from_file()
        
def get_random_sentence(length):
    length = int(length)
    word_list_upper = get_words_from_file()
    word_list_lower = []
    for word in word_list_upper:
        word_list_lower.append(word.lower())
    words_for_sentence = []
    for num in range(length):
        words_for_sentence.append(random.choice(word_list_lower))
    random_list_as_string = ' '.join(words_for_sentence)
    print(f'Your random sentence is the following: \'{random_list_as_string}.\' Enjoy!')
    


def main():
    user_input = input('This program will create a random sentence, please input(1-20) how many words you want in the random sentence: ')
    get_random_sentence(user_input)

main()