
# FIXED with space
# matrix_string = (r'7iiTsxh%?i #sM $a #t% r!')
def printmatrix():
    matrix_string = ('7iiTsxh%?i #sM $a #t%^r!')

    matrix = []
    chars = []
    tmp_list = []

    for c in matrix_string:
        tmp_list.append(c)
        if len(tmp_list) == 3:
            matrix.append(tmp_list)
            tmp_list = []
    return matrix


matrix = printmatrix()
for column in matrix:
   column_0 = [column[0] for column in matrix] #list comprehension
   column_1 = [column[1] for column in matrix]
   column_2 = [column[2] for column in matrix]

transposed_matrix = [column_0, column_1, column_2]
transposed_string = ''
for i in transposed_matrix:
    for j in i:
        if j.isalpha():
            transposed_string += j
        else:
            transposed_string += ' '
decrypted_matrix = ' '.join(transposed_string.split())
print(decrypted_matrix)

            


#     decoded_string = ""

#     for c in range(0,len(matrix[0])):
#         for r in range(0,len(matrix)):
#             character = matrix[r][c]
#             if character.isalpha() or character == ' ':
#                 decoded_string = decoded_string + character
#                 chars.append(character)

#     print(decoded_string)

# printmatrix()