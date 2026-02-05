# The games asks summation questions from the user and 
import random

def game():
    ranNum1 = random.randint(1,50)
    ranNum2 = random.randint(1,50)

    answer = int(input(f"Write the sum of {ranNum1} and {ranNum2} : "))
    if(answer == (ranNum1+ranNum2)):
        print("Correct Answer!")
        return 10
    else:
        print("Wrong Answer!")
        return -20
score = 0
while(True):
    score+=game()
    print(f"Your Score = {score}")
    contGame = input("Press Y to continue, else to exit : ")
    if(contGame != "y" and contGame !="Y"):
        print("Game Ended.")
        break

file = open("Hi-score.txt", "r")
scoreInFile = file.read().strip()
file.close()

if(scoreInFile == ""):
    scoreInFile = 0
else:
    scoreInFile = int(scoreInFile)

if(score>scoreInFile):
    print(f"Previous High Score : {scoreInFile}")
    print(f"Your Score = {score}")
    print("Yehaaa! We have a new high score")
    file = open("Hi-score.txt", "w")
    file.write(str(score))
    file.close()