# Exercise 8 

data = [
    {"question": "What is Baby Yoda's real name?",
     "answer": "Grogu"},
     {"question": "Where did Obi-Wan take Luke after his birth?", 
      "answer": "Tatooine"}
]
# Tasks:
# ask one question
# store answer and see if it matched answer key



def check_answers():
    # Setup vairables for tracking 
    number_correct_answers = 0
    number_incorrect_answers = 0
    list_wrong_answers = []
    list_correct_answers = []


    print("Let's start the Star Wars Quiz")
    question_for_player = ''
    for dictionary in data:
        question = dictionary.get("question")
        question_for_player = ("Question:", question)
    players_answer = input(question_for_player)


check_answers()



# def answers_number():
#     '''prints the number of answers the user got correct and incorrect'''
#     if 




print("Lets play a q&a game! :)")
for question_item in data:
    print(question_item['question'])
    players_answer = input(question_for_player)
    if players_answer.lower() == question_item['answer'].lower():
        number_correct_answers = number_correct_answers + 1
        list_correct_answers.append(question_item)
    else:
        number_incorrect_answers = number_incorrect_answers + 1
        list_wrong_answers.append(list_correct_answers)

print(f"Hey there boy you got: {len(list_correct_answers)} right and {len(list_wrong_answers)} wrong")

# INSERT BONUS HERE

number_correct_answers = 0
number_incorrect_answers = 0
list_wrong_answers = []
list_correct_answers = []