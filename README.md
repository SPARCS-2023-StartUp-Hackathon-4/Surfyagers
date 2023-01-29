# [TEAM L] Surfyagers

새로운 사회에 대한 열망은 단지 프로덕트를 개발하는 사람만의 것이 아닙니다.
OFUTU는 더 나은 사회에 대한 소비자들의 염원을 반영하고 증폭하여 소비 트렌드를 만들 수 있는 MZ세대의 미닝아웃(Meaning Out)을 위한 참여형 가치소비 플랫폼 입니다.

가치소비 브랜드 및 제품, 그리고 관련 노하우를 공유할 수 있는 참여형 가치소비 플랫폼인 오푸투의 두가지 주요 기능은 다음과 같습니다.
- 가치소비를 하는 사용자가 직접 사용해본 제품의 정보 및 사용 후기를 업로드 할 수 있는 기능
- 지역별 가치소비 관련 오프라인 스토어들을 큐레이션 하여, 우리 주변의 오프라인 공간에서도 가치있는 라이프스타일 누릴 수 있도록 도와주는 기능

## 프로젝트에서 사용한 기술

본 Repositorey는 Backend폴더와 Web/OFUTU폴더 안에 있는 `package.json`에 있는 오픈소스 패키지를 사용하였습니다.

또한 Pods안에 있는 오픈소스 패키지를 사용하였습니다.

## Dev Server 실행 방법

저희는 nodejs는 pnpm을 이용하여 환경을 세팅하였습니다.  
Backend를 띄우기 전에 
1.`.init.env`파일을 규격에 맞추어 바꾸어주시고 `.env`파일로 바꾸어 주시기 바랍니다.
2. mysql에 `ofutu`라는 Database를 생성합니다.
3.  `./Backend/sql`폴더 안에 있는 `init.sql`을 실행합니다.
4. `./Backend/sql`에 있는 모든 데이터를 넣어주시기 바랍니다.  

```bash
# Backend서버
$ cd ./Backend && pnpm install
$ nodemon index.js

# FrontEnd
$ cd ./Web/OFUTU && pnpm install
$ pnpm run dev
```

또한 iOS를 이용하기 위해서 맥북과 Xcode가 필요합니다. 본 git의 root폴더에서 파일을 열어 확인할 수 있습니다.

## 환경 변수 및 시크릿

Backend에서 Database와 S3버킷을 사용하기 위해 환경 변수를 사용하였습니다.  
환경변수의 이름과 요소는 `./Backend/.init.env`로 확인할 수 있습니다.

```
# .init.env
AWS_SECRET_KEY=""
AWS_ACCESS_KEY=""
AWS_REGION=""
MYSQL_HOST=localhost
MYSQL_PASSWD=root
```

## 기타
해커톤 나오려고 광주에서 올라온 서피져스 팀 입니다~
