import React, { Component } from 'react';
import LiveList from './LiveTemplateComponent/LiveList';
import BestLive from './BestLiveComponent/BestLive';
import {Route} from 'react-router-dom'; 

class LivePannel extends Component {
    render() {
        return (
            <div>
                <Route exact path="/Live" component={BestLive} />
                <Route exact path="/Live/BestLive" component={BestLive} />
                <Route exact path="/Live/RecommandLive" component={LiveList} />           
            </div>
        );
    }
}

export default LivePannel;