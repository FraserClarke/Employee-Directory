import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/");
  },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};

// Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render.