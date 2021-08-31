import moment from "moment";

export const handleSort = (posts, type) => {
  if (type === "ASC") {
    return posts.sort((a, b) => {
      return moment(b.created_time) - moment(a.created_time);
    });
  }
  return posts.sort((a, b) => {
    return moment(a.created_time) - moment(b.created_time);
  });
};
