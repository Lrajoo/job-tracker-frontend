import React, { Component } from 'react';
import { Row, Col } from 'antd';
import JobCard from './JobCard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { observer } from 'mobx-react';
import { action, makeAutoObservable } from 'mobx';

class JobSourceViewModel {
  boards: [];
  constructor() {
    makeAutoObservable(this);
    this.boards = [];
  }

  @action
  getJobBoards = async () => {
    const { data } = await axios.get('http://localhost:3000/boards');
    this.boards = data;
  };
}

@observer
class JobSource extends Component {
  vm = new JobSourceViewModel();

  async componentDidMount() {
    await this.vm.getJobBoards();
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          <Row style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <Col span={24}>
              <h1>Job Sources</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row>
                {this.vm.boards.map((source: any) => {
                  return (
                    <Col xs={24} sm={8} key={source['_id']}>
                      <NavLink to={`/jobs/${source['name']}`}>
                        <JobCard
                          rating={source['rating']}
                          logo={source['logoFile']}
                          content={source['description']}
                        ></JobCard>
                      </NavLink>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default JobSource;
