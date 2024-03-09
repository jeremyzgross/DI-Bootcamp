def upper_string(s):
    return s.upper()

fruits = ['Apple', 'Banana', 'Cherry', 'Date']
# map function - applies some function you have to everything in second argument
print(list(map(upper_string, fruits))) #first argument is function applys to second argument if you print just map(upper_string, fruits)) it will print ram location. You to specify the object you are printing


# filter function

def starts_with_a(s):
    return s[0] == 'A'

print(list(filter(starts_with_a, fruits)))


# lambda

print(list(filter(lambda s: s[0] == 'A', fruits)))