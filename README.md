
# True Link
This App helps the user build out a family tree. The user will also be able to edit and add family connections to each individual person in the family tree.

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerators.net/](https://passwordsgenerators.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## ERD
[True Link ERD](https://dbdesigner.page.link/1TusVJ6rPE9sxAk87)

## ScreenShots
## Home Page
![Screen Shot 2022-11-01 at 2 07 57 PM](https://user-images.githubusercontent.com/70453268/199317774-9f7dd0d2-dea6-4e02-8ae0-4b9b8b5688d5.png)
## Add Family Member Page
![Screen Shot 2022-11-01 at 2 08 21 PM](https://user-images.githubusercontent.com/70453268/199317826-002a6951-27f4-401f-9919-bf5c39848d2d.png)
## Details Page
![Screen Shot 2022-11-01 at 2 12 23 PM](https://user-images.githubusercontent.com/70453268/199318480-d17bc392-72d1-4b8e-bddc-c5a2dc082c70.png)
## Edit Family Member Page
![Screen Shot 2022-11-01 at 2 12 55 PM](https://user-images.githubusercontent.com/70453268/199318548-bf5c1213-cbb8-473f-a59c-b6c30012725d.png)




