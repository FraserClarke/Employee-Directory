import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

export default {
  getRandomUser: function () {
    return axios.get("https://randomuser.me/api/?results=150&nat=au");
  },
};

// const API = {
//   getRandomUser: function () {
//     return axios.get("https://randomuser.me/api/");
//   },
// };

// export default API;
//   nationality
//   https://randomuser.me/api/?nat=au

//   Random User Generator allows you to fetch up to 5,000 generated
//   users in one request using the results parameter.

// https://randomuser.me/api/?results=5000

// Specify by gender

// https://randomuser.me/api/?gender=female

// If you only wanted the names,genders,and nats of users:
// https://randomuser.me/api/?inc=gender,name,nat

// If you want everything except for login data:
// https://randomuser.me/api/?exc=login

//   Sometimes, maybe you want some random names and not extraneous data such as location, phone, etc.
// Using the inc and exc parameters, you can specify which fields to include or exclude respectively.

// By specifying only the fields you want, the generator can save time by skipping CPU intensive fields like "login" for example.

// These parameters accept the following values in a comma delimited list

// gender
// name
// location
// email
// login
// registered
// dob
// phone
// cell
// id
// picture
// nat

// Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render.
