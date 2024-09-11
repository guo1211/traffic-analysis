import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Card, DatePicker } from 'antd';
import TrafficTable from './components/traffic-table';
import TrafficCards from './components/tarffic-cards';
import GapCard from './components/gap-card';
import './App.css'
import logo from './assets/qcl_logo.png'
const { Header, Content, Footer, Sider } = Layout;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('流量可视', '1', <PieChartOutlined />),
  getItem('攻击分析', '2', <DesktopOutlined />),
  getItem('XXX', 'sub1', <UserOutlined />, [
    getItem('XXX', '3'),
    getItem('XXX', '4'),
    getItem('XXX', '5'),
  ]),
  getItem('XXX', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('XXX', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [selectedKey, setSelectKey] = useState('1')
  const handleMenuSelect = (key) => {
    console.log(key, "kkkkk");
    
    setSelectKey(key?.key)
  }

  
const renderContent = () => {
  switch(selectedKey) {
    case '1':
      return (
        <div>
          <TrafficTable />
          <GapCard 
            content="流量统计 - 2024.9.4"
            style={{
              marginTop: 30,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 800
            }}
          />
          <TrafficCards />
        </div>

      )
  }
}

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
  
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" > 
          <img src={logo} alt="logo" width={150}/>
        </div>
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          items={items} 
          onSelect={handleMenuSelect}
          title="dsd"
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#001529",
            color: "#fff"
          }}
        >
          流量统计与安全观测系统
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>main</Breadcrumb.Item>
            <Breadcrumb.Item>traffic</Breadcrumb.Item>
            
            <DatePicker onChange={onChange} needConfirm />
          </Breadcrumb>
          
          {renderContent()}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          QCL ©{new Date().getFullYear()} Created by 网络空间安全试验小组
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;