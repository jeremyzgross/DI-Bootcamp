# Challenge 1
def sorting(input_words):
    split_words = input_words.split(',')
    sorted_words = sorted([word.strip() for word in split_words])

    sorted_string = ",".join(sorted_words)
    print(sorted_string)







#challenge 2
def longest_word(input_word):
    split_input = input_word.split()
    print(max(split_input, key=len))


longest_word('What\'s the word beutiful?')

sorting('word, is, knowledge')