import _ from "lodash";
import { Post } from "../postsSlice";

export const avgPostLength = (posts: Post[]) => {
  const meanData = _.meanBy(posts, (post) => post.message.length);
  const result = _.round(meanData, 2);

  return result;
};
