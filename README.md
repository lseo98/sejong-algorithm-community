# 세종 알고리즘 커뮤니티

## 💡 프로젝트 소개

> 이 프로젝트는 알고리즘 학습의 필요성은 인식하면서도 꾸준한 실천이 어려운 현실을 해결하고자 기획되었습니다.  
> 백준 사이트와 연동된 기능들을 통해, **세종대학교 전체 및 학과 내 티어 순위와 누적 문제 풀이 수 기반의 랭킹 시스템**을 제공하며,  
> 동시에 **일일 퀘스트, 도장, 카드 보상 시스템**을 구현함으로써, 사용자가 자발적으로 알고리즘 문제를 꾸준히 풀 수 있도록 유도하고,  
> **학습 동기 부여와 상호 자극을 통해 학습 지속성을 높이는 커뮤니티 플랫폼의 기능을 코드로 실현**하고자 했습니다.

---

## ⚠️ 주의사항

- 외부 API에 의존한 서비스이므로, 외부 API에 응답이 원활하지 않을 시 네트워크 오류 발생 가능

---
## ✨ 주요 기능

> 사용자는 로그인 이후 다양한 기능을 통해 백준 알고리즘 학습 활동을 추적하고, 보상을 받으며, **동료들과의 경쟁 및 커뮤니티 참여**를 통해 학습을 지속할 수 있습니다.
> 

### 1. 🔐 사용자 인증

- 회원가입 시 이메일, 닉네임, 학번, 학과, 백준 ID를 등록할 수 있습니다.
- 로그인 후에는 랭킹, 퀘스트, 카드 보상 등 모든 기능을 이용할 수 있습니다.
- 로그아웃 시 세션이 초기화되며, 개인 정보 접근이 제한됩니다.


### 2. 📊 백준 정보 연동

- 본인의 백준 티어, 문제 풀이 수, 랭킹 등을 자동으로 불러올 수 있습니다.
- 언제든지 ‘정보 새로고침’ 버튼을 통해 최신 데이터로 동기화할 수 있습니다.


### 3. 🏅 랭킹 확인

- 세종대 전체, 학과별 랭킹에서 자신의 위치를 확인할 수 있습니다.
- 나의 티어, 문제 수, 상위 퍼센트가 시각적으로 표현되어 동기를 부여합니다.


### 4. 📅 오늘의 퀘스트

- 매일 백준에서 추천된 문제를 퀘스트로 받아볼 수 있습니다.
- 문제를 풀면 자동으로 완료 처리되며, 도장을 획득하게 됩니다.


### 5. 👣 출석 도장

- 퀘스트 완료 시 도장이 찍히며, 최근 1주일간의 출석 현황을 한눈에 확인할 수 있습니다.
- 요일별 우주 발자국 UI로 꾸준한 참여를 직관적으로 확인할 수 있습니다.


### 6. 🃏 카드 보상 & 카드첩

- 도장을 7개 모으면 **중복 없이 하루에 1장의 카드**가 자동으로 지급됩니다.
- 카드첩에서 지금까지 받은 카드를 앨범 형식으로 확인할 수 있습니다.
- 각 카드는 고유한 이미지, 설명, 제목으로 구성되어 수집의 재미를 제공합니다.


### 7. 👤 마이페이지

- 내 학과, 학번, 닉네임, 백준 ID, 랭킹, 연속 출석 일수 등의 정보를 확인할 수 있습니다.
- 프로필 사진 업로드 및 닉네임 수정도 가능합니다.


### 8. 📢 자유 게시판

- 글과 댓글을 자유롭게 작성하고 소통할 수 있습니다.
- 작성자는 본인의 게시글과 댓글을 수정하거나 삭제할 수 있습니다.
- 최근 게시글은 홈 화면에 미리보기로 표시되어 쉽게 접근할 수 있습니다.


### 9. 🏠 메인 홈 화면

- 오늘의 퀘스트, 출석 도장, 카드 보상 상태, 내 백준 요약 정보, 최근 게시글 등을 한눈에 확인할 수 있습니다.
- 우주 테마의 시각적 요소와 애니메이션이 적용되어 몰입감 있는 사용자 경험을 제공합니다.
---

## 📁 프로젝트 구조
```
algo-community/
├─ .gitignore
├─ pnpm-workspace.yaml # 워크스페이스 선언
├─ pnpm-lock.yaml
├─ package.json # 루트 스크립트 / 워크스페이스 목록
├─ jsconfig.json
├─ .nvmrc # Node 버전(22) 지정
├─ client/ # React(Vite)
│ ├─ public/
│ ├─ src/
│ └─ package.json
└─ server/ # Express 5 API
├─ src/
└─ package.json
```

## 🚀 설치 및 실행 방법

### 1. MariaDB 설치

- **버전**: MariaDB 11.7.2  
- **다운로드**:  
  https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.7.2&os=windows&cpu=x86_64&pkg=msi&mirror=blendbyte

---

### 2. 저장소 클론

```bash
git clone https://github.com/lseo98/sejong-algorithm-community.git
cd sejong-algorithm-community
```

---

### 3. Node.js 설치

#### macOS/Linux (nvm 사용)

```bash
# nvm 설치 (Homebrew 기준)
brew install nvm
mkdir -p ~/.nvm

# 셸 설정 파일에 아래 내용 추가 (예: .bashrc, .zshrc)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 새 터미널 열고 다음 실행
nvm install     # .nvmrc 기준 버전 설치
nvm use
```

#### Windows (단일 Node 설치)

```powershell
# PowerShell (관리자 권한) 실행 후 아래 명령 실행

# Git 설치
winget install --id Git.Git -e

# Node 22 LTS 설치
winget install --id OpenJS.NodeJS.LTS -e

# 또는 수동 설치: https://nodejs.org/ko 에서 v22.15.0 LTS 다운로드
```

---

### 4. 의존성 설치 (공통)

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
```

---

### 5. 환경 변수 설정

server/ 경로에 .env 파일 생성 후 다음 예시와 같이 작성

```bash
DATABASE_URL="mysql://root:1234@localhost:3306/sejong-algorithm"
PORT=4000
SESSION_SECRET="secret"
```

- DATABASE_URL 부분
    - root: 자리에는 mariadb 해당 사용자 id
    - 1234 자리에는 mariadb 해당 사용자 비밀번호
    - 3306 자리에는 mariadb 포트 번호
    - sejong-algorithm 자리에는 만들고 싶은 데이터베이스명
- PORT 부분: 원하는 서버 포트 번호
- SESSION_SECRET 부분: 원하는 세션 인증 문자열

### 6. Prisma 명령어 실행

```bash
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed
```

---

### 7. 서버 실행

```bash
pnpm dev
```

> ⚠️ 프론트엔드 서버는 반드시 `http://localhost:5173/` 에서 실행되어야 합니다.

---

## 🛠 사용 기술 스택

### 🎨 프론트엔드

- **React (with Vite)** – 컴포넌트 기반 UI 구성  
- **CSS** – 사용자 정의 스타일링  
- **Recharts** – 데이터 시각화(차트)  
- **Axios** – API 통신  
- **React Router Dom** – 클라이언트 사이드 라우팅  
- **CodeMirror** – 코드 에디터 UI 구성  

---

### 🔧 백엔드

- **Node.js (Express)** – API 서버 및 라우팅 처리  
- **Prisma ORM** – MySQL 데이터베이스와의 연동  
- **bcryptjs** – 비밀번호 암호화  
- **express-session** – 세션 기반 로그인 인증  
- **cors** – CORS 정책 처리  
- **dotenv** – 환경변수 설정  
- **node-cron** – 스케줄링 작업 (ex. 매일 퀘스트 초기화 등)  
- **multer** – 파일 업로드 처리 (프로필 이미지 등)  
- **date-fns** – 날짜 계산 및 포맷  
- **Axios** – 서버 간 API 요청  

---

### 🗄 데이터베이스

- **MySQL** – 사용자, 문제, 퀘스트, 카드 등 주요 데이터 저장

---

### 📦 패키지 관리

- **pnpm (Workspaces 포함)** – 프론트/백엔드 통합 패키지 관리

---

### 🔁 버전 관리

- **Git**, **GitHub** – 소스 코드 형상 관리 및 협업

---

### 🧹 코드 품질 및 포맷팅

- **ESLint**, **Prettier** – 코드 스타일 통일 및 자동 정리

---

### 🧪 개발 유틸리티

- **Concurrently** – 서버와 클라이언트를 동시에 실행  
- **Nodemon** – 서버 코드 변경 시 자동 재실행  
- **Cross-env** – OS 환경 차이에 맞춘 환경변수 세팅  

