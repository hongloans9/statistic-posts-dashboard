import _ from "lodash";
import { Post } from "../postsSlice";

export const longestPostOfMonth = (posts: Post[]) => {
  const result = _.maxBy(posts, (post) => post.message.length);

  return result;
};
