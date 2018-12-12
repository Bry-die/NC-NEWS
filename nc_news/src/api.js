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

export const getArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const getUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const postArticle = async (slug, article) => {
  const { data } = await axios.post(
    `${BASE_URL}/topics/${slug}/articles`,
    article
  );
  return data.topic;
};
