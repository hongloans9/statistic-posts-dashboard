import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectPosts } from "../../features/dashboard/postsSlice";
import { PostsByWeek } from "../../features/dashboard/utils/postsByWeek";
import "./index.css";


const TableWeekData = () => {
    const posts = useSelector(selectPosts)
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Total posts</th>
                </tr>
            </thead>
            <tbody>
                {PostsByWeek(posts).map(item => <tr key={item.week}>
                    <td>{item.week}</td>
                    <td>{item.totalPosts}</td>
                </tr>)}
            </tbody>
        </Table>
    )
}
export default TableWeekData
