import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

interface JobCardProps {
  rating: string;
  logo: any;
  content: string;
}

class JobCard extends Component<JobCardProps> {
  render() {
    return (
      <Card bordered={false} style={{ margin: '10px', borderRadius: '5px' }}>
        <Row justify="end">
          <Col>
            <h6>{this.props.rating}</h6>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <img src={this.props.logo} alt="logo" style={{ height: '40px' }} />
          </Col>
          <Col span={16}>{this.props.content}</Col>
        </Row>
      </Card>
    );
  }
}

export default JobCard;
