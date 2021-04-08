# Chatbot NodeJS - AdaKerja

### Tools
_JavaScript, Node, MySQL_

### Preconfigure
- Import Database in db_backup folder, name of database **same as file name (chatbot)**
- Just type **npm install**

### How to Run
1) Open terminal **in root of project**
2) Type **npm start**
3) Open **http://localhost:3000** as **_MAIN WEB_** and _BASEURL_
4) For API GET (method) Message By ID, just access, **_BASEURL_ + _api/messages/:id_**
Example: _http://localhost:3000/api/messages/1 (id of message equals 1)_
5) For API DELETE (method) Message By ID, just access, **_BASEURL_ + _api/messages/:id_**
Example: _http://localhost:3000/api/messages/1 (id of deteled message equals 1)_

### Note
- When Browser is reloaded, the new id of user will generated
- Dictionary for Yes answers ``('yeah', 'ok', 'yup', 'yes', 'sure', 'ya')``
- Dictionary for No answers are except **yes** answers 

#### About
- Writter: Abdul Salam
- Email: abdulsalam121196@gmail.com
