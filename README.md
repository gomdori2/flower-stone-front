# 2025-05-01 

## react 설치 및 필요없는 파일 삭제_디펜던시 포함.

## 설치
    router-dom
    emotion
    axios
    eslint
    nomalize.css
    eslint
    prettier

## 그외 설정해줘야 할 부분들 설정
    eslint
    prettier
    디렉토리 구조 잡기


# 2025-05-22

## 프론트
    - 나중에 common에다가 정리 할 예정
        - 리액트에 컴포넌트 폴더에 파일업로드 쪼개서 넣음.
            - css 수정 후 전체적으로 이거만 사용할듯 함.
        
        - 파일다운로드
            - db 설정 후 변경 예정 일단 다운로드 테스트 완

    - package.json에 프록시 설정 시 오류가 남.
        - setupProxy.js로 설정 후 해결
        - 이유 검색 시 ip가 외부랜선 일 경우 undefined로 넘어와서 문제가 생긴다는데 집 ip가 와이파이 및 tv에 연결 되는 랜이라 그런거 같음. ip도 계속 바뀌어서 google sql 쪽도 프록시 설정 나중에 해야될 듯 함
        