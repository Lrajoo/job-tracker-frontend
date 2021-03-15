import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import columns from '../constants/jobListTableFields';
import { observer } from 'mobx-react';
import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';

class JobListViewModel {
  jobs: any[];
  source: string;
  constructor() {
    makeAutoObservable(this);
    this.jobs = [];
    this.source = '';
  }

  @action
  getJobs = async (source: string) => {
    const { data } = await axios.get(`https://jobtracker-backend.herokuapp.com/opportunities/${source}`);
    this.jobs = data;
  };

  @action
  getJobSource = () => {
    this.source = window.location.pathname.split('/')[2];
  };
}

@observer
class JobList extends Component {
  vm = new JobListViewModel();

  async componentDidMount() {
    this.vm.getJobSource();
    await this.vm.getJobs(this.vm.source);
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Row style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <Col span={12}>
              <Row justify="start">
                <h1>Job Source: {this.vm.source.split('%20').join(' ')}</h1>
              </Row>
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
              <Table columns={columns} dataSource={this.vm.jobs} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default JobList;
