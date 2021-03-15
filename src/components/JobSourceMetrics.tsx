import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'antd';
import JobCard from './JobCard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { observer } from 'mobx-react';
import { action, makeAutoObservable } from 'mobx';
import columns from '../constants/jobMetricsTableFields';

class JobSourceMetricsViewModel {
  boards: any[];
  metrics: any[];
  constructor() {
    makeAutoObservable(this);
    this.boards = [];
    this.metrics = [];
  }

  @action
  getJobBoards = async () => {
    const { data } = await axios.get('http://localhost:3000/boards');
    this.boards = data;
  };

  getJobOpportunities = async (source: string) => {
    const { data } = await axios.get(`http://localhost:3000/opportunities/${source}`);
    return data.length;
  };

  getJobSourceMetrics = async () => {
    this.boards.map(async board => {
      const count = await this.getJobOpportunities(board['name']);
      this.metrics.push({
        source: board['name'],
        count: count
      });
    });
  };
}

@observer
class JobSourceMetrics extends Component {
  vm = new JobSourceMetricsViewModel();
  async componentDidMount() {
    await this.vm.getJobBoards();
    await this.vm.getJobSourceMetrics();
    console.log(this.vm.metrics);
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          <Row style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <Col span={12}>
              <h1>Job Source Metrics</h1>
            </Col>
            <Col span={12}>
              <Row justify="end">
                <NavLink to="/">
                  <Button>Job Sources</Button>
                </NavLink>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table columns={columns} dataSource={JSON.parse(JSON.stringify(this.vm.metrics))} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default JobSourceMetrics;
