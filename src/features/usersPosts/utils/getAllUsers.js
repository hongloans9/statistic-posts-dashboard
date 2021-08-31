import _ from "lodash";

export const getAllUsers = (posts) => {
  const userPosts = _.groupBy(posts, "from_id");

  const users = _.keys(userPosts).map((key) => ({
    id: key,
    name: userPosts[key][0].from_name,
    totalPosts: userPosts[key].length,
  }));

  const result = _.sortBy(users, "name");

  return result;
};
