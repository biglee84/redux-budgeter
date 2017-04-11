import axios from 'axios'

//EXAMPLE USAGE OF AXIOS

function getDataExample(){
    return axios.get(`API-URL`);
}

export default function getData(){
  return axios.all([getDataExample()])
    .then((arrData) => ({data: arrData}))
}
