<a name="readme-top"></a>
<h1 align="center">
  <a href="#"> Bank Statements </a>
</h1>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#built-with">Built With</a> •
  <a href="#getting-start">Getting Start</a> •
  <a href="#acknowledgments">Acknowledgments</a> •
  <a href="#author">Author</a> •
  <a href="#user-content-license">License</a>
</p>



## About

In this project, we will create a bank account management program. You will should add nodemon as a development dependency, configure the application with attach debug mode, work with dates and arrays, and use the uuid package.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>


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



<a name="built-with"></a>
## :rocket: Built With
This project was developed with the following technology:
- `Node.JS`;
- `Postman`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Start

To get a local copy, setting up and running the project, follow these simple steps.

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

Import the `Project Workspace` into your `Postman`, use the following link: [postman-workspace-node-first-project-js](https://www.postman.com/sidneyaquino/workspace/rocketseat-ignite-node-02-first-project-js)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments
>[Rocketseat Ignite - Node.JS Bootcamp](https://app.rocketseat.com.br/ignite/node-js?&) 

>Build scalable and simple architectures for the web with `Node.JS` using `Javascript`, a flexible and popular language. Through a hands-on methodology based on the pillars of focus, practice, and group, you will prepare for real-world challenges and develop the behavioral skills to excel in the marketplace.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="author"></a>
## :mailbox_with_mail: Author
Made by Sidney Aquino, [get in Touch!](https://de.linkedin.com/in/sidneydeaquino) <a href="https://de.linkedin.com/in/sidneydeaquino" title="Linkein"> :incoming_envelope: </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="user-content-license"></a>
## :memo: License
This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.
