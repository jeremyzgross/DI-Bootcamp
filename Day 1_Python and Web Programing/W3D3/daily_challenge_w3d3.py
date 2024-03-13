class Circle:

    def __init__(self, radius=0, diameter=0):
        self.radius = radius
        self.diameter = radius *2
        # self.diameter = diameter
    
    @classmethod # seperate arguments from the init
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius *2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius = diameter/2, diameter = diameter)
    
    def area(self):
        area = 3.14 *self.radius**2
        return area
    

    def __str__(self):
        pass
    def __add__(self, other):
        pass
    def __gt__(self, other):
        pass
    def __eq__(self, other):
        pass

circle1 = Circle.from_radius(10)
circle1 = Circle.from_diameter(50)
print(circle1.diameter)
print(circle1.radius)
print(circle1.area())