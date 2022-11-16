
![License](https://img.shields.io/github/license/aherrion25/true-link.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/aherrion25/true-link.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/aherrion25/true-link.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/aherrion25/true-link.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/aherrion25/true-link.svg?style=for-the-badge)
    
# True Link

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

This App helps the user build out a family tree. The user will also be able to edit and add family connections to each individual person in the family tree.

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://jquery.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

Create a new database called `prime_app` and create a user table

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



### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- Node.js
- PostrgeSQL
- Nodemon


### Installation

- npm install 
- npm run client 
- npm run server 

## Usage

1. create new user or login with existing user
2. click add family member
3. add new family member information and submit
4. clicking on existing family member shows details page and also allows user to add connections.
5. details page also allows user to edit the specific person when clicking edit button
6. When adding connections the corresponding connection will add the member to the family tree i.e. (parent will be above child, spouse will be next to each other)

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

## License

<a href="https://choosealicense.com/licenses/unlicense/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/unlicense.svg" height=40 />The Unlicense</a>

## Acknowledgements

I would first like to thank Chris Black and the Prime staff for give me the knowledge and tools to be successful. I will also like to thank the phrygian cohort for the support. Lastly, I will like to thank my family and friends for the support and understand and patience through all craziness while we venture through my time at Prime.

## Contacts

<a href="https://www.linkedin.com/in/https://www.linkedin.com/in/aubree-herrion/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:aubreeherrion@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>




