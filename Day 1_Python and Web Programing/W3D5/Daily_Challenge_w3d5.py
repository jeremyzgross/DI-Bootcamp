'''
1) a class is used to make objects. It is generarlly made up of at minimum an __init__
and one or many Methods. 

2) an instance is an object that utilizes a class with it's own set of attributes

3)Encapsulation allows for the programmer of the class to make methods and objects
harder to change by another programmer. 

4)Abstraction in programing allows only relevant data about object to be exposed

5) Inheritance allows other classes to 'inherit' properties from another class. 
A class that inherits properties from another class is called a child class

6) Like inheritance but inheriting from multiple different classes 

7)Polymorphism occurs when the same method produce different results for objects depending on the context.  
You can have a method do different things depending on which class the object is using

8) MRO is when you have conflicting methods from different classes.
 It is resolved based on which method is higher in lineage in the parent-child inheritance
'''

import random

class Card:
    values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
        self.cards = []
        for suit in Card.suits:
            for value in Card.values:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        random.shuffle(self.cards)


    # def deal():
    #     pass


my_deck=Deck()

my_deck.shuffle()

for i in range(5):
    print(f"Card {i+1}: {my_deck.cards[i].value} of {my_deck.cards[i].suit}")