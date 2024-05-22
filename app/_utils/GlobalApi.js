const { headers } = require("next/headers");
const {default:axios} = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL =process.env.NEXT_PUBLIC_API_URL;

const axiosClient =axios.create({
    baseURL:apiURL,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
})

const getCategory=()=> axiosClient.get('/categories?populate=*')

const getProducts=()=> axiosClient.get('/products?populate=*');

const getProductById=(id)=> axiosClient.get('/products/'+id+'?populate=*');


const getCategoryList=()=> axiosClient.get('/categories?populate=*')

//Get  Product List By Category

const getProductListByCategory=(category)=>axiosClient.get('/products?filters\[category\][CategoryName][$contains]='+category+"&populate=*")
.then(resp=>{
    return resp.data.data
})

export default {
    getProducts,
    getProductById,
    getProductListByCategory,
    getCategory,
    getCategoryList


}