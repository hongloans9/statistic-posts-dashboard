import moment from "moment";
import { FunctionComponent } from "react";
import { Post } from "../../features/dashboard/postsSlice";
import "./index.css";

interface Props {
    posts: Post[]
}

const PostsList: FunctionComponent<Props> = ({ posts }: Props) => {
    const formatTime = (time: moment.MomentInput) => {
        return moment(time).format('MMMM DD, YYYY HH:mm:ss')
    }

    return (
        <div className="posts-list">
            {posts.map((post: Post) =>
                <div className="post-card" key={post.id}>
                    <div className="post-time">{formatTime(post.created_time)}</div>
                    <div className="post-message">{post.message}</div>
                </div>
            )}
        </div>
    )
}
export default PostsList
