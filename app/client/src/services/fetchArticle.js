import ArticleService from "./articleService";

const fetchArticle = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await ArticleService.getArticle(id);

  return res.data;
};

export default fetchArticle;
