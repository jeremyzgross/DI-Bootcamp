matrix_string = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
'''

#matrix 2d list
#[[],[],[]]

COLUMN = 3
ROW = 8

rows_str = matrix_string.split('\n')
rows = [row[1:] for row in rows_str]
matrix = []
for char in range(len(matrix_string)):
    sublist = list(matrix_string[char:char + COLUMN])
    matrix.append(sublist)

# print(matrix)

for row in rows:
    matrix.append(list(row))


matrix = [list(row) for row in rows]

transposed_matrix = list(zip(*matrix))

print(transposed_matrix)