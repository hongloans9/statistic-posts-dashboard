import _ from "lodash";
import { Post } from "../postsSlice";

export const avePostPerUserPerMonth = (posts: Post[]) => {
  const users = _.uniqBy(posts, "from_id");
  const result = _.round(posts.length / users.length, 2);
  return result;
};
