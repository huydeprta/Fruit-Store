import http from "../../config/http";
const SearchFruit = async (keyword) => {
    try {
        const {data} = await http.get(`/search/products/?keyword=${keyword}`);      
        return data;
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export {
    SearchFruit
};