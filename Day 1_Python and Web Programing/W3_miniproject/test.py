import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(dir_path +'/sowpods.txt', 'r') as file_obj:
    word_list = file_obj.read().splitlines()

# print(word_list)
    


anagram_list = []
def get_anagram():
    input_word = input('Feed me Meat: ')
    sorted_input_word = sorted(input_word.upper())
    for other_word in word_list:
        stringed_word = sorted(other_word)
        if sorted_input_word[0] == stringed_word[0]:
            anagram_list.append(other_word)
    # anagram_list.remove(input_word.upper())
    print(anagram_list)

get_anagram()
