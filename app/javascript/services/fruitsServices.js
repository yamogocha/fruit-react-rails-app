// encapsculate backend api calls performaning CRUD operations on fruit data
import axios from "axios";

const getFruits = async () => {
  const config = {
    method: "GET",
    url: "api/fruits.json"
  };

  return await axios(config)
    .then(response => response.data)
    .catch(error => console.log(error));
};

const addFruit = async fruit => {
  const config = {
    method: "POST",
    url: "api/fruits",
    header: {"Content-Type": "application/json"},
    data: fruit
  };

  return await axios(config).catch(error => console.log(error));
};

const deleteFruit = async id => {
  const config = {
    method: "DELETE",
    url: `api/fruits/${id}`,
    header: {"Content-Type": "application/json"},
    data: id
  };

  return await axios(config).catch(error => console.log(error));
};

const updateFruit = async fruit => {
  const config = {
    method: "PUT",
    url: `api/fruits/${fruit.id}`,
    headers: {"Content-Type": "application/json"},
    data: fruit
  };

  return await axios(config).catch(error => console.log(error));
};

export const fruitsServices = {
  getFruits,
  addFruit,
  deleteFruit,
  updateFruit
};
