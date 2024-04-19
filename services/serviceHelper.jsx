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

// Başka API çağrıları eklemek isterseniz diye bir örnek fonksiyon daha
export const fetchUserData = async (token) => {
  try {
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`, // Yetkilendirme token'ını gönder
      },
    });
    return response.data; // Kullanıcı verilerini döndür
  } catch (error) {
    throw error.response.data; // Hata oluşursa hata mesajını döndür
  }
};
