import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:8000/api/v1",
});

// modifier la réponse pour retourner directement data
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;