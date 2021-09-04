import _ from "lodash";
import { Post } from "../../dashboard/postsSlice";

export const postsByUser = (posts: Post[], id: string) => {
  const result = _.filter(posts, (post) => post.from_id === id);
  return result;
};
