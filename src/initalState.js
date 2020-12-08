/* eslint-disable no-unused-vars */
const axios = require('axios');

const dataAPI = [];

axios
  .get(
    'https://sandbox-api.brewerydb.com/v2/beers/?key=612571319c2c15049ce3b75fb0c645e5',
  )
  .then((result) => {
    const { data } = result.data;
    data.map((item) => dataAPI.push(item.name));
  })
  .catch((err) => {});

export default dataAPI;
