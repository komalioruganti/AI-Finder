import { getAllAIService, getParticularAI } from "../services/getAIService";

const getAiHandler = () => {
  const getAllAI = async (search) => {
    const result = await getAllAIService(search);
    return result;
  };

  const getAI = async (slug) => {
    const result = await getParticularAI(slug);
    return result;
  };

  return { getAllAI, getAI };
};

export default getAiHandler;
