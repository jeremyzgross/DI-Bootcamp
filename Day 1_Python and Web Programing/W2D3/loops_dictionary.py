# for and while loop 

# review
my_fav_nums = []
for i in range(1,25):
    my_fav_nums.append(i)

# print(my_fav_nums[1::3])
# results
my_fav_nums = [2, 5, 8, 11, 14, 17, 20, 23]

for i, num in enumerate(my_fav_nums):
    num = num ** 2
    my_fav_nums[i] = num 

# enumerate gives your two things: a number and the element 
# print(my_fav_nums)
    
# Loop Excersise: Delete set of keys form dict
    
sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]  

for key in keys_to_remove:
    del sample_dict[key]

print(sample_dict)







