import React, { Component } from 'react';
import { Row, Col } from 'antd';
import jobSources from '../constants/jobSources';
import JobCard from './JobCard';
import { NavLink } from 'react-router-dom';

class JobSource extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <h1>Job Sources</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row>
                {jobSources.map(source => {
                  return (
                    <Col span={8}>
                      <NavLink to={`/jobs/${source.source}`}>
                        <JobCard rating={source.rating} logo={source.logo} content={source.content}></JobCard>
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
