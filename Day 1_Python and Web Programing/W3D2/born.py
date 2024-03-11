alphabetList = list("abcdefghijklmnopqrstuvwxyz")
pagesize = 4
list_of_4 = []

for i in range(pagesize):
    list_of_4.append(alphabetList[i])

print(list_of_4)

for i in range(pagesize,(pagesize*2)):
    list_of_4.append(alphabetList[i])

print(list_of_4[pagesize:])

for i in range(pagesize,(pagesize*2)):
    list_of_4.append(alphabetList[i])