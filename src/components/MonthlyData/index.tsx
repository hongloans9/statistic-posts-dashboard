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
    if (monthlyPosts.length > 0) {
        return (
            <ListGroup>
                <ListGroup.Item variant="success">Average character length of posts per month &nbsp;
                    <strong>{avgPostLength(monthlyPosts)}</strong>
                </ListGroup.Item>
                <ListGroup.Item variant="info">Average number of posts per user per month &nbsp;
                    <strong>{avePostPerUserPerMonth(monthlyPosts)}</strong>
                </ListGroup.Item>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Longest post by character length &nbsp;
                            <strong>{longestPostOfMonth(monthlyPosts).message.length}</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            {longestPostOfMonth(monthlyPosts).message}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ListGroup>
        )
    } else {
        return (<h6>No data</h6>)
    }

};

export default MonthlyData