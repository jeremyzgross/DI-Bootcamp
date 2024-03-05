# Challenge 1

user_word = input("Feed me a word: ")
user_word_dict = {}
for index, word in enumerate(user_word):
    user_word_dict[word] = index
print(user_word_dict) 


# Challenge 2


# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# The key is the product, the value is the price
# WORK IN PROGRESS: 
wallet = "300"
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

items_purchase_propper = {}
for value in items_purchase.values():
    new_value = value.replace('$','')
    new_value = value.replace(',', '')
                              
    items_purchase_propper= value

print(items_purchase_propper)




# indented results: ["Bread", "Fertilizer", "Water"]

