# 1
number = int(input("Feed me a number: "))
length = int(input("Feed me a whole number for length: "))

multiples = []
base_number = 0
for i in range(0,length):
    base_number += number
    multiples.append(base_number) 

print(multiples)


# 2


duplicate_character_word = input("Feed me a word that has duplicate letters ")

fixed_word = ''
last_character_seen = ''
for i in duplicate_character_word:
    print(f'i = {i}')
    print(f'last character seen = {last_character_seen}')
    if i != last_character_seen:
        fixed_word = fixed_word + i
        print(fixed_word)
        last_character_seen = i 

print(fixed_word)