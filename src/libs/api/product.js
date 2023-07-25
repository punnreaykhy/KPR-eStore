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
            if (error.response && error.response.status === 429) {
                // If the error is due to rate limiting, wait for a few seconds and retry
                await wait(2000); // You can adjust the delay time as needed
                return this.getProduct(id); // Retry the request
              } else {
                console.error('Error fetching data:', error);
              }
          
            
            return null;
        }
    },
    async getProductForCart(id) {
        try {
            // Retrieve product using the first API request
            const productResponse = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
            return productResponse.data;
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // If the error is due to rate limiting, wait for a few seconds and retry
                await wait(2000); // You can adjust the delay time as needed
                return this.getProductForCate(id); // Retry the request
              } else {
                console.error('Error fetching data:', error);
              }
            
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
            if (error.response && error.response.status === 429) {
                // If the error is due to rate limiting, wait for a few seconds and retry
                await wait(2000); // You can adjust the delay time as needed
                return this.getByCate(id); // Retry the request
              } else {
                console.error(error);
              }
            
            return [];
        }
    }


};

export default product;