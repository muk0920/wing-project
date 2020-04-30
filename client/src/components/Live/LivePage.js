import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import MenuTab from './MenuTab';  
import Page from './LiveTemplateComponent/Page';
import './LivePage.css';
import LivePannel from './LivePannel';

class  LivePage extends React.Component{

    render(){
    return (
        <>
            <MenuTab />  
            <LivePannel />  
        </>
    ) 
  }; 
}
        
export default LivePage; 