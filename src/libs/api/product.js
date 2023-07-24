import axios from 'axios';
var product = {
    async all() {
        try {
            // Retrieve products using an API request
            const response = await axios.get('http://127.0.0.1:8000/api/products/');
            var products = response.data.data;
            return products;
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    async getProduct(id) {
        try {
            // Retrieve product using the first API request
            const productResponse = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
            var product = productResponse.data;

            // Retrieve category using another API request
            const categoryResponse = await axios.get(`http://127.0.0.1:8000/api/categories/${product?.category_id}`);
            var category = categoryResponse.data;

            const productImagesRes = await axios.get(`http://127.0.0.1:8000/api/productImg/filter/${product?.id}`);
            var pImgs = productImagesRes.data;
            
            // Assuming category data contains a 'name' property, you can add it to the product object
            product.category_name = category?.name;
            product.imagesPath = pImgs;
            return product;


        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    },
    async getProductForCate(id) {
        try {
            // Retrieve product using the first API request
            const productResponse = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
            return productResponse.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    },

    async getByCate(name) {
        try {
            // Retrieve products using an API request
            const response = await axios.get(`http://127.0.0.1:8000/api/products/filter/${name}`);
            var products = response.data;
            return products;
        } catch (error) {
            console.error(error);
            return [];
        }
    }


};

export default product;