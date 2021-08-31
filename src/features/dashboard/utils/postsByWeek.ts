import _ from "lodash";
import moment from "moment";
import { Post } from "../postsSlice";

export const PostsByWeek = (posts: Post[]) => {
  const weeklyPosts = _.groupBy(posts, (post: Post) =>
    moment(post.created_time).isoWeeks()
  );
  const result = _.keys(weeklyPosts).map((key: string | number) => ({
    week: key,
    totalPosts: weeklyPosts[key].length,
  }));

  return result;
};
