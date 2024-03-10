# Exercise 1: Cats #NEED TO REVIEW THIS 

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat_1 = Cat('Tabby', 1)
cat_2 = Cat('Gingi', 2)
cat_3 = Cat('Lynx', 3)

# REVIEW THIS FUNCTION CONSTRUCTION
def find_oldest_cat(*cats):
    oldest_cat = None
    max_age = 0
    for cat in cats:
        if cat.age > max_age:
            max_age = cat.age
            oldest_cat = cat
            print(oldest_cat)
    return oldest_cat

oldest_cat = find_oldest_cat(cat_1, cat_2, cat_3)

if oldest_cat:
    print(f'the oldest cat is {oldest_cat.name} and they are {oldest_cat.age}')


# Exercise 2 : Dogs
    
class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
    
    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        print(f'{self.name} jumps {self.height * 2}cm high!')

davids_dog = Dog('Rex', 50)
sarahs_dog = Dog('Teacup', 20)
davids_dog.bark()
davids_dog.jump()

print(sarahs_dog.name)
print(sarahs_dog.height)

sarahs_dog.bark()
sarahs_dog.jump()
    
if sarahs_dog.height > davids_dog.height:
    print(f'{sarahs_dog.name} is bigger')
else:
    print(f'{davids_dog.name} is bigger')

    
# Exercise 3 : Who’s The Song Producer?

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for lyric in self.lyrics:
            print(lyric)

stairway = Song(["There's a lady who's sure", "all that glitters is gold", "and she's buying a stairway to heaven", "FOR TEST"]) #for test to see if it will work for more lyrics


stairway.sing_me_a_song()




#Exercise 4 : Afternoon At The Zoo

class Zoo:
    def __init__(self, zoo_name, animals = None):
        self.zoo_name = zoo_name
        if animals is None:
            self.animals = []
        else:
            self.animals = animals

    def add_animal(self, *new_animal):
        for animal in new_animal:
            if animal not in self.animals:
                self.animals.append(animal)
        
    
    def get_animals(self):
        print(self.animals)

    def sell_animal(self, *animals_sold):
        for animal in animals_sold:
            if animal in self.animals:
                self.animals.remove(animal)

    def sort_animal(self): #sorts the animals in alphabetical order #adds an animal to a dictionary by first letter
        sorted_animals =[]
        animals_dict = {}
        for animal in self.animals:
            sorted_animals.append(animal)
            sorted_animals.sort()
        for index, animal in enumerate(sorted_animals):
            animals_dict[index + 1] = animal
        print(animals_dict) #could not figure out how to sort animals by first letter
    


zoo_name = Zoo('Ramat Gan Safari')
giraffe = Zoo('Ramat Gan Safari', "giraffe")

zoo_name.add_animal('giraffe', 'cat', 'tiger', 'cheetah')
zoo_name.get_animals()
zoo_name.sell_animal('cat')
zoo_name.sort_animal()