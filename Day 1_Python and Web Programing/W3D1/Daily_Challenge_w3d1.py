class Farm():
    def __init__(self, farm_name = '',):
        self.farm_name = print(f'{farm_name}\'s farm')
        self.animals = {}
    
    def add_animal(self, animal, quantity=0):
        if animal in self.animals:
            self.animals[animal] += quantity
        else:
            self.animals[animal] = quantity  
        print(f"{animal}: {self.animals[animal]}") 


     
    def get_info(self):
        print('E-I-E-I-0!')
    
    def get_animal_types(self):


    

        
    
    
    



macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep') # could not figure out how to add sheep
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

macdonald.get_animal_types

'''
Requested output:

McDonald's farm (DONE)

cow : 5
sheep : 2
goat : 12

E-I-E-I-0! (DONE)

'''