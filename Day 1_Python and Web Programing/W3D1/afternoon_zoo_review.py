class Zoo:
    def __init__(self, zoo_name, animals = None):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, *new_animal):
        if new_animal not in self.animals:
            self.animals.extend(new_animal)
        print(self.animals)
    
    def sort_animal(self):
        '''Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.'''
        self.animals.sort()
        groups = {}
        for animal in (self.animals):
            first_letter = animal[0]
            if first_letter not in groups:
                groups[first_letter] = [animal]
            else:
                groups[first_letter].append(animal)
        return groups
    
    def get_groups(self):
        groups = self.sort_animal=()
        groups_dict = {}
        for i, group in enumerate(groups):
            if len(group) > 1:
                new_group = {i+1 : groups[group]}
                groups_dict.update(group)
            else:
                single_animal = ''.join(group)
                {i+1 : single_animal}
        return groups_dict
        
        
        groups_dict = {i+1: groups[group] for i, group in enumerate(groups) if len(group) == 1: ''}
        return groups_dict
            






zoo_name = Zoo('Ramat Gan Safari')
zoo_name.add_animal('giraffe', 'cat', 'tiger', 'cheetah')
print(zoo_name.sort_animal())
