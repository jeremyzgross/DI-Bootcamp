from anagram_checker import AnagramChecker

def menu():
    user_input = ''
    while user_input != '()':
        user_input = input(f'Feed me a word or type (): ')
        acceptable_word(user_input)
        break

def acceptable_word(user_input):
    # user_input_list = user_input.split()
    # if len(user_input_list) == 1 and user_input.isalpha():
    #     stringed_input = user_input_list[0]
    anagram = AnagramChecker('/sowpods.txt')
    if anagram.validate_word(user_input):
        anagrams = anagram.get_anagram(user_input)
        print(f'{user_input} has these anagrams {','.join(anagrams)}')



# show_menu()
# menu()
acceptable_word('team')



