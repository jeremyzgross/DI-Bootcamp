import os
import re
dir_path = os.path.dirname(os.path.realpath(__file__))

with open(dir_path +'/the_stranger.txt', 'r') as file_obj:
    stranger = file_obj.read()

#sample is A good book would sometimes cost as much as a good house
class Text:
    def __init__(self, text):
        self.text = text.lower()
    
    def word_frequency(self):
        text_to_list = re.findall(r'\b\w+\b', self.text) 
        word_freq_dict = {}
        for item in text_to_list:
            word_freq_dict[item] = text_to_list.count(item)
        return(word_freq_dict)
    
    def most_common(self):
        most_common = self.word_frequency()
        largest_value= max(most_common, key=most_common.get)
        return(f'\'{largest_value}\' is the most common word')
    
    def least_common(self):
        least_common = []
        word_frequency_dict = self.word_frequency()
        for key, value in word_frequency_dict.items():
            if value > 1:
                continue
            else:
                least_common.append(key)
        return(f'{least_common} are the most unique')
    
    @classmethod
    def from_file(cls):
        pass#was not really sure of the purpose of this, i just pased the text into exisiting methods

            




# c1 = Text('yes.yes,no, As =as as-')
c1 = Text(stranger)
print(c1.most_common())
# c1 = Text('as as as house if' )
# print(c1.word_frequency())
# print(c1.word_frequency())
# print(c1.least_common())





