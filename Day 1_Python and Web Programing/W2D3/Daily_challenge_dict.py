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

wallet = 100
items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

items_in_budget = []
for key, item in items_purchase.items():
    new_number = ''
    for char in item:
        if char != '$' and char != ',':
            new_number = new_number + char
    new_number = int(new_number)
    if new_number >= wallet:
        print('nothing')
    else:
        items_in_budget.append(key)

print(items_in_budget)


# indented results: ["Bread", "Fertilizer", "Water"]

