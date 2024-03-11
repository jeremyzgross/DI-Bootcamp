class Pagination:
    def __init__(self, items=None, pagesize=10):
        self.items = items
        self.pagesize = pagesize
        self.current_index = 0

    def getVisibleItems(self):
        current_page = self.items[self.current_index:self.current_index + self.pagesize]
        print(current_page)
        
    def nextPage(self):
        if self.current_index < len(self.items):
            self.current_index += self.pagesize
        print(self.current_index)
    
   






alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
