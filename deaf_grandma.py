import re

goodbye_count = 0;

def deaf_grandma():
  answer = input("Answer Grandma!");
#   lower = answer.lower();
  global goodbye_count
  nothing = ''

  if answer == nothing:
    print("WHAT?!");
    deaf_grandma();
  elif re.search("[a-z]", answer):
    print("SPEAK UP, KID!");
    deaf_grandma();
  elif re.search("[A-Z]", answer) and answer != "GOODBYE!":
    print("NO, NOT SINCE 1946!");
    deaf_grandma();
  elif answer == "GOODBYE!" and goodbye_count == 0:
    goodbye_count = 1;
    print("LEAVING SO SOON?")
    deaf_grandma()
  elif answer == "GOODBYE!" and goodbye_count > 0:
    print("LATER SKATER!");
  


deaf_grandma()
