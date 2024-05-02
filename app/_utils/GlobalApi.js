const { headers } = require("next/headers");
const {default:axios} = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL ='http://localhost:1337/api/';

const axiosClient =axios.create({
    baseURL:apiURL,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
})

const getProducts=()=> axiosClient.get('/products?populate=*');

const getProductById=(id)=> axiosClient.get('/products/'+id+'?populate=*');


export default {
    getProducts,
    getProductById


}