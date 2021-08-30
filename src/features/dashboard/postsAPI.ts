import api from "../../api/baseAPI";

export const fetchAllPosts = async (token: string) => {
  let page = 1;
  const totalPage = 10;
  const requests = [];

  while (page <= totalPage) {
    requests.push(fetchPosts(token, page));
    page += 1;
  }
  try {
    const results = await Promise.all(requests);
    const allPosts = results.reduce((acc, result) => acc.concat(result), []);
    return allPosts;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchPosts = async (token: string, page: number) => {
  const params = {
    sl_token: token,
    page,
  };
  try {
    const res = await api.get("/posts", { params: params });
    const {
      data: { data },
    } = res;
    return data.posts;
  } catch (err) {
    console.error(err);
    return [];
  }
};
