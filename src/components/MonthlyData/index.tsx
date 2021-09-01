import moment from "moment";
import { FunctionComponent } from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import { Post } from "../../features/dashboard/postsSlice";
import { avePostPerUserPerMonth } from "../../features/dashboard/utils/averagePost-user-month";
import { avgPostLength } from "../../features/dashboard/utils/averagePostLength";
import { longestPostOfMonth } from "../../features/dashboard/utils/longestPostOfMonth";
import { totalPostsByMonth } from "../../features/dashboard/utils/postsByMonth";
import "./index.css";

interface Props {
    posts: Post[]
    selectedMonth: number
}

const MonthlyData: FunctionComponent<Props> = ({ posts, selectedMonth }: Props): JSX.Element => {

    const monthlyPosts = totalPostsByMonth(posts, selectedMonth)
    const longestPost = longestPostOfMonth(monthlyPosts)
    const formatTime = (time: moment.MomentInput) => {
        return moment(time).format('MMMM DD, YYYY HH:mm:ss')
    }

    if (monthlyPosts.length > 0) {
        return (
            <div className="monthly-wrap">
                <p className="monthly-data">Average character length of posts per month: &nbsp;
                    <strong>{avgPostLength(monthlyPosts)}</strong>
                </p>
                <p className="monthly-data">Average number of posts per user per month: &nbsp;
                    <strong>{avePostPerUserPerMonth(monthlyPosts)}</strong>
                </p>
                <p className="monthly-data">Longest post by character length: &nbsp;
                    <strong>{longestPost.message.length}</strong> characters
                </p>
                <div className="longestPost-time">{formatTime(longestPost.created_time)} by {longestPost.from_name}</div>
                <div className="longestPost-message">{longestPost.message}</div>
            </div>
        )
    } else {
        return (<h6>No data</h6>)
    }

};

export default MonthlyData