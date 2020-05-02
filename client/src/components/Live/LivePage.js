import React from 'react';
import MenuTab from './MenuTab';  
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