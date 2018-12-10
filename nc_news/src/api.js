import axios from "axios";

const BASE_URL = "https ://brydie-nc-knews.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  console.log(data);
  return data.topics;
};
