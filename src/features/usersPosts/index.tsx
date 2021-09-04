import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getAllposts, Post } from '../dashboard/postsSlice';
import { fetchAllPosts } from '../dashboard/postsAPI';
import { getUsers, selectSelesctedUser } from './userSlice';
import { getAllUsers } from './utils/getAllUsers';
import UsersList from '../../components/UsersList';
import PostsList from '../../components/PostsList';
import { postsByUser } from './utils/getPostsByUser';
import { handleSort } from './utils/handleSort';
import './posts.css';

const UsersPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filterPosts, setFilterPosts] = useState<Post[]>([]);
  const [active, setActive] = useState("ASC");
  const selectedUser = useSelector(selectSelesctedUser);

  const dispatch = useDispatch()
  const token = localStorage.getItem('token');

  const clickSort = (type: string) => {
    const sorted = handleSort(filterPosts, type);
    setActive(type);
    setFilterPosts(sorted);
  };

  useEffect(() => {
    fetchAllPosts(token!).then(data => {
      setPosts(data)
      setFilterPosts(data)
      dispatch(getAllposts(data))
      const usersData = getAllUsers(data)
      dispatch(getUsers(usersData))
    })
  }, [])

  useEffect(() => {
    const data = postsByUser(posts, selectedUser)
    setActive('ASC');
    setFilterPosts(data)
  }, [selectedUser])

  return (
    <Container>
      <Row>
        <Col md={4}>

          <UsersList />
        </Col>
        <Col md={8}>
          <div className="sort-icon">
            <span className={`${active === 'ASC' && 'active'}`} onClick={() => clickSort("ASC")}><IoArrowUpCircleSharp /></span>
            <span className={`${active === 'DESC' && 'active'}`} onClick={() => clickSort("DESC")}><IoArrowDownCircleSharp /></span>
          </div>
          <PostsList posts={filterPosts} />
        </Col>
      </Row>
    </Container>
  );
}

export default UsersPosts;


