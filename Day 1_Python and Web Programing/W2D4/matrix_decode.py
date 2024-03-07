
# FIXED with space
# matrix_string = (r'7iiTsxh%?i #sM $a #t% r!')

matrix_string = ('7iiTsxh%?i #sM $a #t%^r!')

matrix = []
chars = []
counter = 0
tmp_list = []

for c in matrix_string:
     tmp_list.append(c)
     counter = counter + 1
     if len(tmp_list) == 3:
         matrix.append(tmp_list)
         tmp_list = []

decoded_string = ""

for c in range(0,len(matrix[0])):
    for r in range(0,len(matrix)):
        character = matrix[r][c]
        if character.isalpha() or character == ' ':
            decoded_string = decoded_string + character
            chars.append(character)

print(decoded_string)