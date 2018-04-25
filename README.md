# Online Store Prototype

We used **nodejs** with **Sequelize**, **My SQL**, **JQuery**, **Midtrans**, for payment integration, and **Mailtrap**, for fake e-mail target, for this online store prototype.

## Installations

- Clone this Git Repository.
- Open the Online Store Directory. ```cd Online-Store-Prototype```
- Create  mailtrap account.
- Create midtrans account.
- rename the ```.env.example``` in the Online_Store_Prototype directory into ```.env``` and edit the contents.
```
DB_HOST=localhost
DB_DATABASE=Your_Database
DB_USER=Database_Username
DB_PASS=Database_Password
M_AUTH=Midtrans_Server_Key
MT_USER=Mailtrap_Ethereal_User_Name
MT_PASS=Mailtrap_Ethereal_Password
MT_MAIL=Mailtrap_Email
```
- Midtrans Server Key should be converted first into base64 encode format. ```https://base64encode.org``` could help you with it.


## Usage

For basic usage, we should first create fake tables contents by using following command:
```
npm run migrate && npm run seed
```
Then run the server with 
```
npm start
```

This prototype is focused on server-side, so it's still missing some client-side features. For this version, we could simulate user register, login, and purchasing some items.
Default URL is ```http://localhost:3000/```.
