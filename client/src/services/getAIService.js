import axios from "axios";
axios.defaults.withCredentials = true;

export const getAllAIService = (search) => {
  console.log(" getAllAIService() called");
  return axios.get(`${import.meta.env.VITE_SERVER_URL}/api/getAllAiTools`, {
    params: { search },
  });
};

export const getParticularAI = (slug) => {
  console.log(" getParticularAI() called");
  return axios.get(
    `${import.meta.env.VITE_SERVER_URL}/api/getAiToolById/${slug}`
  );
};
