import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import routes from './routes';
import configureStore from './store/configureStore';
import 'antd/dist/antd.min.css';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Provider store={store}>
          <Router>
            {renderRoutes(routes)}
          </Router>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;
