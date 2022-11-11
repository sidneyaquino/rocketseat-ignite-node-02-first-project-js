const {v4:uuidv4} = require("uuid");
const express = require("express");
const app = express();
app.use(express.json());   // Parser: Body para Json.

// Routes.
const _ACCOUNT_ = "/account";
const _STATEMENT_ = "/statement";
const _DATE_FILTER_ = "/date";
const _BALANCE_ = "/balance";
const _CREDIT_ = "/credit";
const _DEBIT_ = "/debit";

const customers = [];

function getBalance(statement){
   return statement.reduce((acc, current) => acc += current.amount, 0);
}

function verifyExistsAccountByDocument(request, response, next){  // Middleware.
   const {document} = request.headers;
   const customer = customers.find((current) => current.document === document);
   if (!customer) {
      return response.status(400).json({err : "Customer not found! =/"});
   }
   request.customer = customer;
   return next();
}

app.post(_ACCOUNT_, (request, response) =>{     // Create "Account".
   var customer = request.body;

   if (customers.some((current) => current.document === customer.document)){
      return response.status(400).json({error: "Customer alredy exists! =/"});   
   }
   customer.id = uuidv4();
   customer.statement = [];   
   customers.push(customer);

   return response.status(201).send();
})

// Middleware: Exists Account.
app.use(verifyExistsAccountByDocument)

app.get(_ACCOUNT_, (request, response) => {     // Read Account by document.
   const {id, document, name} = request.customer;
   const customer = {
      id,
      document,
      name
   }
   return response.json(customer);
})

app.put(_ACCOUNT_, (request, response) => {     // Update Account's name.
   const {name} = request.body;
   const {customer} = request;
   customer.name = name;

   return response.status(201).send();
})

app.delete(_ACCOUNT_, (request, response) => {  // Erase Account.
   const {customer} = request;
   customers.splice(customers.indexOf(customer), 1);

   return response.status(201).send();
})

app.get(_STATEMENT_, (request, response) =>{    // List Statement by document.
   const {customer} = request;
   return response.json(customer.statement);
})

app.get(_STATEMENT_+_DATE_FILTER_, (request, response) =>{  // List Statement by date.
   const date = new Date(request.query.date);
   const {customer} = request;
   const statement = customer.statement.filter(
      (current) => current.create_at.toDateString() === date.toDateString()
   )   
   return response.json(statement);
})

app.post(_CREDIT_, (request, response) => {     // Create Statement for Credit.
   const {customer} = request;
   const transaction = request.body;

   transaction.create_at = new Date();
   customer.statement.push(transaction);

   return response.status(201).send();
})

app.post(_DEBIT_, (request, response) => {      // Create Statement for Debit.
   const {customer} = request;
   const transaction = request.body;
      
   if (getBalance(customer.statement) < transaction.amount){
      return response.status(400).json({error: "Unavailable amount! ='("});   
   }
   transaction.amount *= -1
   transaction.create_at = new Date();
   customer.statement.push(transaction);

   return response.status(201).send();
})

app.get(_BALANCE_, (request, response) =>{      // Read Balance Statement.
   const {customer} = request;
   return response.json(getBalance(customer.statement));
})

app.listen(3333);