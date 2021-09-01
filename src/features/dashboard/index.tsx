import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import MonthlyData from '../../components/MonthlyData';
import TableWeekData from '../../components/TableWeekData';
import { monthNames } from '../../constant/months';
import { fetchAllPosts } from './postsAPI';
import { getAllposts, Post } from './postsSlice';
import './dashboard.css'

const Dashboard = () => {
  const [posts, setposts] = useState<Post[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(-1);
  const [viewOverview, setViewOverview] = useState<boolean>(true);
  const dispatch = useDispatch()
  const token = localStorage.getItem('token');

  function selectMonth(month: number): void {
    setViewOverview(false)
    setSelectedMonth(month)
  }

  useEffect(() => {
    fetchAllPosts(token!).then(data => {
      setposts(data)
      dispatch(getAllposts(data))
    })
  }, [])

  return (
    <Container>
      <Row>
        <h1>Statistics Dashboard</h1>
        <Col sm={4}>
          <div className="sidebar-wrap">
            <h4 className="overview" onClick={() => setViewOverview(true)}>Overview</h4>
            <h4>Monthly</h4>
            <div className="month-wrap">
              {monthNames.map((month, index) =>
                <h6 key={index}
                  className={`nav-item ${selectedMonth === index && 'selected'}`}
                  onClick={() => selectMonth(index)}>{month}</h6>)}
            </div>
          </div>
        </Col>
        <Col sm={8}>
          {viewOverview ? <TableWeekData /> : <MonthlyData posts={posts} selectedMonth={selectedMonth} />}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;


