import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import JobSource from './components/JobSource';
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Content>
          <Switch>
            <Route path="/">
              <JobSource />
            </Route>
            <Route path="/jobs/:source">
              <h1>test</h1>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
