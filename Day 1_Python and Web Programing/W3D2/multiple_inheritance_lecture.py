class Alien():
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        print(self.name, 'is flying!')

    def sleep(self):
        print("Aliens don't sleep")

class Animal():
    def __init__(self, name):
        self.name = name

    def sleep(self):
        print("zzzZZZZZ")

class Dog(Animal):
    def bark(self):
        print("{} barked, WAF !".format(self.name))


class AlienDog(Dog, Alien):#if you want both you need to called the super and the class._init__
    def __init__(self, name):
        super().__init__(name)
        Alien.__init__(name, planet)
    def bark(self):
        print("{} barked, 0ul10ul0u (that's how aliens dogs bark..) !".format(self.name))

alien_dog = AlienDog('rex', 'jupiter')

print(alien_dog.name, alien_dog.planet)

alien_dog.sleep() #prints 'aliens dont sleep, becaue Class Alien is the first it is inheriting, 



#if you want both you need to called the super and the class._init__