'''
       ___iiiii___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~

'''
from datetime import date

def birthday_age():
    user_birthday = input(f'Please input your birthday in this format with / : MM/DD/YYYY:')
    month, day, year = map(int, user_birthday.split('/'))
    user_birthday = date(year, month, day)
    today = date.today()
    age = today.year - user_birthday.year - ((today.month, today.day) < (user_birthday.month, user_birthday.day))
    # print(age)
    return age 


def candle_number(age):
    str_age = str(age)
    return(int(str_age[-1]))


def display_cake():
    age = birthday_age()
    num_candle = candle_number(age)
    cake = (f'   ___{'i' * num_candle}___\n'
    f'  |:H:a:p:p:y:|\n'
    f'__|___________|__\n'
    f'|^^^^^^^^^^^^^^^^^|\n'
    f'|:B:i:r:t:h:d:a:y:|\n'
    f'|                 |\n'
    f'~~~~~~~~~~~~~~~~~~~\n')
    print(cake)



def main():
    display_cake()
    

if __name__ == "__main__":
    main()

