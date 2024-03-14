from anagram_checker import AnagramChecker

def menu():
    user_input = ''
    while user_input != 'exit':
        user_input = input(f'Feed me a word or type exit: ')
        if user_input == 'exit' or 'Exit' or 'EXIT':
            break
        acceptable_word(user_input)

def acceptable_word(user_input):
    anagram = AnagramChecker('/sowpods.txt') 
    if anagram.validate_word(user_input):
        anagrams = anagram.get_anagram(user_input)
        print(f'{user_input.upper()} has these anagrams: {','.join(anagrams)}')
    else:
        print('not an anagram')





menu()




