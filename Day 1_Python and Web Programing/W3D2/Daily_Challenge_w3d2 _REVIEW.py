# class Pagination:
#     def __init__(self, items=None, pagesize=10):
#         self.items = items
#         self.pagesize = pagesize
#         self.current_index = 0

#     def getVisibleItems(self):
#         current_page = self.items[self.current_index:self.current_index + self.pagesize]
#         print(current_page)
        
#     def nextPage(self):
#         if self.current_index < len(self.items):
#             self.current_index += self.pagesize
#         print(self.current_index)

class Pagination:
    def __init__(self, items, pagesize = 10):
        self.items = items
        self.pagesize = pagesize
        self.current_page = 1 #not in the argument, just for the internal use. We are not passing current page when initializing letter
        self.total_pages = len(self.items) // self.pagesize + 1 # two // rounds the math formula
    
    def getVisibleItems(self):
        '''get current items in page'''
        # self.current_page - 1
        start_index = (self.current_page-1) * self.pagesize
        stop_index = start_index + self.pagesize 
        print(self.items[start_index:stop_index])
    
    def nextPage(self):
        self.current_page += 1
        return self








alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

p.getVisibleItems()
p.nextPage().nextPage()
p.getVisibleItems()
# p.nextPage()
# p.getVisibleItems()
# p.nextPage()
# p.getVisibleItems()
