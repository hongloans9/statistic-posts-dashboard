import _ from "lodash";

export const postsByUser = (posts, id) => {
  const result = _.filter(posts, (post) => post.from_id === id);
  return result;
};
