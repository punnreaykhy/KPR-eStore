import axios from 'axios';
var category = {
    async all() {
        try {
            // Retrieve products using an API request
            const response = await axios.get('http://127.0.0.1:8000/api/categories/');
            var products = response.data;
            return products;
        } catch (error) {
            console.error(error);
            return [];
        }
    },


};

export default category;