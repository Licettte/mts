import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ConfigProvider, ThemeConfig } from 'antd';
import  { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/store/store.ts';
import { Provider } from 'react-redux';

//..styles/config
const config: ThemeConfig = {
    token: {
      colorPrimary: "#276098",
      colorLink: '#df96ee',
      borderRadius: 10,
      colorBgContainer: '#f6ffed',

  },
  };
//TODO https://ant.design/docs/react/customize-theme


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ConfigProvider theme={config}>
        <Provider store={store}>
          <App/>
        </Provider>
      </ConfigProvider>
    </StrictMode>
  </BrowserRouter>,
);
