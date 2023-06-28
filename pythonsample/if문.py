
###  IF 문  ###

""" 1. 원뿔의 부피와 겉넓이 계산 하는 방법 """ 

    #반지름 입력
rad = int(input("반지름을 입력하세요 : "))
if (rad > 0 ):
    #높이 입력 
    hei = int(input("높이를 입력하세요 : "))
    #부피와 겉넓이 계산 
    vol = 1/3 * 3.14 * rad ** 2 * hei
    suf = 3.14 * rad ** 2 + 3.14 * rad * hei
    print("원뿔의 부피는" , vol, "입니다.")
    print("원뿔의 겉넓이는" , suf, "입니다.")

    #반지름 입력값이 0이나 음수일 경우 종료
else:
    if (rad == 0):
        print("반지름의 입력값이 0 입니다.")
    else:
        print("반지름의 입력값이 음수 입니다.")

""" 2. 더 큰 수와, 홀수 짝수 구별 하는 법 """

#수 입력 받기
number1 = int(input("number1 을 입력하세요."))
number2 = int(input("number2 를 입력하세요."))

#number1이 큰 경우
if number1 > number2:
    print("number1 이 더 큽니다.")

#입력 받은 수에 2를 나눈 나머지가 1이면 홀수
    if number1%2 == 1:
        print(number1, "홀수 입니다.")
    else:
        print(number1, "짝수 입니다.")

#number2가 큰 경우
else:
    print("number2가 더 큽니다.")

#입력 받은 수에 2를 나눈 나머지가 1이면 홀수
    if number2%2 == 1:
        print(number2, "홀수 입니다.")
    else:
        print(number2, "짝수 입니다.")
