import axios from "axios";

export const baseURL = "https://api.management.parse25proje.link/api"
axios.defaults.baseURL="https://api.management.parse25proje.link/api"
const api = axios.create({
  baseURL , 
  timeout: 10000, 
});


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
    const response = await api.get("/boards", {next: { tags: ['boards'] },
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
export const deleteTask = async (token,id) => {
  try {
    const response = await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const updateTask = async (token,id,values) => {
  console.log(values)
  try {
    const response = await api.put(`/tasks/${id}`,values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};



  