#attempt 

# class Door():
#     def __init__(self, is_opened):
#         self.is_opened = is_opened
    
#     def open_door(self):
#         print(f'Door {self.is_opened}')
#         pass

# class BlockedDoor(Door):
#     def __init__(self, is_opened):
#         super().__init__(is_opened)
    
#     def is_closed(self):
#         print(f' {self.is_closed}')
    
#     def i


        
    
# door1 = BlockedDoor(open, closed)

#solution

class Door():
    def __init__(self, is_opened = True) -> None:
        self.is_opened = is_opened
    
    def open_door(self):
        self.is_opened = True
        print('Door is opened')

    def close_door(self):
        self.is_opened = False
        print('Door is closed')

class BlockedDoor(Door):
    def open_door(self):
        raise Exception('Cannot Open a Blocked door')
    def close_door(self):
        raise Exception('Cannot Close a Blocked door')

# door1 = Door(is_opened=False)
# door1.close_door()

door2 = BlockedDoor()
door2.close_door()
