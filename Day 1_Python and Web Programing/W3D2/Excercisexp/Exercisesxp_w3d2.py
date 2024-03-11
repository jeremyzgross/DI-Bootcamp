# #Excercise 1 cats


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Simease(Cat):
    def sing(self, sounds):
        return f'{sounds}'

all_cats=[Bengal('charlie', 5), Chartreux('fluffy', 6), Simease('kitty', 4)]

saras_cats = Pets(all_cats)

saras_cats.walk()

#Exercise 2 Dogs

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return(f'{self.name} is barking ')
    
    def run_speed(self):
        dog_running_speed = self.weight/self.age*2
        return dog_running_speed
    
    def fight(self, *other_dog):
        dog1 = self.run_speed()*self.weight
        dog2 = other_dog.run_speed()*other_dog.weight
        if dog1 > dog2:
            print(f'{self.name} won the fight')
        else:
            print(f'{other_dog.name} won the fight')


# benny = Dog('Benny', 5, 18)
# dakota = Dog('Dakota', 6, 100)
# st = Dog('St', 8, 200)
# benny.fight(dakota)

#Exercise 3 is in Exercise_3_Dogs




#Exercise 4 Family

'''
[
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]
'''
class Family:
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **child):
        members_dict = {}
        for key, value in child.items():
            members_dict[key] = value
        self.members.append(members_dict)
        if 'is_child' in members_dict and members_dict['is_child']:
            print(f"congrats {self.last_name} family on {members_dict['name']}'s birth")

    
    def is_18(self, name):
        #looping members list, looking for the correct member
        for member in self.members:
            # if we found the member
            if member['name'] == name:
                # the member is less than 18
                if member['age'] < 18:
                    return False 
                #the member is 18 or older
                else:
                    return True
        # we have looped through every member and not found a member with the name passed in        
        print('member not in family') 
                

    
    def family_presentation(self):
        print(self.members)


        

# #loop through 

# gross_family = Family('Gross')
# print('born')
gross_family.born(name='Jeremy', age=19, gender='male', is_child=False)
# print('family presentation')
# gross_family.family_presentation()
# print('born')
# gross_family.born(name='Casey', age=0, gender='male', is_child=True)
# print('family presentation')
# gross_family.family_presentation()

# gross_family.is_18('Jeremy')
        

#Exercise 5 : TheIncredibles Family

class TheIncredibles(Family):
    super
    def use_power(self, name):
        # loops through members list
        for member in self.members:
            # sees if name that was passed is member's name
            if member['name'] == name:
                try:
                    #checks if age is over 18
                    if member['age'] > 17:
                        #if it is, prints their power
                        print(member['power'])
                    else:
                        # if it is not, create an error called age error
                        raise Exception('age error')
                # catches error, and prints when error is triggered
                except Exception as e:
                    print(e)
                    print('Cannot access, they are under 18')
    
    def incredible_presentation(self):
        print(f'Here is our powerful family')
        super().family_presentation()


                




the_family = TheIncredibles('Incredibles')

the_family.born(name='Michael', age=1, gender='male', is_child=False, power='fly', incredible_name='MikeFly')
the_family.born(name='Sarah', age=32, gender='Female', is_child=False, power='read minds', incredible_name='SuperWoman')
the_family.born(name='JackJack', power='unknown power')

the_family.incredible_presentation()


