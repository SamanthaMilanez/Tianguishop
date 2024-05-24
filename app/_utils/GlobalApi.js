const { default: axios } = require("axios");
const QRCode = require('qrcode');

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const axiosClient = axios.create({
    baseURL: apiURL,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});

const getCategory = () => axiosClient.get('/categories?populate=*');
const getProducts = () => axiosClient.get('/products?populate=*');
const getProductById = (id) => axiosClient.get('/products/' + id + '?populate=*');
const getCategoryList = () => axiosClient.get('/categories?populate=*');

const getProductListByCategory = (category) => axiosClient.get('/products?filters[category][CategoryName][$contains]=' + category + "&populate=*")
    .then(resp => {
        return resp.data.data;
    });

const registerUser = (userData) => {
    return axiosClient.post('/auth/local/register', userData);
};

const loginUser = (userData) => {
    return axiosClient.post('/auth/local', userData);
};

const createStore = (storeData, userId) => {
    const formData = new FormData();
    formData.append('data', JSON.stringify({
        NombrePuesto: storeData.NombrePuesto,
        Address: storeData.Address,
        user: userId // Assign the store to the logged-in user
    }));
    formData.append('files.StoreImage', storeData.StoreImage);

    return axiosClient.post('/puestos', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

const createProduct = async (productData, puestoId) => {
    const formData = new FormData();
    const payload = {
        name: productData.name,
        descripcion: productData.descripcion,
        price: productData.price,
        category: productData.category,
        puesto: puestoId // Use puestoId here
    };
    formData.append('data', JSON.stringify(payload));
    formData.append('files.image', productData.image);

    console.log('Payload:', payload);
    console.log('FormData:', formData);

    try {
        const response = await axiosClient.post('/products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        const productId = response.data.data.id;
        const qrCodeUrl = await QRCode.toDataURL('https://www.tianguishop.com/product-detail/' + productId);

        await axiosClient.put('/products/' + productId, {
            data: {
                qrCodeUrl: qrCodeUrl
            }
        });

        return {
            ...response.data,
            qrCodeUrl: qrCodeUrl
        };
    } catch (error) {
        console.error('Error creating product:', error.response?.data || error.message);
        throw error;
    }
};

const getUserProducts = (userId) => axiosClient.get(`/products?filters[puesto][user][id][$eq]=${userId}&populate=*`)
    .then(resp => {
        return resp.data.data;
    });

const getUserData = (token) => {
    return axiosClient.get('/users/me?populate=puesto.StoreImage', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default {
    getCategory,
    getProducts,
    getProductById,
    getProductListByCategory,
    getCategoryList,
    registerUser,
    loginUser,
    createStore,
    createProduct,
    getUserProducts,
    getUserData
};
