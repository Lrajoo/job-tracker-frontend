import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import JobSource from './components/JobSource';
import JobList from './components/JobList';
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Content>
          <Switch>
            <Route path="/" exact>
              <JobSource />
            </Route>
            <Route path="/jobs/:source" exact>
              <JobList />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
