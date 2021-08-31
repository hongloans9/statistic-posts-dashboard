import { useDispatch, useSelector } from "react-redux";
import { selectSelesctedUser, selectUsers, setSelectedUser, User } from "../../features/usersPosts/userSlice";
import "./index.css";

const UsersList = () => {
    const users = useSelector(selectUsers)
    const selectedUser = useSelector(selectSelesctedUser);
    const dispatch = useDispatch()

    return (
        <div className="user-list">
            {users.map((user: User) =>
                <div key={user.id} className={`user-item ${selectedUser === user.id && 'selected'}`} onClick={() => dispatch(setSelectedUser(user.id))}>
                    {user.name}
                    <span className="posts-number">{user.totalPosts}</span>
                </div>
            )}
        </div>
    )
}
export default UsersList
