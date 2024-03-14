import os

dir_path = os.path.dirname(os.path.realpath(__file__))

# with open(dir_path +'/sowpods.txt', 'r') as file_obj:
#     word_list = file_obj.read().readlines()

    # print(word_list)


class AnagramChecker:

    def __init__(self, file_name):
        with open(dir_path +'/'+file_name, 'r') as file_obj:
            cleaned_words = []
            for word in file_obj.readlines():
                cleaned_words.append(word.strip('\n'))
            self.database_list = cleaned_words

    # @classmethod
    # def validate_word(cls,input_word):
    #     return input_word.upper() in cls.word_list
        


    def validate_word(self,input_word):
        return input_word.upper() in self.database_list
        # upper_input_word = input_word.upper()
        # for word in self.database_list:
        #     if word == upper_input_word:
        #         return 'this word is an anagram'
        #     else:
        #         continue
        # return False
    
    def get_anagram(self,input_word):
        anagram_list = []
        upper_input_word = input_word.upper()
        # sorted_input_word = sorted(upper_input_word)
        for anagram in self.database_list:
            # stringed_word = sorted(anagram)
            # if sorted_input_word[0] == stringed_word[0]:
            if len(upper_input_word) == len(anagram) and sorted(upper_input_word) == sorted(anagram) and anagram != upper_input_word:
                anagram_list.append(anagram)
        # anagram_list.remove(input_word.upper())
        return anagram_list




my_word = AnagramChecker('/sowpods.txt')

print(my_word.validate_word('meat'))
# print(my_word.get_anagram('meat'))