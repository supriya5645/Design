import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import "./style.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {
  return (
    <div className='sidebar' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-home fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="table">Product</CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="user">Customers</CDBSidebarMenuItem>


              <CDBSidebarMenuItem icon="chart-line">Promote</CDBSidebarMenuItem>



              <CDBSidebarMenuItem icon="exclamation-circle">Help</CDBSidebarMenuItem>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Supriya
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
