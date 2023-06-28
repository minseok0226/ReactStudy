

###  1. 반복문 실행  ### 

#초기 number 변수 0으로 설정 
number = 0

#number 가 10 이하인 동안 반복 실행 
while number < 10:
    print("실행 숫자:", number)
    number += 2 #number 변수를 2씩 증가 



###  2. if문과 같이 반복문 실행  ###

#초기 num 변수 1로 설정 
num = 1

#num이 20 이하인 동안 반복 실행 
while num <=10:
    if num % 2 == 0:
        print( num , "은(는) 짝수 입니다.")
    else:
        print(num , "은(는) 홀수 입니다.")
    num += 1