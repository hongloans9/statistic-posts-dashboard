import _ from "lodash";

export const longestPostOfMonth = (posts) => {
  const result = _.maxBy(posts, (post) => post.message.length);

  return result;
};
