import axios from "axios";

// Axios instance oluştur
const api = axios.create({
  baseURL: "https://api.management.parse25proje.link/api/", // API adresini buraya girin
  timeout: 10000, // İsteğin zaman aşımı süresi (milisaniye cinsinden)
});

// Login işlemi için bir fonksiyon oluştur
export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    response.data &&
      localStorage.setItem("Auth", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getAllBoardandTasks = async (token) => {
  try {
    const response = await api.get("/boards", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const fetchFlags = async (token) => {
  try {
    const response = await api.get("/commons/flags", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const addTask = async (token,values) => {
  try {
    const response = await api.post("/tasks",values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


