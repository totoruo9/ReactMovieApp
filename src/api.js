import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key: "42a7540b38af0ffb4e2971095ccc332b",
        language: "en-US"
    }
});

api.get("tv/popular");

export default api;