import axios from "axios";

// Make an https request
const SearchArticles = async (term) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        headers: {},
        params: {
            query: term
        }
    });
    return response.data
};

export default SearchArticles;