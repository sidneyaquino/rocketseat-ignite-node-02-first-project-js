<!-- BANK STATEMENTS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT'S TITLE -->
<a name="readme-top"></a>
<h1 align="center">
  <a href="#"> BANK STATEMENTS </a>
</h1>


<!-- PROJECT'S STATUS -->
<h4 align="center"> 
  Status: Finished
</h4>


<!-- TABLE OF CONTENTS DETAIL -->
<p align="center">
  <a href="#about-the-project">About</a> •
  <a href="#features">💻 Features</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#starting">Starting</a> •
  <a href="#license">:memo: License</a> •
  <a href="#contact">:mailbox_with_mail: Contact</a> •
  <a href="#acknowledgments">Acknowledgments</a>  
</p>


<!-- TABLE OF CONTENTS DETAIL -->
<details>
  <summary>Table of Contents Detail</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">:rocket: Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">💻 Features</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li>
      <a href="#starting">Getting Started</a>
      <ul>
        <li><a href="#install">🛠️ Installation Steps</a></li>
        <li><a href="#running">:zap: Running...</a></li>
	<li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#license">:memo: License</a></li>
    <li><a href="#contact">:mailbox_with_mail: Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

In this project, we will create a bank account management program. You will should add nodemon as a development dependency, configure the application with attach debug mode, work with dates and arrays, and use the uuid package.  

<a name="built-with"></a>
### :rocket: Built With
This project was developed with the following technology:

[![Node-JS][node-shield]][node-url]
[![Express-JS][express-shield]][express-url]
[![Javascript][js-shield]][js-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="features"></a>
## 💻 Features

1. **Bank Account**: 
   - Add an account; 
      - Do not register an account with an existing CPF;
   - Get customer account data
   - Update customer account data
   - Delete an account
      - Do not delete a non-existent account.
2. **Deposit**:
   - Make a deposit;
      - Do not make a deposit to a non-existing account. 
3. **Draw**:
   - Make a withdrawal;
      - Do not withdraw from a non-existing account;
      - Do not make a withdrawal when the balance is insufficient.
4. **Statement**:
   - Search the statement;
   - Search the customer's statement by date;
   - Do not search for a statement in a non-existent account.
5. **Balance**:
   - Consult the Balance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Prerequisites

**ACCOUNTS** : array
Name        |Type
:-----------|:-----
id          |uuidv4
document    |string
name        |string
statements  |array

**STATEMENTS** : array
Name      |Type
:---------|:-------
created_at|datetime
reference |string
value     |number

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Requirements

For this project you will need:
- NodeJS LTS (18.12.0+);
- Yarn LTS (1.22.19+).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="starting"></a>
## Getting Start

To get a local copy, setting up and running the project, follow these simple steps.

<a name="install"></a>
### 🛠️ Installation Steps
1. Clone the repository
```Bash
git clone https://github.com/sidneyaquino/rocketseat-ignite-node-02-first-project-js
```
2. Go into the project directory

3. Install dependencies (packages):
```bash
yarn install
```

<a name="running"></a>
### :zap: Runnig...
In the projet folder execute the commands:

1. Run application in production mode:
```bash
yarn prd
```
2. Run application in development mode:
```bash
yarn dev  # nodemon and debug.
```

### Usage
- **Account Collection**: get/read, post/create, put/update and delete 
- **Statement Collection**: get/list_byAccount, get/list_byDate, get/read_balance, post/create_credit and post/create_debit

Import the `Project Workspace` into your `Postman`, use the following link: [postman-workspace](https://www.postman.com/sidneyaquino/workspace/rocketseat-ignite-node-02-first-project-js)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="license"></a>
## :memo: License
This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="contact"></a>
## :mailbox_with_mail: Contact
Made by *Sidney Aquino*, **get in Touch!** 
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments
>[Rocketseat Ignite - Node.JS Bootcamp](https://app.rocketseat.com.br/ignite/node-js?&) 

Build scalable and simple architectures for the web with `Node.JS` using `Javascript`, a flexible and popular language. Through a hands-on methodology based on the pillars of focus, practice, and group, you will prepare for real-world challenges and develop the behavioral skills to excel in the marketplace.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[js-shield]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[js-url]: https://en.wikipedia.org/wiki/ECMAScript#13th_Edition_%E2%80%93_ECMAScript_2022
[node-shield]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org
[express-shield]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express-url]: http://expressjs.com/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://de.linkedin.com/in/sidneydeaquino