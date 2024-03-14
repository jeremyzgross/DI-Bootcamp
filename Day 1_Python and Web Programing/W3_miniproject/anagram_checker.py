import os

dir_path = os.path.dirname(os.path.realpath(__file__)) #path standard

class AnagramChecker:

    def __init__(self, file_name): #passing anagram file into init
        with open(dir_path +'/'+file_name, 'r') as file_obj: 
            cleaned_words = []
            for word in file_obj.readlines(): 
                cleaned_words.append(word.strip('\n')) #makes strings from file into list and rids of breakpoints
            self.database_list = cleaned_words #establishes new list of words in the self


    def validate_word(self,input_word):
        return input_word.upper() in self.database_list #is the word an anagram? if yes return true, else return false and logic does not work
    
    def get_anagram(self,input_word):
        anagram_list = [] #list where anagrams of input will be
        upper_input_word = input_word.upper() #makes input word uppercase
        for anagram in self.database_list: #loops each word in anagram list
            if len(upper_input_word) == len(anagram) and sorted(upper_input_word) == sorted(anagram) and anagram != upper_input_word: #establishes perameters for input word for logic to run
                anagram_list.append(anagram) #adds the desired anagram to list
        return anagram_list #makes anagram list




# my_word = AnagramChecker('/sowpods.txt')

# print(my_word.validate_word('meat'))
# print(my_word.get_anagram('meat'))