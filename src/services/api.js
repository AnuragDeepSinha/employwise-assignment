import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchUsers = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users?page=${page}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/users/${id}`);
    } catch (error) {
        throw error.response.data;
    }
};
