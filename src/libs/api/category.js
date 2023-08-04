import axios from 'axios';
import apiURL from './apiURL';
var category = {
    async all() {
        try {
            // Retrieve products using an API request
            const response = await axios.get(`${apiURL}/categories/`);
            var products = response.data;
            return products;
        } catch (error) {
            console.error(error);
            return [];
        }
    },


};

export default category;