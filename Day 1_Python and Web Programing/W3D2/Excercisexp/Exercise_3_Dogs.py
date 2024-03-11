from Exercisesxp_w3d2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.train=True

    def play(self, *dogs):
        dog2 = dogs.name()
        print(f'{self.name},{dog2} all play together') #couldnt get all dogs together
    
    def do_a_trick(self):
        move_list = [f'{self.name} does a barrel roll', f'{self.name} stands on his back legs', f'{self.name} plays dead']
        random_trick = random.choice(move_list)
        if self.train == True:
            print(random_trick)
        else:
            print('bad dog')
        



benny = PetDog('Benny', 5, 18)
dakota = Dog('Dakota', 6, 100)
st = Dog('St', 8, 200)
benny.train()
benny.do_a_trick()

benny.play(dakota)

