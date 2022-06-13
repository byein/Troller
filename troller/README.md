# Commit Type
**라벨을 사용해주세요!**

* feat: 새로운 기능 추가
* fix: 버그 수정
* docs: 문서 수정
* style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
* refactor: 코드 리팩토링
* test: 테스트 코드, 리팩토링 테스트 코드 추가
* chore: 빌드 업무 수정, 패키지 매니징


# 브랜치 네이밍 
* git checkout -b commitType/#issueNumber/issueTitle(simplify)
* 예시 => git checkout -b feat/#12/loginComponents

# Commit 메세지로 이슈 자동종료하기
* git commit -m '메세지 **close #issueNumber1, #issueNumber2, #issueNumber3**' => **master(main) 브랜치 MR승인시 해당이슈 자동종료** 
* https://webruden.tistory.com/503 참고