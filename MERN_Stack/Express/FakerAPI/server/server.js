const { faker } =require("@faker-js/faker")
const express = require("express") // import express from "express"
const app = express()

const createUser = () => {
    const newUser = {

    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(`501-###-####`),
    firstName: 	faker.name.firstName(),
    userId: faker.datatype.uuid(),
  };
  return newUser;
}

const newRandomUser = createUser();
console.log(newRandomUser)

const createCompany = () => {
    const NewCompany = {
        companyId: faker.datatype.uuid(),
        companyName: faker.company.name(),
        street:faker.address.street(),
        city:faker.address.city(),
        state:faker.address.state(),
        zipCode:faker.address.zipCode(),
        country:faker.address.country(),
    };
    return NewCompany;
}

const newRandomCompany = createCompany();
console.log(newRandomCompany)

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json( {newRandomUser, newRandomCompany} );
});




app.listen( 8000, () => console.log(`Listening on port: 8000`) );