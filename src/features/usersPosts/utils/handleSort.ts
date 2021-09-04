import moment from "moment";
import { Post } from "../../dashboard/postsSlice";

export const handleSort = (posts: Post[], type: string) => {
  if (type === "ASC") {
    return posts.sort((a, b) => {
      return (
        moment(b.created_time).valueOf() - moment(a.created_time).valueOf()
      );
    });
  }
  return posts.sort((a, b) => {
    return moment(a.created_time).valueOf() - moment(b.created_time).valueOf();
  });
};
