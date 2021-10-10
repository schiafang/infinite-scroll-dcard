# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br>
<br>

### `Download or Clone`

```
git clone git@github.com:schiafang/infinite-scroll-dcard.git && cd infinite-scroll-dcard
```

<br>

### `Start CORS-Server`

```
cd cors-server && npm install && node App.js
```

Keep the server listening.

### `Run`

Open new terminal

```
npm install && npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br>
<br>
<br>

# Structure

```
將頁面與 API 功能拆分為 pages 與 containers，App.js 預設為主要架構頁面，首頁熱門文章透過 Home.js container 來拉取資料，底下的文章預覽拆出放入共用模組 components 中，若其他頁面也有預覽文章需求可重複使用。架構是以 MVC 為基礎，拆分為 pages, containers, components 來管理資料的控制調度與顯示。Fetch 資料的 API 功能包裝成 hooks function 放入 utilities 與其他頁面共用，並透過紀錄回傳 loading 狀態來避免重複拉取資料。
```
