
#멤버 정보를 담은 딕셔너리들을 포함하는 리스트
MonstarX = [
    {"name" : "셔누", "age" : "32", "position" : "vocal"},
    {"name" : "민혁", "age" : "31", "position" : "vocal"},
    {"name" : "기현", "age" : "31", "position" : "vocal"},
    {"name" : "형원", "age" : "31", "position" : "vocal"},
    {"name" : "주헌", "age" : "30", "position" : "rap"},
    {"name" : "창균", "age" : "28", "position" : "rap"}
]

#for 문에 포함되지 않게 맨 위 첫줄에 소개문 입력
print("몬스타엑스 멤버 정보입니다. \n")

#MonstarX 리스트의 각 멤버에 대한 반복 작업 수행 
for MonstarX in MonstarX:
    print("이름:", MonstarX["name"]) #멤버의 이름 출력
    print("나이", MonstarX["age"]) #멤버의 나이 출력
    print("포지션", MonstarX["position"]) #멤버의 포지션 출력
    print() #빈줄 입력 