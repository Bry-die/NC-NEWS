import axios from "axios";

const BASE_URL = "https://brydie-nc-knews.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async slug => {
  const URL = slug
    ? `${BASE_URL}/topics/${slug}/articles`
    : `${BASE_URL}/articles`;
  const { data } = await axios.get(URL);
  return data.articles;
};

export const postTopic = async topic => {
  const { data } = await axios.post(`${BASE_URL}/topics`, topic);
  return data.topic;
};
