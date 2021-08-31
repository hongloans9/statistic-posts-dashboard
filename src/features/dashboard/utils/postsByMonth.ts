import _ from "lodash";
import moment from "moment";
import { Post } from "../postsSlice";

export const totalPostsByMonth = (posts: Post[], month: number) => {
  const result = _.filter(
    posts,
    (post) => moment(post.created_time).month() === month
  );

  return result;
};
